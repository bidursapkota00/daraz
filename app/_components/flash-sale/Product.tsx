import Image from 'next/image'
import React from 'react'

interface ProductItem {
    img: string,
    name: string,
    price: number,
    discount?: number,
}

export default function Product() {
    const products: ProductItem[] = [
        {
            img: 'fs1.jpg',
            name: 'Designer Velvet King Size Quilt ( Sirak) For Minus Degree Celsius',
            price: 7999,
            discount: 59
        },
        {
            img: 'fs2.jpg',
            name: 'Designer Velvet King Size Quilt ( Sirak) For Minus Degree Celsius',
            price: 7999,
            discount: 59
        },
        {
            img: 'fs3.jpg',
            name: 'Designer Velvet King Size Quilt ( Sirak) For Minus Degree Celsius',
            price: 7999,
            discount: 59
        },
        {
            img: 'fs4.jpg',
            name: 'Designer Velvet King Size Quilt ( Sirak) For Minus Degree Celsius',
            price: 7999,
            discount: 59
        },
        {
            img: 'fs5.webp',
            name: 'Designer Velvet King Size Quilt ( Sirak) For Minus Degree Celsius',
            price: 7999,
            discount: 59
        },
        {
            img: 'fs6.webp',
            name: 'Designer Velvet King Size Quilt ( Sirak) For Minus Degree Celsius',
            price: 7999,
            discount: 59
        },
    ]
    return (
        <div className='flex flex-row flex-wrap mt-[2px] justify-between bg-white rounded-sm'>
            {products.map((p, i) => (
                <div key={i} className='w-[188px] pb-2 my-3 hover:shadow-[2px_2px_2px_rgba(0,0,0,0.1),-2px_2px_2px_rgba(0,0,0,0.1)] cursor-pointer mr-2 last:mr-0'>
                    <Image src={`/${p.img}`} alt='Product' width={180} height={180} className='w-[100%]' />
                    <p className='text-ellipsis line-clamp-2 text-[14px] my-1 leading-[18px]'>{p.name}</p>
                    <p className='text-[18px] text-[#f85606] tracking-[-0.56px]'>Rs.{p.discount ? p.price - p.discount / 100 * p.price : p.price}</p>
                    <div className="flex flex-row">
                        <p className='line-through text-[12px] text-[#9e9e9e]'>Rs.{p.price}</p>
                        <p className='ml-1 text-[12px] text-[#212121]'>-{p.discount}%</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
