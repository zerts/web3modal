import {
  ClientCtrl,
  ConfigCtrl,
  CoreUtil,
  ExplorerCtrl,
  ModalCtrl,
  OptionsCtrl,
  ToastCtrl
} from '@web3modal/core'
import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { animate, spring } from 'motion'
import { ThemeUtil } from '../../utils/ThemeUtil'
import { UiUtil } from '../../utils/UiUtil'
import styles from './styles.css'

@customElement('w3m-modal')
export class W3mModal extends LitElement {
  public static styles = [ThemeUtil.globalCss, styles]

  // -- state & properties ------------------------------------------- //
  @state() private open = false
  @state() private preload = true
  @state() private activeChainId?: number = undefined

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super()
    ThemeUtil.setTheme()

    // Subscribe to modal config and theme changes
    this.unsubscribeConfig = ConfigCtrl.subscribe(ThemeUtil.setTheme)
    this.unsubscribeModal = ModalCtrl.subscribe(modalState => {
      if (modalState.open) {
        this.onOpenModalEvent()
      } else {
        this.onCloseModalEvent()
      }
    })

    if (!OptionsCtrl.state.isStandalone) {
      OptionsCtrl.getAccount()
      const chain = OptionsCtrl.getSelectedChain()
      this.activeChainId = chain?.id
      this.fetchProfile()
      this.fetchBalance()

      // Subscribe network changes
      this.unwatchNetwork = ClientCtrl.client().watchNetwork(network => {
        OptionsCtrl.setSelectedChain(network.chain)
        this.activeChainId = network.chain?.id
        OptionsCtrl.resetProfile()
        this.fetchProfile()
        this.fetchBalance()
      })

      // Subscribe account changes
      this.unwatchAccount = ClientCtrl.client().watchAccount(account => {
        const { address } = OptionsCtrl.state
        if (account.address !== address) {
          this.fetchProfile(account.address)
          this.fetchBalance(account.address)
        }
        OptionsCtrl.setAddress(account.address)
        OptionsCtrl.setIsConnected(account.isConnected)
      })
    }

