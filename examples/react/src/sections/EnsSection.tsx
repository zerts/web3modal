import { useFetchEnsAvatar, useFetchEnsAddress, useFetchEnsName } from '@web3modal/react'

export default function SignMessageSection() {
  function onSignMessage() {
    sign('Test Message')
  }

  return (
    <section>
      <h1>Sign Message</h1>
      <button type="button" disabled={isLoading} onClick={onSignMessage}>
        Sign Message
      </button>
      {signature ? <p>{signature}</p> : null}
    </section>
  )
}
