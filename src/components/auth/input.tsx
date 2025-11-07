'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const SignInForm = () => {
  const router = useRouter()
  const [emailField, setEmailField] = useState('')
  const [passwordField, setEmailPasswordField] = useState('')

  const handleEnterButton = () => {
    router.replace('/home')
  }

  return (
    <>
      <Input
        placeholder='Email*'
        value={emailField}
        onChange={t => setEmailField(t)}
      />

      <Input
        password={true}
        placeholder='Senha*'
        value={passwordField}
        onChange={t => setEmailPasswordField(t)}
      />

      <Button
        label='Entrar'
        color='blue'
        onClick={handleEnterButton}
        size={1}
      />
    </>
  )
}