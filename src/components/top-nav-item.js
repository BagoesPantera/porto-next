'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function TopNavItem({ icon, children, ...props }) {
    const pathName = usePathname()
    const childClassName = 'border-x-2 flex items-center h-7'
    const className =
        pathName === props.href
            ? `${childClassName} bg-gray-50 border-t-4 border-t-sky-500 `.trim()
            : childClassName

    return (
        <>
                <div className={className}>

                <Image src={icon} className='w-5 h-5 ms-1' alt='icon'></Image>
                <a href={props.href} className="inline-block p-4 font-bold">
                    {children}
                </a>
                </div>
        </>

    )
}