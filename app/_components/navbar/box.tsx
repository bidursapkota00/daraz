import Link from "next/link"
import Person4Icon from '@mui/icons-material/Person4';

export default function Box({ position1 = "mt-[10px]", position2 = "left-[50%]" }) {
    return (
        <div className={`${position1} relative z-50 cursor-default text-black bg-white border rounded-[5px] border-[#bfbfbf] hidden  group-hover:block transition-all duration-1000`}>
            <div className='relative'>
                <div className={`absolute w-[10px] h-[10px] border-l border-t border-[#bfbfbf] top-0 ${position2} -translate-x-[50%] -translate-y-[50%] rotate-[45deg] bg-white`}></div>
                <div className="flex flex-row p-[30px] flex-wrap w-[250px]">
                    <Link href="#" className='flex flex-row cursor-pointer pb-[10px]'>
                        <Person4Icon sx={{ fontSize: 20, color: '#6e686e' }} />
                        <span className="text-[12px] text-[#6e686e] ml-[20px] w-[120px]">Help Center</span>
                    </Link>
                    <Link href="#" className='flex flex-row cursor-pointer py-[10px]'>
                        <Person4Icon sx={{ fontSize: 20, color: '#6e686e' }} />
                        <span className="text-[12px] text-[#6e686e] ml-[20px] w-[120px]">Chat with Us</span>
                    </Link>
                    <Link href="#" className='flex flex-row cursor-pointer py-[10px]'>
                        <Person4Icon sx={{ fontSize: 20, color: '#6e686e' }} />
                        <span className="text-[12px] text-[#6e686e] ml-[20px] w-[120px]">Order</span>
                    </Link>
                    <Link href="#" className='flex flex-row cursor-pointer py-[10px]'>
                        <Person4Icon sx={{ fontSize: 20, color: '#6e686e' }} />
                        <span className="text-[12px] text-[#6e686e] ml-[20px] w-[120px]">Shipping & Delivery</span>
                    </Link>
                    <Link href="#" className='flex flex-row cursor-pointer py-[10px]'>
                        <Person4Icon sx={{ fontSize: 20, color: '#6e686e' }} />
                        <span className="text-[12px] text-[#6e686e] ml-[20px] w-[120px]">Payment</span>
                    </Link>
                    <Link href="#" className='flex flex-row cursor-pointer pt-[10px]'>
                        <Person4Icon sx={{ fontSize: 20, color: '#6e686e' }} />
                        <span className="text-[12px] text-[#6e686e] ml-[20px] w-[120px]">Returns & Refund</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
