import * as Toast from '@radix-ui/react-toast'
import './styles.scss'
import { ReactNode } from 'react'

type Props = Toast.ToastProps & {
  children: ReactNode
}

const Toaster = ({ children, ...rest }: Props) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" {...rest}>
        <Toast.Description>{children}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  )
}

export default Toaster
