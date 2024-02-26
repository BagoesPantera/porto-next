'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import jsIcon from '@/../../public/js.svg'
import pythonIcon from '@/../../public/python.svg'

export default function BarItem() {
  const pathName = usePathname()
  let icon = ''
  let text = ''

  switch (pathName) {
    case '/':
      icon = jsIcon
      text = 'index.js'
      break;
    case '/contact':
      icon = pythonIcon
      text = 'contact.py'
  
    default:
      break;
  }

  return (
    <a href={pathName} className="flex items-center font-light text-slate-400 w-fit dark:text-white hover:text-slate-600 group">
      <span>
        <Image src={icon} className='w-4 h-4' alt='icon'></Image>
      </span>
      <span className="ms-2 ">{text}</span>
    </a>
  )
}