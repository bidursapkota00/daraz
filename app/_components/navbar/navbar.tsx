import Image from "next/image"
import Link from "next/link"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from "./search";
import Box from "./box";

export default function Navbar() {
    return (
        <div className='bg-[#f85606] h-[91px] px-[76px]'>
            <div className="flex flex-row justify-between h-[30px]">
                <div className="flex flex-row pt-[5px] h-[20px]">
                    <Link href="#" className="mr-[20px] text-[12px] text-[#fff] hover:text-[#eee] cursor-pointer">Become a Seller</Link>
                    <Link href="#" className="mr-[20px] text-[12px] text-[#fff] hover:text-[#eee] cursor-pointer">Payments & Recharge</Link>
                    <div className="group relative mr-[20px] text-[12px] text-[#fff] hover:text-[#eee] cursor-pointer">
                        <Link href="#" className="">Help & Support</Link>
                        <div className="absolute top-[100%] left-0 h-[15px] w-[100%]"></div>
                        <Box />
                    </div>
                    <Link href="#" className="mr-[20px] text-[12px] text-[#fff] hover:text-[#eee] cursor-pointer">Daraz Logistics Partner</Link>
                </div>
                <div className="flex flex-row items-center bg-[rgba(0,0,0,0.3)] p-[5px] rounded-[5px] cursor-pointer">
                    <Image alt='Logo' src='/darazLogo1.png' width={30} height={30} className="w-[20px]" />
                    <Link href="#" className="text-[12px] ml-[5px] text-[#fff] hover:text-[#eee]">Save More on App</Link>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center">
                <Link href="/">
                    <Image alt="Logo" src="/darazlogo2.png" width={120} height={48} className="w-[120px] cursor-pointer" />
                </Link>
                <Search />
                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center mr-[20px]">
                        <Link href='#' className="flex flex-row items-center p-[10px] hover:bg-[rgba(0,0,0,0.1)] rounded-[10px] cursor-pointer mr-[10px]">
                            <PersonOutlineIcon sx={{ fontSize: 20, color: '#fff', marginRight: '5px' }} />
                            <span className="text-[12px] text-[#fff] font-bold">Login</span>
                        </Link>
                        <span className="text-[12px] text-[#fff] font-bold mr-[10px]">|</span>
                        <Link href='#' className="text-[12px] text-[#fff] font-bold p-[10px] hover:bg-[rgba(0,0,0,0.1)] rounded-[10px] cursor-pointer">Sign Up</Link>
                    </div>
                    <div className="flex flex-row items-center mr-[10px] p-[10px] hover:bg-[rgba(0,0,0,0.1)] rounded-[10px] cursor-pointer">
                        <LanguageIcon sx={{ fontSize: 20, color: '#fff', marginRight: '5px' }} />
                        <span className="text-[12px] text-[#fff] font-bold mr-[5px]">EN</span>
                        <KeyboardArrowDownIcon sx={{ fontSize: 15, color: '#fff' }} />
                    </div>
                    <div className="py-[5px] px-[9px] hover:bg-[rgba(0,0,0,0.1)] rounded-[10px] cursor-pointer">
                        <ShoppingCartOutlinedIcon className=" " sx={{ fontSize: 20, color: '#fff' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
