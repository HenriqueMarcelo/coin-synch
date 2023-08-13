import * as Toast from '@radix-ui/react-toast'
import './styles.scss'
import { ReactNode } from 'react'

type Props = Toast.ToastProps & {
  children: ReactNode
}

const Toaster = ({ children, ...rest }: Props) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="toast__root" {...rest}>
        <Toast.Description>{children}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="toast__viewport" />
    </Toast.Provider>
  )
}

export default Toaster
