"use client"
import Image from 'next/image'
import React, { ElementRef, useEffect, useRef } from 'react'
import appScreen from "@/assets/images/app-screen.png"
import { motion, useScroll, useTransform } from "framer-motion"


const ProductShowcase = () => {

  
  const imageRef = useRef<ElementRef<"img">>(null)
  const {scrollYProgress} = useScroll({
    target: imageRef,
    offset: [
      'start end',
      'end end'
    ]
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Intuitive interface</h2>
        <p className='text-white/70 mt-5 text-xl text-center sm:max-w-xl mx-auto'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
        <motion.div
          style={{opacity, rotateX, transformPerspective: "800px"}}
        >
          <Image ref={imageRef} src={appScreen} alt='product-image' className='mt-14 mx-auto' />
        </motion.div>
      </div>
    </div>
  )
}

export default ProductShowcase