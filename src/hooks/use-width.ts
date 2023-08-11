import { useEffect, useState } from 'react'

type Sizes = 'xl' | 'md' | 'sm'

export function useWidth() {
  const [size, setSize] = useState<Sizes>('xl')

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth <= 704) {
      setSize('sm')
    } else if (window.innerWidth <= 1248) {
      setSize('md')
    } else {
      setSize('xl')
    }
    console.log(window.innerWidth)
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  return { size }
}
