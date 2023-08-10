import { AddCryptoModal } from '@/components/AddCryptoModal'
import { SignInModal } from '@/components/SignInModal'
import { SignUpModal } from '@/components/SignUpModal'
import { TransferCryptoModal } from '@/components/TransferCryptoModal'
import { CryptoUser } from '@/components/WalletCard'
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
      }}
    >
      <SignInModal open={isSignInOpen} onOpenChange={setIsSignInOpen} />
      <SignUpModal open={isSignUpOpen} onOpenChange={setIsSignUpOpen} />
      <AddCryptoModal
        open={isAddCryptoOpen}
        onOpenChange={setIsAddCryptoOpen}
      />
      <TransferCryptoModal
        open={isTransferCryptoOpen}
        onOpenChange={setIsTransferCryptoOpen}
        cryptoUser={transferCrypto}
      />
      {children}
    </ModalContext.Provider>
  )
}
