import Link from "next/link"
import { ReactNode } from "react"

export default function Box({ children, positionArrow }: { children: ReactNode, positionArrow: string }) {
    return (
        <div className="absolute z-50 top-[calc(100%+12px)] left-[50%] -translate-x-[50%]">
            <div className='relative cursor-default text-black bg-white border rounded-[5px] border-[#bfbfbf] hidden  group-hover:block transition-all duration-1000'>
                <div className='relative'>
                    <div className={`absolute w-[10px] h-[10px] border-l border-t border-[#bfbfbf] top-0 ${positionArrow} -translate-x-[50%] -translate-y-[50%] rotate-[45deg] bg-white`}></div>
                    {children}
                </div>
            </div>
        </div>
    )
}
