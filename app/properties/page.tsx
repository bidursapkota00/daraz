'use client'
import React, { useState } from 'react'
import Product from './product'

export interface ProductType {
    id: number,
    name: string,
    price: number
}

export default function Props() {
    const [products, setProducts] = useState<ProductType[]>([
        {
            id: 1,
            name: 'Product1',
            price: 100.00
        },
        {
            id: 2,
            name: 'Product2',
            price: 300.00
        }
    ])

    const changePrice = (id: number) => {
        const newPrice = (Math.random() * 1000).toFixed(2)
        let newState: ProductType[] = []
        newState = products.map((p) => {
            if (p.id == id) return { ...p, price: +newPrice }
            return p
        })
        setProducts(newState)
    }
    return (
        <div>
            <h1>This is Products Section</h1>
            <h1>This section contains overall layout to display multiple product Item Card</h1>
            <Product products={products} editPrice={changePrice} />
        </div>
    )
}
