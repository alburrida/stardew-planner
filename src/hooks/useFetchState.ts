import { useCallback, useEffect, useState } from 'react'

interface UseFetchStateResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useFetchState<T>(
  fetcher: () => Promise<T>,
): UseFetchStateResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const result = await fetcher()
      setData(result)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Ha ocurrido un error inesperado')
      }
    } finally {
      setLoading(false)
    }
  }, [fetcher])

  useEffect(() => {
    void refetch()
  }, [refetch])

  return { data, loading, error, refetch }
}