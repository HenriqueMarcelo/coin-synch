import { LoaderContext } from '@/contexts/LoaderContext'
import { useContext } from 'react'

export function useLoader() {
  return useContext(LoaderContext)
}
