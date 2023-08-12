import { MenuContext } from '@/contexts/MenuContext'
import { useContext } from 'react'

export function useMenu() {
  return useContext(MenuContext)
}
