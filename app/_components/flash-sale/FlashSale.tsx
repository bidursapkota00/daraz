import Timer from "./Timer";

export default function FlashSale() {
    return (
        <div className="px-[76px]">
            <h1 className="text-[#424242] text-[22px] pb">Flash Sale</h1>
            <div className='grid grid-cols-[170px_1fr_100px] bg-white p-3 text-[14px] items-center'>
                <span className="text-[#f85606]">On Sale Now</span>
                <div className='grid grid-cols-[80px_1fr] items-center'>
                    <span>Ending in</span>
                    <div className="flex flex-row items-center">
                        <Timer />
                    </div>
                </div>
            </div>
        </div>
    )
}
