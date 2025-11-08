import { SignInForm } from '@/components/auth/signinForm';
import { Logo } from '@/components/ui/logo';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='mx-w-lg mt-12 px-auto flex flex-col justify-center items-center'>
      <Logo size={80} />
      <h1 className='mt-10 text-4xl text-center'>Login</h1>
      <div className='mt-10 mb-14 flex flex-col gap-6'>
        <SignInForm />
      </div>
      <div className=''>
        <Link href='/signup' className='hover:underline'>Ainda não tenho cadastro</Link>
      </div>
    </div>
  )
}