'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function NavItem({ children, icon, ...props }) {
  const pathName = usePathname()
  const childClassName = 'flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
  const className =
    pathName === props.href
      ? `${childClassName} bg-gray-100`.trim()
      : childClassName

  return (
    <a href={props.href} className={className}>
      <span className="pl-5">
        <Image className='w-5 h-5' src={icon} alt='icon'></Image>
      </span>
      <span className="ms-3">{children}</span>
    </a>
  )
}