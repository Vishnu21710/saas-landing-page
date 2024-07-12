import React from 'react'
import { Instagram, TwitterIcon, FacebookIcon } from 'lucide-react'
import XSocial from "@/assets/icons/x-social.svg"
import InstagramIcon from "@/assets/icons/insta.svg"
import TikTokIcon from "@/assets/icons/tiktok.svg"
import YoutubeIcon from "@/assets/icons/youtube.svg"

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='py-5 bg-black text-white/60 border-t-2 border-white/20'>
            <div className='container'>
                <div className='flex flex-col sm:flex-row sm:justify-between gap-4'>
                    <div className='text-center'>
                        © 2024 Your Company, Inc. All rights reserved
                    </div>
                    <ul className='flex justify-center gap-2.5 botdert'>
                            <li><InstagramIcon/></li>
                            <li><XSocial/></li>
                            <li><TikTokIcon/></li>
                            <li><YoutubeIcon/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer