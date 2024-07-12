"use client"
import React, { ElementRef, useEffect, useRef } from 'react'
import helixImage from "@/assets/images/helix2.png"
import emojiStarImage from "@/assets/images/emojistar.png"
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'

type Props = {}

const Cta = (props: Props) => {

  const ctaRef = useRef<ElementRef<"div">>(null)

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end end']
  })



  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <div ref={ctaRef} className='bg-black text-white py-[72px] sm:py-24 text-center '>
      <div className='container max-w-xl relative '>
        <motion.div
          style={{
            translateY
          }}
        >
          <Image className='absolute top-6 left-[calc(100%+36px)]' src={helixImage} alt='helix image' />
        </motion.div>
        <motion.div
          style={{
            translateY
          }}
        >
          <Image className='absolute -top-[120px] right-[calc(100%+24px)]' src={emojiStarImage} alt='emoji star image' />
        </motion.div>
        <h1 className='text-5xl tracking-tighter sm:text-6xl font-bold'>Get Instant Access</h1>
        <p className='text-xl text-white/70 mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <form className="mt-10 flex flex-col sm:flex-row items-center gap-2.5 max-w-sm mx-auto">
          <input type="email" placeholder='your@email.com' className='h-12 bg-white/20 placeholder:text-[#9CA3AF] rounded-lg px-5 font-medium sm:flex-1' />
          <button className='rounded-lg bg-white text-black h-12 px-5'>Get Access</button>
        </form>
      </div>
    </div>
  )
}

export default Cta