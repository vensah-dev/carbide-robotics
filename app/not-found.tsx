'use client';

import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image404 from '@/public/images/404-meme.png';
import Image from 'next/image';

export default function NotFound() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex flex-col w-screen h-screen items-center justify-center gap-8 text-center'>

            <div className="relative w-6xl aspect-video overflow-hidden rounded-lg shadow-md"> 
                <Image 
                    src={Image404} 
                    alt={"404 Error"}  
                    quality={100}
                    fill
                    className=' w-full object-cover' 

                />             
            </div>

            {/* <h2 className="text-6xl font-bold text-font-primary">404</h2> */}

            <Link href="/" className='text-accent-primary'>Return Home</Link>
        </div>
    )
}
