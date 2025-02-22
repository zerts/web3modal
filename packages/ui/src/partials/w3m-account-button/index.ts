import { ModalCtrl } from '@web3modal/core'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeUtil } from '../../utils/ThemeUtil'
import styles from './styles.css'

@customElement('w3m-account-button')
export class W3mAccountButton extends LitElement {
  public static styles = [ThemeUtil.globalCss, styles]

  // -- state & properties ------------------------------------------- //
  @property() public balance?: 'hide' | 'show' = 'hide'

  // -- private ------------------------------------------------------ //
  private buttonTemplate() {
    return html`
      <button @click=${ModalCtrl.open}>
        <w3m-avatar></w3m-avatar>
        <w3m-address-text></w3m-address-text>
      </button>
    `
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    const isBalance = this.balance === 'show'

    return isBalance
      ? html`
          <div>
            <w3m-balance></w3m-balance>
            ${this.buttonTemplate()}
          </div>
        `
      : this.buttonTemplate()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-account-button': W3mAccountButton
  }
}
