import React from 'react'
import { ProductType } from './page'
import Button from './button'

export default function Product({ products, editPrice }: { products: ProductType[], editPrice: (id: number) => void }) {
    return (
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    <h1>{p.name}</h1>
                    <h1>{p.price}</h1>
                    <Button id={p.id} editPrice={editPrice} />
                </div>
            ))}
        </div>
    )
}
