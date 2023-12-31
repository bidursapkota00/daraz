import React from "react";
import Hero from "./_components/hero/hero";
import Category from "./_components/grid-category/category";
import FlashSale from "./_components/flash-sale/FlashSale";
import DarazMall from "./_components/daraz-mall/DarazMall";

export default function Home() {

  return (
    <>
      <Hero />
      <Category />
      <FlashSale />
      <DarazMall />
    </>
  );
}