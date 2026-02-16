import { useState, useEffect } from 'react'

export function useUserSearch(users, searchKey = 'name') {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(users)

  useEffect(() => {
    const q = query.trim().toLowerCase()
    if (!q) {
      setFiltered(users)
      return
    }
    setFiltered(
      users.filter((u) =>
        String(u[searchKey] ?? '').toLowerCase().includes(q)
      )
    )
  }, [users, query, searchKey])

  return { query, setQuery, filtered }
}