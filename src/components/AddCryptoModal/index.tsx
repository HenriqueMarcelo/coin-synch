import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import '../Modal/styles.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { DialogProps } from '@radix-ui/react-dialog'
import { useModal } from '@/hooks/use-modal'
import { apiJson } from '@/lib/axios'
import { Select } from '../Select'
import { useCryptos } from '@/hooks/use-cryptos'
import { WalletInfo } from '@/@types/wallet-info'
import { useLoader } from '@/hooks/use-loader'
import { useUserWallet } from '@/hooks/use-user-wallet'

type Props = DialogProps & {
  userId: string
}

const MIN_VALUE = 0.000001

export function AddCryptoModal({ children, userId, ...rest }: Props) {
  const { hideLoader, showLoader } = useLoader()
  const { closeAddCryptoModal } = useModal()
  const { cryptos } = useCryptos()
  const { loadData } = useUserWallet(userId)

  const signInSchema = z.object({
    crypto: z.string().nonempty(),
    value: z.coerce.number().min(MIN_VALUE),
  })

  type SignIn = z.infer<typeof signInSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      value: 0.0,
      crypto: '',
    },
  })

  async function onSubmit({ crypto, value }: SignIn) {
    showLoader()
    const { data } = await apiJson.get<WalletInfo[]>(
      `/wallets?user_id=${userId}&crypto=${crypto}`,
    )
    if (data.length) {
      const wallet = data[0]
      await apiJson.put(`/wallets/${wallet.id}`, {
        ...wallet,
        value: wallet.value + value,
      })
    } else {
      await apiJson.post('/wallets', {
        user_id: userId,
        crypto,
        value,
      })
    }

    await loadData()
    reset()
    closeAddCryptoModal()
    hideLoader()

    // todo - usar toaster
  }

  return (
    <Modal trigger={children} {...rest}>
      <form
        className="modal-components__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="modal-components__title modal-components__title--bold">
          Add crypto
        </h1>
        <Select
          disabled={isSubmitting}
          error={!!errors.crypto}
          {...register('crypto')}
        >
          <option value="" disabled>
            Choose
          </option>
          {cryptos.map((crypto) => (
            <option key={crypto.code} value={crypto.code}>
              {crypto.name} - {crypto.code}
            </option>
          ))}
        </Select>
        <Input
          type="number"
          disabled={isSubmitting}
          error={!!errors.value}
          min={MIN_VALUE}
          step={MIN_VALUE}
          {...register('value')}
        />
        <span>{errors.value?.message}</span>
        <Button disabled={isSubmitting}>Add Crypto</Button>
      </form>
    </Modal>
  )
}
