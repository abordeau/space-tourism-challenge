import { useCallback, useEffect, useState } from 'react'

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((event: MediaQueryListEvent) => {
    if (event.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', (event) => updateTarget(event))

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', (e) => updateTarget(e))
  }, [])

  return targetReached
}

export default useMediaQuery
