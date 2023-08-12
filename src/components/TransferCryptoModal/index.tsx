import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import '../Modal/styles.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { DialogProps } from '@radix-ui/react-dialog'
import { apiJson } from '@/lib/axios'
import { Select } from '../Select'
import { WalletInfo } from '@/@types/wallet-info'
import Image from 'next/image'
import Image404Png from '@/assets/404.png'
import { CryptoUser } from '@/hooks/use-user-wallet'
import { useLoader } from '@/hooks/use-loader'
import { useModal } from '@/hooks/use-modal'

type Props = DialogProps & {
  cryptoUser?: CryptoUser
  userId: string
}

const MIN_VALUE = 0.000001

export function TransferCryptoModal({
  children,
  cryptoUser,
  userId,
  ...rest
}: Props) {
  const { hideLoader, showLoader } = useLoader()
  const { closeTransferCryptoModal } = useModal()

  const signInSchema = z.object({
    transfer: z.enum(['in', 'out', '']),
    value: z.coerce.number().min(MIN_VALUE),
  })

  type SignIn = z.infer<typeof signInSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      value: 0.0,
      transfer: '',
    },
  })

  const transferValue = watch('transfer')

  async function onSubmit({ transfer, value }: SignIn) {
    showLoader()
    const { data } = await apiJson.get<WalletInfo[]>(
      `/wallets?user_id=${userId}&crypto=${cryptoUser?.cryptoCode}`,
    )
    const wallet = data[0]

    if (transfer === 'in') {
      await apiJson.put(`/wallets/${wallet.id}`, {
        ...wallet,
        value: wallet.value + value,
      })
    }

    if (transfer === 'out') {
      const newValue = wallet.value - value
      if (newValue > 0) {
        await apiJson.put(`/wallets/${wallet.id}`, {
          ...wallet,
          value: newValue,
        })
      } else {
        await apiJson.delete(`/wallets/${wallet.id}`)
      }
    }

    reset()
    closeTransferCryptoModal()
    hideLoader()

    // todo - recarregar página sem reload
    location.reload()
  }

  if (!cryptoUser) {
    return null
  }

  return (
    <Modal trigger={children} {...rest}>
      <form
        className="modal-components__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="modal-components__title modal-components__title--bold">
          Transfer Crypto
        </h1>
        <p className="modal-components__subtitle">
          <span className="regular__label">You are transfering</span>
          <Image
            src={cryptoUser.cryptoImageUrl || Image404Png}
            alt={cryptoUser.cryptoCode}
            width={32}
            height={32}
            className="modal-components__image"
          />
          {cryptoUser.cryptoName}
          <span className="modal-components__acronym">
            &nbsp;
            {cryptoUser.cryptoCode}
          </span>
        </p>
        <label className="modal-components__label">
          Transfer
          <Select
            disabled={isSubmitting}
            error={!!errors.transfer}
            {...register('transfer')}
          >
            <option value="" disabled>
              Select transfer
            </option>
            <option value="in">Transfer in</option>
            <option value="out">Transfer out</option>
          </Select>
        </label>
        <label className="modal-components__label">
          Quantity
          <Input
            type="number"
            disabled={isSubmitting}
            error={!!errors.value}
            min={MIN_VALUE}
            max={transferValue === 'out' ? cryptoUser.amount : undefined}
            step={MIN_VALUE}
            {...register('value')}
          />
        </label>
        <span>{errors.value?.message}</span>
        <Button disabled={isSubmitting}>Transfer Crypto</Button>
      </form>
    </Modal>
  )
}
