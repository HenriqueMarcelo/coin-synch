import { Lock } from '@phosphor-icons/react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import '../Modal/styles.scss'

export function SignUpModal() {
  return (
    <Modal open>
      <form className="modal-components__form">
        <h1 className="modal-components__title">
          Sign in to
          <span className="modal-components__logo modal-components__logo--yellow">
            {' '}
            Coin
          </span>
          <span className="modal-components__logo modal-components__logo--gray">
            Synch
          </span>
        </h1>
        <Input />
        <Input type="password" Icon={Lock} />
        <button className="modal-components__forgot">Forgot password?</button>
        <Button>Sign In</Button>
        <p className="modal-components__footer">
          Don&apos;t have an account?
          <a href="">
            <span className="modal-components__footer--bold"> Sign up to </span>
            <span className="modal-components__footer--yellow">Coin</span>
            <span className="modal-components__footer--gray">Synch</span>
          </a>
        </p>
      </form>
    </Modal>
  )
}
