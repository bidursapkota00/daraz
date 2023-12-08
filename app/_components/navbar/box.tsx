import Link from "next/link"

export default function Box({ position1 = "mt-[10px]", position2 = "left-[50%]" }) {
    return (
        <div className={`${position1} relative z-50 cursor-default h-[200px] text-black bg-white border rounded-[5px] border-[#bfbfbf] hidden  group-hover:block group-hover:z-50 transition-all duration-1000`}>
            <div className='relative'>
                <div className={`absolute w-[10px] h-[10px] border-l border-t border-[#bfbfbf] top-0 ${position2} -translate-x-[50%] -translate-y-[50%] rotate-[45deg] bg-white`}></div>
                <div className='p-2'>
                    <Link href="#" className='cursor-pointer'>
                        <div>Option1</div>
                    </Link>
                    <Link href="#" className='cursor-pointer'><div>Option1</div></Link>
                    <Link href="#" className='cursor-pointer'><div>Option1</div></Link>
                </div>
            </div>
        </div>
    )
}
