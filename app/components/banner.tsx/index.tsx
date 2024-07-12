import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className='py-3 text-center bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(247,153,191,.7),rgb(252,214,255,.7))]'>
            <div className='container '>
                <p className=''><span className='hidden sm:inline'>Introducing a completely redesigned interface -</span> <a href="#" className='underline underline-offset-4 font-medium'>Explore the demo</a></p> 
            </div>
        </div>
    )
}

export default Banner