import { ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import './styles.scss'

type Props = {
  children: ReactNode
  text: string
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export function MyTooltip({ children, text, side = 'top' }: Props) {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="tooltip__content"
            sideOffset={5}
            side={side}
          >
            {text}
            <Tooltip.Arrow className="tooltip__arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
