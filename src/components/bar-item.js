'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import jsIcon from '@/../../public/js.svg'
import pythonIcon from '@/../../public/python.svg'
import goIcon from '@/../../public/go.svg'
import rubbyIcon from '@/../../public/ruby.svg'
import kotlinIcon from '@/../../public/kotlin.svg'
import javaIcon from '@/../../public/java.svg'

export default function BarItem() {
  const pathName = usePathname()
  let icon = ''
  let text = ''

  switch (pathName) {
    case '/':
      icon = jsIcon
      text = 'index.js'
      break;
    case '/project':
      icon = goIcon
      text = 'project.go'
      break;
    case '/contact':
      icon = pythonIcon
      text = 'contact.py'
      break;
    case '/about':
      icon = rubbyIcon
      text = 'index.rb'
      break;
    case '/about/skill':
      icon = kotlinIcon
      text = 'skill.kt'
      break;
    case '/about/hobbies':
      icon = javaIcon
      text = 'hobbies.java'

    default:
      break;
  }

  return (
    <a href={pathName} className="flex items-center font-light text-slate-400 w-fit hover:text-slate-600 group">
      <span>
        <Image src={icon} className='w-4 h-4' alt='icon'></Image>
      </span>
      <span className="ms-2 ">{text}</span>
    </a>
  )
}