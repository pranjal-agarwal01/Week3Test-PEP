import { useState, useEffect } from 'react'

const LIMIT = 50

export function useCharacterCounter() {
  const [text, setText] = useState('')
  const [total, setTotal] = useState(0)
  const [remaining, setRemaining] = useState(LIMIT)

  useEffect(() => {
    const len = text.length
    setTotal(len)
    setRemaining(Math.max(0, LIMIT - len))
  }, [text])

  const handleChange = (e) => {
    const val = e.target.value
    if (val.length <= LIMIT) setText(val)
  }

  return { text, total, remaining, limit: LIMIT, handleChange }
}