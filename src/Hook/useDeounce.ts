import { useEffect, useState } from 'react'

export function useDebounce <T> (value: T, delay = 500) {
  const [debounceValue, setDebounceVlue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVlue(value)
    }, delay)
    return () => { clearTimeout(timer) }
  }, [value, delay])

  return debounceValue
}
