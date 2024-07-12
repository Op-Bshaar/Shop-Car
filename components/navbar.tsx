import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './customButton'

function Navbar() {
  return (
    <header className='w-full absolute z-10'>
       <nav className='max - w[1440px] justify-between flex mx-auto
       item-center
       sm:px-16 px-6 py-6
       '>
        <Link href="" className='flex justify-center items-center'>
            <Image src = "/logo.svg" alt=''
            className='object-contain' 
            width={118}
            height={18}
            />
        </Link>
        <CustomButton
        title="sign in"
        btnType="button"
        styles= "text-primary-blue bg-white rounded-full min-w-[130px]"
        />
       </nav>
    </header>
  )
}

export default Navbar