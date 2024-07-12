'use client'

import React, { useState } from 'react';
import { CarProps } from '@/types';
import Image from 'next/image';
import { calculateCarRent } from '@/utils';
import CustomButton from './customButton';
import CarDeatils from './CarDeatils'

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, transmission, make, model, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  const[isopen,setIsopen] = useState(false);
  
  return (
    <div className='car-card m-3 group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[36px]'>
        <span className='self-start text-[14px]'>$</span>
        {carRent}
        <span className='self-end text-[14px]'>/day</span>
      </p>
      
      <div>
        <Image src='/hero.png' alt='hero' width={300} height={300} className='object-contain' />
      </div>
      
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>

            <Image src='/steering-wheel.svg' alt='steering wheel' width={50} height={20} className='object-contain' />
           
            <p className='text-[14px] leading-[17px]'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>

          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' alt='tire' width={50} height={20} className='object-contain' />
            <p className='text-[14px] leading-[17px]'>{drive.toUpperCase()}</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' alt='gas' width={50} height={20} className='object-contain' />
            <p className='text-[14px] leading-[17px]'>{city_mpg} MPG</p>
          </div>

        </div>
        <div className='car-card__btn-container group-hover:flex hidden absolute bottom-0 w-full z-10'>
          <CustomButton title='View More' 
          styles='w-full py-[16px] rounded-full bg-primary-blue'
          textStyles='text-white text-[14px] leading-[17px] font-bold'
          rightIcon = "/right-arrow.svg"
          handleClick={()=>setIsopen(true)}
          />
        </div>
      </div>

      <CarDeatils isOpen = {isopen} closeModal = {()=>setIsopen(false)} car = {car}/>

    </div>
  );
}

export default CarCard;
