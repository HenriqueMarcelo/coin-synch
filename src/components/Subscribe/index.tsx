'use client'

import { useForm } from 'react-hook-form'
import './styles.scss'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { apiJson } from '@/lib/axios'
import { useLoader } from '@/hooks/use-loader'
import { useModal } from '@/hooks/use-modal'

export function Subscribe() {
  const { openToaster } = useModal()
  const { showLoader, hideLoader } = useLoader()
  const subscribeSchema = z.object({
    email: z.string().email(),
  })

  type Subscribe = z.infer<typeof subscribeSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Subscribe>({
    resolver: zodResolver(subscribeSchema),
  })

  async function onSubmit({ email }: Subscribe) {
    showLoader()
    try {
      await apiJson.post('newsletter', {
        email,
      })
      openToaster('Email successfully registered.')
    } catch {
      openToaster('Some error has happened.')
    } finally {
      hideLoader()
      reset()
    }
  }

  return (
    <section className="subscribe__full">
      <div className="subscribe__container container">
        <div>
          <h3 className="subscribe__small">Lorem ipsum</h3>
          <h2 className="subscribe__title">Lorem ipsum</h2>
          <p className="subscribe__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>
        <form className="subscribe__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="" className="subscribe__label">
            Email
            <input
              placeholder="Email"
              className={`subscribe__input ${
                errors.email && 'subscribe__input--error'
              }`}
              type="email"
              disabled={isSubmitting}
              {...register('email')}
            />
          </label>
          <button disabled={isSubmitting} className="subscribe__button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
