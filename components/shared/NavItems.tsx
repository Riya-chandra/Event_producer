'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-green-900'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
           <Button className='bg-green-800 hover:bg-gray-800 '><Link href={link.route}>{link.label}</Link></Button>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems