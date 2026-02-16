import { useState, useEffect, useRef } from 'react'

function cToF(c) {
  return (c * 9) / 5 + 32
}
function fToC(f) {
  return ((f - 32) * 5) / 9
}

export function useTemperatureSync() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')
  const sourceRef = useRef(null)

  useEffect(() => {
    if (sourceRef.current === 'c') {
      if (celsius === '') setFahrenheit('')
      else {
        const c = parseFloat(celsius)
        if (!Number.isNaN(c)) setFahrenheit(cToF(c).toFixed(2))
      }
      sourceRef.current = null
    } else if (sourceRef.current === 'f') {
      if (fahrenheit === '') setCelsius('')
      else {
        const f = parseFloat(fahrenheit)
        if (!Number.isNaN(f)) setCelsius(fToC(f).toFixed(2))
      }
      sourceRef.current = null
    }
  }, [celsius, fahrenheit])

  const updateFromCelsius = (cStr) => {
    sourceRef.current = 'c'
    setCelsius(cStr)
  }
  const updateFromFahrenheit = (fStr) => {
    sourceRef.current = 'f'
    setFahrenheit(fStr)
  }

  return { celsius, fahrenheit, updateFromCelsius, updateFromFahrenheit }
}