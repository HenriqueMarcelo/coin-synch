import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
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
import { UserInfo } from '@/@types/user-info'
import { useLoader } from '@/hooks/use-loader'

type Props = DialogProps

export function SignInModal({ children, ...rest }: Props) {
  const { closeSignInModal, openSignUpModal, openToaster } = useModal()
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()

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
    showLoader()
    const { data } = await apiJson.get<UserInfo[]>(
      `/users?email=${email}&password=${password}`,
    )

    if (data.length) {
      const user = data[0]
      router.push(`/dashboard/${user.id}`)
    } else {
      // todo toaster informando erro
      openToaster('User not found.')
      reset()
      hideLoader()
    }
  }

  function handleChangeModal() {
    reset()
    closeSignInModal()
    openSignUpModal()
  }

  return (
    <Modal trigger={children} {...rest}>
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
          Don&apos;t have an account?{' '}
          <button type="button" onClick={handleChangeModal}>
            <span className="modal-components__footer modal-components__footer--bold">
              {' '}
              Sign up to{' '}
            </span>
            <span className="modal-components__footer modal-components__footer--yellow">
              Coin
            </span>
            <span className="modal-components__footer modal-components__footer--gray">
              Synch
            </span>
          </button>
        </p>
      </form>
    </Modal>
  )
}