    // Load explorer and image data
    this.preloadModalData()
  }

  public disconnectedCallback() {
    this.unsubscribeModal?.()
    this.unsubscribeConfig?.()
    this.unwatchAccount?.()
    this.unwatchNetwork?.()
  }

  // -- private ------------------------------------------------------ //
  private readonly unsubscribeModal?: () => void = undefined
  private readonly unsubscribeConfig?: () => void = undefined
  private readonly unwatchAccount?: () => void = undefined
  private readonly unwatchNetwork?: () => void = undefined

  private get overlayEl() {
    return UiUtil.getShadowRootElement(this, '.w3m-overlay')
  }

  private get containerEl() {
    return UiUtil.getShadowRootElement(this, '.w3m-container')
  }

  private async fetchProfile(profileAddress?: `0x${string}`) {
    try {
      OptionsCtrl.setProfileLoading(true)
      const address = profileAddress ?? OptionsCtrl.state.address
      if (address && this.activeChainId === 1) {
        const [name, avatar] = await Promise.all([
          ClientCtrl.client().fecthEnsName({ address }),
          ClientCtrl.client().fetchEnsAvatar({ address })
        ])
        if (avatar) {
          await UiUtil.preloadImage(avatar)
        }
        OptionsCtrl.setProfileName(name)
        OptionsCtrl.setProfileAvatar(avatar)
      }
    } catch (err) {
      ToastCtrl.openToast(UiUtil.getErrorMessage(err), 'error')
    } finally {
      OptionsCtrl.setProfileLoading(false)
    }
  }

  private async fetchBalance(balanceAddress?: `0x${string}`) {
    try {
      OptionsCtrl.setBalanceLoading(true)
      const address = balanceAddress ?? OptionsCtrl.state.address
      if (address) {
        const balance = await ClientCtrl.client().fetchBalance({ address })
        OptionsCtrl.setBalance({ amount: balance.formatted, symbol: balance.symbol })
      }
    } catch (err) {
      ToastCtrl.openToast(UiUtil.getErrorMessage(err), 'error')
    } finally {
      OptionsCtrl.setBalanceLoading(false)
    }
  }

  private toggleBodyScroll(enabled: boolean) {
    const [body] = document.getElementsByTagName('body')
    if (enabled) {
      body.style.overflow = 'auto'
    } else {
      body.style.overflow = 'hidden'
    }
  }

  private async preloadExplorerData() {
    const { standaloneChains, chains, isExplorer } = OptionsCtrl.state
    if (isExplorer) {
      const chainsFilter = standaloneChains?.join(',')
      await Promise.all([
        ExplorerCtrl.getPreviewWallets({
          page: 1,
          entries: 10,
          chains: chainsFilter,
          device: CoreUtil.isMobile() ? 'mobile' : 'desktop'
        }),
        ExplorerCtrl.getRecomendedWallets()
      ])
      const { previewWallets, recomendedWallets } = ExplorerCtrl.state
      const chainsImgs = chains?.map(chain => UiUtil.getChainIcon(chain.id)) ?? []
      const walletImgs = [...previewWallets, ...recomendedWallets].map(
        wallet => wallet.image_url.lg
      )
      await this.preloadExplorerImages([...chainsImgs, ...walletImgs])
    }
  }

  private async preloadExplorerImages(images: string[]) {
    if (images.length) {
      await Promise.all(images.map(async url => UiUtil.preloadImage(url)))
    }
  }

  private async preloadCustomImages() {
    const images = UiUtil.getCustomImageUrls()
    if (images.length) {
      await Promise.all(images.map(async url => UiUtil.preloadImage(url)))
    }
  }

  private async preloadConnectorImages() {
    const images = UiUtil.getConnectorImageUrls()
    if (images.length) {
      await Promise.all(images.map(async url => UiUtil.preloadImage(url)))
    }
  }

  private async preloadModalData() {
    try {
      if (this.preload) {
        this.preload = false
        await Promise.all([
          this.preloadExplorerData(),
          this.preloadCustomImages(),
          this.preloadConnectorImages()
        ])
      }
    } catch {
      ToastCtrl.openToast('Failed preloading', 'error')
    }
  }

  private onCloseModal(event: PointerEvent) {
    if (event.target === event.currentTarget) {
      ModalCtrl.close()
    }
  }

  private async onOpenModalEvent() {
    await this.preloadModalData()
    this.toggleBodyScroll(false)
    const delay = 0.2
    await animate(this.containerEl, { y: 0 }, { duration: 0 }).finished
    animate(this.overlayEl, { opacity: [0, 1] }, { duration: 0.2, delay })
    animate(
      this.containerEl,
      UiUtil.isMobileAnimation() ? { y: ['50vh', 0] } : { scale: [0.98, 1] },
      {
        scale: { easing: spring({ velocity: 0.4 }) },
        y: { easing: spring({ mass: 0.5 }) },
        delay
      }
    )
    document.addEventListener('keydown', this.onKeyDown)
    this.open = true
    this.containerEl.focus()
  }

  private async onCloseModalEvent() {
    this.toggleBodyScroll(true)
    document.removeEventListener('keydown', this.onKeyDown)
    await Promise.all([
      animate(
        this.containerEl,
        UiUtil.isMobileAnimation() ? { y: [0, '50vh'] } : { scale: [1, 0.98] },
        {
          scale: { easing: spring({ velocity: 0 }) },
          y: { easing: spring({ mass: 0.5 }) }
        }
      ).finished,
      animate(this.overlayEl, { opacity: [1, 0] }, { duration: 0.2 }).finished
    ])
    this.open = false
  }

  private onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      ModalCtrl.close()
    }
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    const classes = {
      'w3m-overlay': true,
      'w3m-open': this.open
    }

    return html`
      <div
        id="w3m-modal"
        class=${classMap(classes)}
        @click=${this.onCloseModal}
        role="alertdialog"
        aria-modal="true"
      >
        <div class="w3m-container" tabindex="0">
          ${this.open
            ? html`
                <w3m-modal-backcard></w3m-modal-backcard>
                <div class="w3m-card">
                  <w3m-modal-router></w3m-modal-router>
                  <w3m-modal-toast></w3m-modal-toast>
                </div>
              `
            : null}
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-modal': W3mModal
  }
}
