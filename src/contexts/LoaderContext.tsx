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

/*
 * todo - verificar se existe alguma forma melhor de implementar isto:
 */
export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps) {
  /*
   * O contador foi utilizado para que um componente não esconda
   * o loader enquanto outro componente ainda quer o load ativo;
   *
   * Sempre que alguém quer ativar o loading é adicionado 1 ao estado
   * e sempre que alguém quiser terminar é removido 1 do estado.
   *
   * A animação é interrompida quando o valor ficar >= 0
   */
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
