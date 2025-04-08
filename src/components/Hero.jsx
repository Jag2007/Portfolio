import React from 'react'
import { HERO_CONTENT } from './constants'
import profilePic from "../assets/profile.jpeg";
const Hero = () => {
  return (
    <>
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-20">
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-10xl font-thin tracking-tight lg-mt-16 lg-text-8xl ml-15 mt-20'>Jagruthi Pulumati</h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ml-15'>Web Developer | Aspiring Coder | CS & AI Student
                    </span>
                    <p className='my-2 max-w-10xl py-6 font-light
                    tracking-tighter ml-15 text-xl'>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-15 rounded-2xl'>
                <div className='flex justify-center'>
                    <img className='rounded-2xl' src={profilePic} alt='Jagruthi Pulumati'></img>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero