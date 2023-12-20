import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Mall {
    img: string,
    logo: string,
    name: string,
    description: string,
}

export default function DarazMall() {
    const malls: Mall[] = [
        {
            img: 'mall0.jpg',
            logo: 'mall-logo0.jpeg',
            name: 'SHANGRI-LA',
            description: 'SHANGRI-LA'
        },
        {
            img: 'mall1.jpg',
            logo: 'mall-logo1.jpeg',
            name: 'Viopatch',
            description: 'Muscle pain relief patch'
        },
        {
            img: 'mall2.jpg',
            logo: 'mall-logo2.jpeg',
            name: 'bbluv',
            description: 'Every Moment Counts'
        },
        {
            img: 'mall0.jpg',
            logo: 'mall-logo0.jpeg',
            name: 'SHANGRI-LA',
            description: 'SHANGRI-LA'
        },
        {
            img: 'mall1.jpg',
            logo: 'mall-logo1.jpeg',
            name: 'Viopatch',
            description: 'Muscle pain relief patch'
        },
        {
            img: 'mall2.jpg',
            logo: 'mall-logo2.jpeg',
            name: 'bbluv',
            description: 'Every Moment Counts'
        },
    ]
    return (
        <div className="px-[76px] my-10">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-[#424242] text-[22px] mb-1">Flash Sale</h1>
                <Link href="#" className='text-[#f85606] text-[14px]'>{"SHOP MORE >"}</Link>
            </div>
            <div className='flex flex-row flex-wrap mt-[2px] justify-between rounded-sm'>
                {malls.map((m, i) => (
                    <div key={i} className='w-[188px] h-[280px] bg-white pb-2 hover:shadow-[2px_2px_2px_rgba(0,0,0,0.1),-2px_2px_2px_rgba(0,0,0,0.1)] cursor-pointer mr-2 last:mr-0'>
                        <div className='h-[188px] overflow-clip'>
                            <Image src={`/${m.img}`} alt='Mall' width={188} height={188} className='w-[100%]' />
                        </div>
                        <Image src={`/${m.logo}`} alt='Mall Logo' width={44} height={44} className='w-[52px] m-auto p-1 bg-white -translate-y-[50%]' />
                        <p className='text-[#212121] text-[14px] my-1 leading-[18px] text-center -translate-y-5'>{m.name}</p>
                        <p className='text-[#9e9e9e] text-[12px] my-1 leading-[14px] text-center -translate-y-5'>{m.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
