'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const SignUpForm = () => {
  const router = useRouter()
  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setEmailPasswordField] = useState('')

  const handleEnterButton = () => {
    router.replace('/signin')
  }

  return (
    <>
      <Input
        placeholder='Nome completo*'
        value={nameField}
        onChange={t => setNameField(t)}
      />

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

      <Input
        password={true}
        placeholder='Repita sua senha*'
        value={passwordField}
        onChange={t => setEmailPasswordField(t)}
      />

      <Button
        label='Criar conta'
        color='blue'
        onClick={handleEnterButton}
        size={1}
      />
    </>
  )
}