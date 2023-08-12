import { createContext, ReactNode, useState } from 'react'

interface ItemContextType {
  shown: boolean
  showLoader: () => void
  hideLoader: () => void
  // toggle: () => void
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
    // setShown(true)
    setAuxCount((state) => state + 1)
  }

  function hideLoader() {
    // setShown(false)
    setAuxCount((state) => state - 1)
  }

  // function toggle() {
  //   setShown((val) => {
  //     return !val
  //   })
  // }

  return (
    <LoaderContext.Provider
      value={{
        shown,
        showLoader,
        hideLoader,
        // toggle,
      }}
    >
      {children}
    </LoaderContext.Provider>
  )
}
