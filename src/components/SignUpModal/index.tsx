import { EnvelopeSimple, Lock, User } from '@phosphor-icons/react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import '../Modal/styles.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { DialogProps } from '@radix-ui/react-dialog'
import { useModal } from '@/hooks/use-modal'
import { apiJson } from '@/lib/axios'

type Props = DialogProps

export function SignUpModal({ children, ...rest }: Props) {
  const { closeSignUpModal, openSignInModal } = useModal()
  const router = useRouter()

  const signUpSchema = z
    .object({
      name: z.string().nonempty(),
      email: z.string().email(),
      password: z.string().nonempty(),
      confirm_password: z.string().nonempty(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords don't match",
      path: ['confirm_password'], // path of error
    })

  type SignUp = z.infer<typeof signUpSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  })

  async function onSubmit({ name, email, password }: SignUp) {
    await apiJson.post('/users', { name, email, password })

    reset()
    router.push('/dashboard')
  }

  function handleChangeModal() {
    openSignInModal()
    closeSignUpModal()
  }

  return (
    <Modal trigger={children} {...rest}>
      <form
        className="modal-components__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="modal-components__title">
          Sign up to
          <span className="modal-components__logo modal-components__logo--yellow">
            {' '}
            Coin
          </span>
          <span className="modal-components__logo modal-components__logo--gray">
            Synch
          </span>
        </h1>
        <Input
          placeholder="Name"
          type="text"
          Icon={User}
          disabled={isSubmitting}
          error={!!errors.name}
          {...register('name')}
        />
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
        <Input
          placeholder="Confirm password"
          type="password"
          Icon={Lock}
          disabled={isSubmitting}
          error={!!errors.confirm_password}
          {...register('confirm_password')}
        />
        <div className="modal-components__policy">
          <input
            required
            type="checkbox"
            className="modal-components__checkbox"
          />
          <p>
            I have read and accept the
            <strong> Privacy Policy</strong> and{' '}
            <strong>Terms of User Sign up</strong>.
          </p>
        </div>
        <Button disabled={isSubmitting}>Sign In</Button>
        <p className="modal-components__footer">
          Already have and account?{' '}
          <button type="button" onClick={handleChangeModal}>
            <span className="modal-components__footer--bold"> Sign up to </span>
            <span className="modal-components__footer--yellow">Coin</span>
            <span className="modal-components__footer--gray">Synch</span>
          </button>
        </p>
      </form>
    </Modal>
  )
}
