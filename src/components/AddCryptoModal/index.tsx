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

type Props = DialogProps

export function AddCryptoModal({ children, ...rest }: Props) {
  const { closeAddCryptoModal } = useModal()
  const { cryptos } = useCryptos()
  const userId = '1' // todo

  const signInSchema = z.object({
    crypto: z.string().nonempty(),
    value: z.coerce.number().min(0.01),
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
    reset()
    closeAddCryptoModal()

    // todo ver alguma forma melhor de fazer reload
    location.reload()
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
          min={0.000001}
          step="0.000001"
          {...register('value')}
        />
        <span>{errors.value?.message}</span>
        <Button disabled={isSubmitting}>Add Crypto</Button>
      </form>
    </Modal>
  )
}
