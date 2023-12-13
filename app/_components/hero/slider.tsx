'use client'
import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

interface ArrowProps {
    className: string,
    style: React.CSSProperties,
    onClick: () => void,
    arrow: boolean,
}

function NextArrow(props: ArrowProps) {
    const { className, style, onClick, arrow } = props;
    return (
        <div
            className={className}
            style={{ ...style, opacity: arrow ? 1 : 0, background: 'rgba(0,0,0,0.3)', width: '21px', height: '40px' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props: ArrowProps) {
    const { className, style, onClick, arrow } = props;
    return (
        <div
            className={className}
            style={{ ...style, opacity: arrow ? 1 : 0, background: 'rgba(0,0,0,0.2)', width: '21px', height: '40px' }}
            onClick={onClick}
        />
    );
}

export default function SliderPage() {
    const images = ['/slider1.jpg', '/slider2.jpg'];
    const slider = useRef<Slider>(null);
    const [showArrow, setShowArrow] = useState<boolean>(true);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PrevArrow className='' style={{}} arrow={showArrow} onClick={() => slider.current?.slickPrev()} />,
        nextArrow: <NextArrow className='' style={{}} arrow={showArrow} onClick={() => slider.current?.slickNext()} />,
        beforeChange: () => {
            console.log('aalu')
            setShowArrow(false)
        },
        afterChange: () => setShowArrow(true),
    };
    return (
        <Slider {...settings} ref={slider}>
            {images.map((img, i) => {
                return <Image key={i} alt='Slider Image' src={img} width={1000} height={400} className='p-[1px]' />
            })}
        </Slider>
    )
}
