import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Category() {
    const categories = ['Mart', 'Beauty', 'Home & Decor', 'Proudly Nepali', 'Fashion', 'New on Daraz', 'Free Delivery', 'Everyday Low Price', 'Electronic Bazaar']
    return (
        <div className='grid grid-cols-9 mx-[76px] my-[24px] py-[20px] bg-white rounded-md'>
            {categories.map((c, i) => (
                <div key={i} className="last:after:hidden relative after:absolute after:content-[''] after:top-[50%] after:-translate-y-[50%] after:right-[-1px] after:w-[2px] after:h-14 after:bg-[rgba(0,0,0,0.1)]">
                    <Link href="#">
                        <div className="w-[132px] flex flex-col items-center group text-center">
                            <Image src={`/gc${i + 1}.png`} alt='Category' width={80} height={80} className='w-[80px]' />
                            <span className='mt-2 text-[14px] text-[rgba(0,0,0,0.87)] group-hover:text-[#f85606]'>{c}</span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
