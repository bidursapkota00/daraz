import Image from "next/image"

export default function Navbar() {
    return (
        <div className='bg-[#f85606] h-[91px] px-[56px]'>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row py-[5px]">
                    <p className="mr-[20px] text-[12px] text-[#fff] hover:text-[#ccc] cursor-pointer">Become a Seller</p>
                    <p className="mr-[20px] text-[12px] text-[#fff] hover:text-[#ccc] cursor-pointer">Payments & Recharge</p>
                    <p className="mr-[20px] text-[12px] text-[#fff] hover:text-[#ccc] cursor-pointer">Help & Support</p>
                    <p className="mr-[20px] text-[12px] text-[#fff] hover:text-[#ccc] cursor-pointer">Daraz Logistics Partner</p>
                </div>
                <div className="flex flex-row items-center bg-[rgba(0,0,0,0.5)] p-[5px] rounded-[5px]">
                    <Image alt='Logo' src='/darazLogo1.png' width={30} height={30} className="w-[20px]" />
                    <p className="text-[12px] ml-[5px] text-[#fff] hover:text-[#ccc] cursor-pointer">Save More on App</p>
                </div>
            </div>
        </div>
    )
}
