'use client'

const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    gray: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    // Adicione mais cores conforme necessário
  };


type ButtonColor = keyof typeof colorClasses;
type Props = {
  label: string;
  color: ButtonColor;
  size?: 1 | 2 | 3;
  onClick?: () => void;
}
export const Button = ({ label, size, onClick, color='blue'}: Props) => {
  const baseClass = `flex justify-center items-center cursor-pointer font-bold rounded-3xl
         ${size === 1 && 'h-14 text-lg'}
         ${size === 2 && 'h-10 text-md'}
         ${size === 3 && 'h-7 text-xs'}
         `

  const dinamicClass = colorClasses[color] ||colorClasses.blue
  return (
    <div
      onClick={onClick}
      className={`${baseClass} ${dinamicClass}`}
    >
      {label}
    </div>
  )
}