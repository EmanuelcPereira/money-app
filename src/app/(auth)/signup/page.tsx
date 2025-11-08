import { SignUpForm } from '@/components/auth/signupForm';
import { Logo } from '@/components/ui/logo';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='mx-w-lg mt-12 px-auto flex flex-col justify-center items-center'>
      <Logo size={80} />
      <h1 className='mt-10 text-4xl text-center'>Criar Conta</h1>
      <div className='mt-10 mb-10 flex flex-col gap-6'>
        <SignUpForm />
      </div>
      <h2 className='mt-10 mb-14 text-center'>Ao clicar em continuar, você concorda com os Termos de uso e Termos de privacidade</h2>
      <div className=''>
        <Link href='/signin' className='hover:underline'>Já tem uma conta, entrar no Money App</Link>
      </div>
    </div>
  )
}