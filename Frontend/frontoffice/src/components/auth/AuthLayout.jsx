import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import AuthVisualPanel from './AuthVisualPanel'

export default function AuthLayout({ mode: initialMode = 'login' }) {
  const navigate = useNavigate()
  const [mode, setMode] = useState(initialMode)
  const [transitioning, setTransitioning] = useState(false)
  const [formKey, setFormKey] = useState(0)

  useEffect(() => {
    setMode(initialMode)
    setFormKey((k) => k + 1)
  }, [initialMode])

  const switchMode = useCallback(() => {
    if (transitioning) return
    setTransitioning(true)
    const next = mode === 'login' ? 'signup' : 'login'

    // Short delay for exit animation, then swap
    setTimeout(() => {
      setMode(next)
      setFormKey((k) => k + 1)
      navigate(next === 'login' ? '/login' : '/inscription', { replace: true })
      setTransitioning(false)
    }, 350)
  }, [mode, transitioning, navigate])

  return (
    <div className="min-h-screen flex bg-surface">
      {/* Form side */}
      <section className="w-full md:w-[45%] lg:w-[40%] flex items-center justify-center px-8 py-12 md:px-16 lg:px-20 relative">
        {/* Form container with enter/exit animation */}
        <div
          key={formKey}
          className={transitioning ? 'auth-page-exit' : 'auth-page-enter'}
        >
          {mode === 'login' ? (
            <LoginForm onSwitch={switchMode} />
          ) : (
            <SignupForm onSwitch={switchMode} />
          )}
        </div>
      </section>

      {/* Image side */}
      <AuthVisualPanel mode={mode} animKey={formKey} />
    </div>
  )
}
