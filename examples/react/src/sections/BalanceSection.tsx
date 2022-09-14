import { useAccount, useBalance } from '@web3modal/react'

export default function BalanceSection() {
  const { balance, refetch, isLoading } = useBalance()
  const account = useAccount()

  function onSignMessage() {
    refetch({ addressOrName: account.address, chainId: account.chainId, formatUnits: 'wei' })
  }

  return (
    <section>
      <h1>Balance</h1>
      <button type="button" disabled={isLoading} onClick={onSignMessage}>
        Get Balance
      </button>
      {balance ? <p>{balance}</p> : null}
    </section>
  )
}
