import React from 'react'

export default function Button({ id, editPrice }: { id: number, editPrice: (id: number) => void }) {
    return (
        <button onClick={() => editPrice(id)}>Edit Price</button>
    )
}
