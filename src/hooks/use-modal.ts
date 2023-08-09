import { ModalContext } from '@/contexts/modalContext'
import { useContext } from 'react'

export function useModal() {
  return useContext(ModalContext)
}
