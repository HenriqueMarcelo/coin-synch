import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import '../Modal/styles.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ReactNode, useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  children?: ReactNode
}

export function SignInModal({ children }: Props) {
  const [open, setOpen] = useState(false)

  const router = useRouter()

  const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().nonempty(),
  })

  type SignIn = z.infer<typeof signInSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
  })

  async function onSubmit({ email, password }: SignIn) {
    // simulando espera de 1 segundo
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(email, password)
    reset()

    router.push('/dashboard')
  }

  return (
    <Modal trigger={children} open={open} onOpenChange={setOpen}>
      <form
        className="modal-components__form"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <Input
          placeholder="Email"
          type="email"
          Icon={EnvelopeSimple}
          disabled={isSubmitting}
          error={!!errors.email}
          {...register('email')}
        />
        <Input
          placeholder="Password"
          type="password"
          Icon={Lock}
          disabled={isSubmitting}
          error={!!errors.password}
          {...register('password')}
        />
        <button className="modal-components__forgot">Forgot password?</button>
        <Button disabled={isSubmitting}>Sign In</Button>
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
