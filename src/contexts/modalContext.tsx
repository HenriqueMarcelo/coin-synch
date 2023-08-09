import { SignInModal } from '@/components/SignInModal'
import { SignUpModal } from '@/components/SignUpModal'
import { createContext, ReactNode, useState } from 'react'

interface ModalContextType {
  isSignInOpen: boolean
  openSignInModal: () => void
  closeSignInModal: () => void

  isSignUpOpen: boolean
  openSignUpModal: () => void
  closeSignUpModal: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalProvider({ children }: ModalProviderProps) {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

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

  return (
    <ModalContext.Provider
      value={{
        isSignInOpen,
        openSignInModal,
        closeSignInModal,
        isSignUpOpen,
        openSignUpModal,
        closeSignUpModal,
      }}
    >
      <SignInModal open={isSignInOpen} onOpenChange={setIsSignInOpen} />
      <SignUpModal open={isSignUpOpen} onOpenChange={setIsSignUpOpen} />
      {children}
    </ModalContext.Provider>
  )
}
