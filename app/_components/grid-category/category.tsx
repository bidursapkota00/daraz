import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Category() {
    const categories = ['Mart', 'Beauty', 'Home & Decor', 'Proudly Nepali', 'Fashion', 'New on Daraz', 'Free Delivery', 'Everyday Low Price', 'Electronic Bazaar']
    return (
        <div className='grid grid-cols-9 mx-[76px] my-[24px] bg-white rounded-md'>
            {categories.map((c, i) => (
                <Link href="#">
                    <div className='w-[132px] flex flex-col items-center group text-center'>
                        <Image src={`/gc${i + 1}.png`} alt='Category' width={80} height={80} className='w-[80px]' />
                        <span className='mt-2 text-[14px] text-[rgba(0,0,0,0.87)] group-hover:text-[#f85606]'>{c}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
