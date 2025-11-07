'use client'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type Props = {
  placeholder: string;
  password?: boolean;
  value?: string;
  onChange?: (newValue: string) => void;
  filled?: boolean;
  icon?: IconDefinition
}

export const Input = ({ placeholder, password, value, onChange, filled, icon }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={`has-focus:border-black flex items-center h-14 rounded-3xl border-2 border-gray-500 ${filled && 'bg-gray-700'}`}>
      {icon &&
        <FontAwesomeIcon
          icon={icon}
          className='size-6 text-gray-500'
        />

      }
      <input
        type={password && !showPassword ? 'password' : 'text'}
        className='flex-1 outline-none bg-transparent px-4 h-full'
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
      />
      { password &&
        <FontAwesomeIcon
        onClick={()=> setShowPassword(!showPassword)}
          icon={showPassword ? faEye : faEyeSlash}
          className='cursor-pointer mr-4 size-6 text-gray-500'
        />
      }
    </div>
  )
}