"use client"

import React from 'react'
import Image from 'next/image'
import { customButtonProps } from '@/types'

function CustomButton({title,styles,handleClick,btnType,textStyles,rightIcon}:customButtonProps ){
  return (
    <button
    disabled = {false}
    type={btnType||"button"}
    className={`button-btn ${styles}`}
    onClick={handleClick}
    > 
      <span className={`flex-1 ${textStyles}`}>
          {title}
      </span>
      {rightIcon &&(
          <div className='relative w-6 h-6 ' style={{marginLeft:'1190px'}}>
              <Image src = {rightIcon} alt = "f" fill className='object-contain'/>
          </div>
      )}    
    </button>
  )
}

export default CustomButton