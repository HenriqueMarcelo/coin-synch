import { AddCryptoModal } from '@/components/AddCryptoModal'
import { SignInModal } from '@/components/SignInModal'
import { SignUpModal } from '@/components/SignUpModal'
import Toaster from '@/components/Toaster'
import { TransferCryptoModal } from '@/components/TransferCryptoModal'
import { CryptoUser } from '@/hooks/use-user-wallet'
import { Provider as ToastProvider } from '@radix-ui/react-toast'
import { createContext, ReactNode, useState } from 'react'

interface ModalContextType {
  isSignInOpen: boolean
  openSignInModal: () => void
  closeSignInModal: () => void

  isSignUpOpen: boolean
  openSignUpModal: () => void
  closeSignUpModal: () => void

  isAddCryptoOpen: boolean
  openAddCryptoModal: () => void
  closeAddCryptoModal: () => void

  isTransferCryptoOpen: boolean
  openTransferCryptoModal: (cryptoUser: CryptoUser) => void
  closeTransferCryptoModal: () => void

  setUserId: (userId: string) => void

  openToaster: (text: string) => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalProvider({ children }: ModalProviderProps) {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isAddCryptoOpen, setIsAddCryptoOpen] = useState(false)
  const [isTransferCryptoOpen, setIsTransferCryptoOpen] = useState(false)
  const [transferCrypto, setTransferCrypto] = useState<CryptoUser | undefined>()
  const [isToastOpen, setIsToastOpen] = useState(false)
  const [toastContent, setToastContent] = useState('')

  const [userId, setUserId] = useState('')

  function openSignInModal() {
    setIsSignInOpen(true)
  }

  function closeSignInModal() {
    setIsSignInOpen(false)
  }

  function openSignUpModal() {
    setIsSignUpOpen(true)
  }

  function closeSignUpModal() {
    setIsSignUpOpen(false)
  }

  function openAddCryptoModal() {
    setIsAddCryptoOpen(true)
  }

  function closeAddCryptoModal() {
    setIsAddCryptoOpen(false)
  }

  function openTransferCryptoModal(cryptoUser: CryptoUser) {
    setIsTransferCryptoOpen(true)
    setTransferCrypto(cryptoUser)
  }

  function closeTransferCryptoModal() {
    setIsTransferCryptoOpen(false)
    setTransferCrypto(undefined)
  }

  function openToaster(text: string) {
    setToastContent(text)
    setIsToastOpen(true)
  }

  return (
    <ModalContext.Provider
      value={{
        isSignInOpen,
        openSignInModal,
        closeSignInModal,
        isSignUpOpen,
        openSignUpModal,
        closeSignUpModal,
        isAddCryptoOpen,
        openAddCryptoModal,
        closeAddCryptoModal,
        isTransferCryptoOpen,
        openTransferCryptoModal,
        closeTransferCryptoModal,
        setUserId,
        openToaster,
      }}
    >
      <ToastProvider swipeDirection="right">
        <SignInModal open={isSignInOpen} onOpenChange={setIsSignInOpen} />
        <SignUpModal open={isSignUpOpen} onOpenChange={setIsSignUpOpen} />
        <AddCryptoModal
          open={isAddCryptoOpen}
          onOpenChange={setIsAddCryptoOpen}
          userId={userId}
        />
        <TransferCryptoModal
          open={isTransferCryptoOpen}
          onOpenChange={setIsTransferCryptoOpen}
          cryptoUser={transferCrypto}
          userId={userId}
        />
        <Toaster open={isToastOpen} onOpenChange={setIsToastOpen}>
          {toastContent}
        </Toaster>
        {children}
      </ToastProvider>
    </ModalContext.Provider>
  )
}
