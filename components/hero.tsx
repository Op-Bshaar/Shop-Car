"use client"

import Image from "next/image"
import CustomButton from "./customButton"

function Hero() {
    const handleScroll = ()=>{

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                أجر سيارتك
            </h1>
            <p className="hero__subtitle">
                  تجربه السيارات الخاصه بك
            </p>
            <CustomButton
            title = "explors car"
            styles = "bg-primary-blue text-white rounded-full mt-10 h-10 w-18" 
            handleClick = {handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                 <Image src="/hero.png" alt = "bashar" fill className='object-contain' />
                 <div className="hero__image-overlay"></div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero