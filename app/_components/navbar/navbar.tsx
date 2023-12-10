import Image from "next/image"
import Link from "next/link"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person4Icon from '@mui/icons-material/Person4';
import Search from "./search";
import Box from "./box";
import Language from "./language";

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
                        <Box positionArrow="left-[50%]">
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
                        </Box>
                    </div>
                    <Link href="#" className="mr-[20px] text-[12px] text-[#fff] hover:text-[#eee] cursor-pointer">Daraz Logistics Partner</Link>
                </div>
                <div className="group relative flex flex-row items-center bg-[rgba(0,0,0,0.3)] p-[5px] rounded-[5px] cursor-pointer">
                    <Image alt='Logo' src='/darazLogo1.png' width={30} height={30} className="w-[20px]" />
                    <Link href="#" className="text-[12px] ml-[5px] text-[#fff] hover:text-[#eee]">Save More on App</Link>
                    <div className="absolute z-50 top-[100%] left-0 h-[15px] w-[100%]"></div>
                    <Box positionBox="left-[unset] translate-x-[unset] right-[10px]" positionArrow="left-[80%]">
                        <div className="border w-[352px] border-[#bfbfbf] py-3 px-2 ">
                            <Image alt='Logo' src='/download_the_app.png' width={300} height={250} className="w-[300px] m-auto" />
                            <div className="flex flex-row">
                                <Image alt='Logo' src='/darazLogo1.png' width={30} height={30} className="w-[20px]" />
                                <div></div>
                            </div>
                        </div>
                    </Box>
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
                    <div className="group relative flex flex-row items-center mr-[10px] p-[10px] hover:bg-[rgba(0,0,0,0.1)] rounded-[10px] cursor-pointer">
                        <LanguageIcon sx={{ fontSize: 20, color: '#fff', marginRight: '5px' }} />
                        <span className="text-[12px] text-[#fff] font-bold mr-[5px]">EN</span>
                        <KeyboardArrowDownIcon sx={{ fontSize: 15, color: '#fff' }} />
                        <div className="absolute z-40 top-[100%] left-0 h-[15px] w-[100%]"></div>
                        <Language />
                    </div>
                    <div className="py-[5px] px-[9px] hover:bg-[rgba(0,0,0,0.1)] rounded-[10px] cursor-pointer">
                        <ShoppingCartOutlinedIcon className=" " sx={{ fontSize: 20, color: '#fff' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
