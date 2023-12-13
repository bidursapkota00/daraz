import React, { ReactNode } from 'react'
import SliderPage from './slider'
import WomanIcon from '@mui/icons-material/Woman';
import Link from 'next/link';

interface Category {
    icon: ReactNode,
    text: string,
    key: string
}

interface SubCategory {
    key: string,
    category: string[],
}

interface SubCategory2 {
    key: string,
    category: { image: string, category: string }[],
}

export default function Hero() {
    const categories: Category[] = [
        { icon: <WomanIcon />, text: "Women's Fashion", key: 'women' },
        { icon: <WomanIcon />, text: "Health & Beauty", key: 'health' },
    ]
    const subCategories: SubCategory[] = [
        { key: 'women', category: ['Clothing', 'Traditional Clothing'] },
        { key: 'health', category: ['Bath & Body', 'Beauty Tools'] },
    ]
    const subCategories2: SubCategory2[] = [
        { key: 'Clothing', category: [{ image: '', category: 'Tops & T-shirts' }, { image: '', category: 'Jeans' }] },
        { key: 'Traditional Clothing', category: [{ image: '', category: 'Saree' }, { image: '', category: 'Kurtas' }] },
        { key: 'Bath & Body', category: [{ image: '', category: 'Body Scrubs' }, { image: '', category: 'Foot Care' }] },
        { key: 'Beauty Tools', category: [{ image: '', category: 'Flat Irons' }, { image: '', category: 'Hair Dryer' }] },
    ]
    return (
        <div className='flex flex-row py-[10px] px-[76px] bg-[#f5f5f5]'>
            <div className="w-[20%] relative border border-[#bfbfbf] bg-white mr-[50px]">
                {categories.map((c, i) => <div key={i} className="grid grid-cols-[30px_1fr_0px] cursor-pointer group w-[100%]">
                    {c.icon}
                    <span>{c.text}</span>
                    <div className='w-0 justify-self-end relative'>
                        <div className="absolute z-50 left-[100%] top-0 h-[100%] w-[15px]"></div>
                    </div>
                    {subCategories.map((sc, i) => {
                        if (sc.key == c.key) return <div key={i} className="absolute z-50 left-[calc(100%+10px)] top-0 min-h-[100%] w-[200px] hidden group-hover:flex flex-col bg-white">
                            <div className="relative flex-grow">
                                {sc.category.map((sc1, i) => <div className='group/sub' key={i}>
                                    <span>{sc1}</span>
                                    {subCategories2.map((sc2, i) => {
                                        if (sc1 == sc2.key) return <div className="bg-[rgba(0,0,0,0.1)] absolute z-50 left-[100%] top-0 min-h-[100%] w-[200px] hidden group-hover/sub:flex flex-col bg-white" key={i}>
                                            <div className="my-[10px] py-[10px] border-l-2 border-[#bfbfbf] flex-grow flex flex-row">
                                                {sc2.category.map((c2, i) => <Link href={c2.category} key={i}>
                                                    {c2.category}
                                                </Link>)}
                                            </div>
                                        </div>
                                    })}
                                </div>)}
                            </div>
                        </div>
                    })}
                </div>)}
            </div>
            <div className="w-[80%]">
                <SliderPage />
            </div>
        </div>
    )
}
