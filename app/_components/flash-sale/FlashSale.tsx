import Timer from "./Timer";

export default function FlashSale() {
    return (
        <div>
            <h1>Flash Sale</h1>
            <div className='grid grid-cols-[100px_1fr_100px]'>
                <span>On Sale Now</span>
                <div className='grid grid-cols-[100px_1fr]'>
                    <span>Ending in</span>
                    <div>
                        <Timer />
                    </div>
                </div>
            </div>
        </div>
    )
}
