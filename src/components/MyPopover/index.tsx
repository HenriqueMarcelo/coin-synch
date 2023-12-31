import React, { ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
import './styles.scss'
import { SignOut } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

type Props = {
  children: ReactNode
}

export function MyPopover({ children }: Props) {
  const { push } = useRouter()

  function handleLogOut() {
    push('/')
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="popover__content" sideOffset={5}>
          <button className="logout__container" onClick={handleLogOut}>
            <SignOut size={16} />
            Logout
          </button>
          <Popover.Arrow className="popover__arrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
