"use client"
import React, { useState } from 'react'
import { PlusIcon, MinusIcon } from 'lucide-react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'


const items: { question: string, answer: string }[] = [
    {
        question: "What payment methods do you accept?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iste sequi repellat voluptate sit asperiores odit unde, nostrum neque perferendis?"
    },
    {
        question: "How does the pricing work for teams?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iste sequi repellat voluptate sit asperiores odit unde, nostrum neque perferendis?"
    },
    {
        question: "Can I change my plan later?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iste sequi repellat voluptate sit asperiores odit unde, nostrum neque perferendis?"
    },
    {
        question: "Is my data secure?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iste sequi repellat voluptate sit asperiores odit unde, nostrum neque perferendis?"
    },
]



const Faq = () => {
    return (
        <div className='bg-black  text-white bg-gradient-to-b from-[#5D2CAB] to-black py-[72px] sm:py-24'>
            <div className='container'>
                <h1 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>Frequently asked questions</h1>
                <div className='max-w-[648px] mx-auto'>
                    {
                        items.map(({ question, answer }) => (
                            <AccordianItem key={question} question={question} answer={answer} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const AccordianItem = ({ question, answer }: { question: string, answer: string }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className='mt-12 py-7 border-b cursor-pointer border-white/30' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center   text-lg font-bold'>
                <span className='flex-1'>{question}</span>
                {!isOpen ? <PlusIcon /> : <MinusIcon />}
            </div>
            <AnimatePresence>
                {
                    isOpen && <motion.div
                        initial={{ opacity: 0, height: 0, marginTop:0 }}
                        animate={{ opacity: 1, height: "auto", marginTop:"16px" }}
                        exit={{ opacity: 0, height: 0, marginTop:0 }}
                        className={clsx(!isOpen ? "hidden" : "")}>{answer}</motion.div>

                }
            </AnimatePresence>
        </div>
    )
}

export default Faq