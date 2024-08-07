import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {footerLinks} from '@/constants'

function Footer() {
  return (
    <footer className='flex-flex-col border-t 
    text-black-100 mt-5 border-gray-100
    '>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5
       sm:px-16 px-6 py-10
      '>
          <div className='flex flex-col justify-start items-start gap-6'>
              <Image src = "/logo.svg" alt='' 
              width={118}
              height={18}
              className='object-contain'
              />
              <p className='text-gray-500'>
               CarHub 2023  <br/>
               All Right Reserved &copy;
               </p>
          </div>
         
          <div className='footer__links'>
            {footerLinks.map((link)=>(
              <div key = {link.title} className='footer__link'>
                <h3 className='font-bold'>{link.title}</h3>
                    {link.links.map((item)=>
                      <Link 
                      key={item.title}
                      href={item.url}
                      className='text-gray-500'
                      >
                      {item.title}
                      </Link>
                    )}
              </div>
            ))}
          </div>
          {/* <div className='flex justify-between item-center mt-1 border-t
              sm:16px px-6 py-10
          '>
            <p>any</p>
            <div className='footer__copyrights-Link'>
              <Link href="/" className='pr-10'>
                   Privacy Policy
              </Link>
              <Link href="/">
                   terms of use
              </Link>
            </div>
          </div> */}
          </div>
    </footer>
  ) 
}

export default Footer