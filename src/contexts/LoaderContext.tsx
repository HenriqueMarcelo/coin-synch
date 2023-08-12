import { createContext, ReactNode, useState } from 'react'

interface ItemContextType {
  shown: boolean
  showLoader: () => void
  hideLoader: () => void
}

interface LoaderContextProviderProps {
  children: ReactNode
}

export const LoaderContext = createContext({} as ItemContextType)

export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps) {
  // Contador para que um componente não esconda o loader enquanto outro componente não quer;
  const [auxCount, setAuxCount] = useState(0)
  const shown = !!auxCount

  function showLoader() {
    setAuxCount((state) => state + 1)
  }

  function hideLoader() {
    setAuxCount((state) => state - 1)
  }

  return (
    <LoaderContext.Provider
      value={{
        shown,
        showLoader,
        hideLoader,
      }}
    >
      {children}
    </LoaderContext.Provider>
  )
}
