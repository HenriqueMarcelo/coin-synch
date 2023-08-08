'use client'

import React, { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import './styles.scss'

type Props = Dialog.DialogProps & {
  children: ReactNode
  trigger?: ReactNode
}

export function Modal({ children, trigger, ...rest }: Props) {
  return (
    <Dialog.Root {...rest}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className="modal__overlay" />
        <Dialog.Content className="modal__content">
          {/*
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description> */}
          {children}
          <Dialog.Close asChild>
            <button className="modal__close" aria-label="Close">
              x
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
