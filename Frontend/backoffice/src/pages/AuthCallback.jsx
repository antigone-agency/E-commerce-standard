import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function AuthCallback() {
  const navigate = useNavigate()
  const [params] = useSearchParams()

  useEffect(() => {
    const accessToken = params.get('accessToken')
    const refreshToken = params.get('refreshToken')
    const user = params.get('user')

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      if (user) localStorage.setItem('user', user)
      navigate('/dashboard', { replace: true })
    } else {
      window.location.href = 'http://localhost:3001/login?redirect=backoffice'
    }
  }, [params, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Authentification en cours...</p>
    </div>
  )
}
