import { CryptoUser } from '@/hooks/use-user-wallet'
import { createContext, ReactNode, useState } from 'react'

interface ItemContextType {
  userTable?: CryptoUser[]
  setUserTable: (userTable?: CryptoUser[]) => void
}

interface WalletContextProviderProps {
  children: ReactNode
}

export const WalletContext = createContext({} as ItemContextType)

export function WalletContextProvider({
  children,
}: WalletContextProviderProps) {
  const [userTable, setUserTable] = useState<CryptoUser[] | undefined>()

  return (
    <WalletContext.Provider
      value={{
        userTable,
        setUserTable,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
