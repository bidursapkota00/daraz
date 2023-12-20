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
                <div key={i} className='w-[188px] py-2'>
                    <Image src={`/${p.img}`} alt='Product' width={180} height={180} className='w-[100%]' />
                    <p className='text-ellipsis line-clamp-2'>{p.name}</p>
                    <p>Rs.{p.discount ? p.price - p.discount / 100 * p.price : p.price}</p>
                    <div className="flex flex-row">
                        <p>Rs.{p.price}&nbsp;</p>
                        <p>-{p.discount}%</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
