import { createContext, ReactNode, useState } from 'react'

interface ItemContextType {
  shown: boolean
  showLoader: () => void
  hideLoader: () => void
  toggle: () => void
}

interface LoaderContextProviderProps {
  children: ReactNode
}

export const LoaderContext = createContext({} as ItemContextType)

export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps) {
  const [shown, setShown] = useState(false)

  function showLoader() {
    setShown(true)
  }

  function hideLoader() {
    setShown(false)
  }

  function toggle() {
    setShown((val) => {
      return !val
    })
  }

  return (
    <LoaderContext.Provider
      value={{
        shown,
        showLoader,
        hideLoader,
        toggle,
      }}
    >
      {children}
    </LoaderContext.Provider>
  )
}
