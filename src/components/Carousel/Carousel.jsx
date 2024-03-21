'use client'
import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';
import IronOutlinedIcon from '@mui/icons-material/IronOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
const CarouselSection = () => {
    const Products = [
        {
          id: 1,
          icon: <LocalLaundryServiceOutlinedIcon style={{ fontSize: 90 }} />,
          src: "https://brahmagems-media.s3.ap-south-1.amazonaws.com/48268/1681128991.png",
          name: "Wash & Fold",
          category: "Dry cleaning is a specialized cleaning process that uses non-water-based solvents to remove stains and dirt from delicate fabrics and garments, preserving their quality and extending their lifespan.",
        },
        {
            id: 2,
            icon: <IronOutlinedIcon style={{ fontSize: 90 }} />,
            src: "https://brahmagems-media.s3.ap-south-1.amazonaws.com/48268/1681128991.png",
            name: "Dry Cleaning",
            category: "Dry cleaning is a specialized cleaning process that uses non-water-based solvents to remove stains and dirt from delicate fabrics and garments, preserving their quality and extending their lifespan.",
        },
        {
            id: 3,
            icon: <CheckroomOutlinedIcon style={{ fontSize: 90 }} />,
            src: "https://brahmagems-media.s3.ap-south-1.amazonaws.com/48268/1681128991.png",
            name: "Steam Ironing",
            category: "Dry cleaning is a specialized cleaning process that uses non-water-based solvents to remove stains and dirt from delicate fabrics and garments, preserving their quality and extending their lifespan.",
        },
        {
            id: 4,
            icon: <DryCleaningOutlinedIcon style={{ fontSize: 90 }} />,
            src: "https://brahmagems-media.s3.ap-south-1.amazonaws.com/48268/1681128991.png",
            name: "Wash & Steam Iron",
            category: "Dry cleaning is a specialized cleaning process that uses non-water-based solvents to remove stains and dirt from delicate fabrics and garments, preserving their quality and extending their lifespan.",
        }
      ];
  return (
    <div className='m-auto max-w-[1000px]'>
    <div className='w-full pt-[40px] pb-[40px]'>
    <h3
          className="text-5xl text-center font-semibold mb-4 text-[#222]"
        >
          Services 
        </h3>
    <div id='wrapper'>
    <Carousel 
    plugins={[
        Autoplay({
          delay: 4000
        })
      ]}
    className="w-full">
      <CarouselContent className="ml-1 mt-5">
      {Products.map(Product =>
          <CarouselItem key={Product.id} className="pl-2 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-b-[#416D19] border-b-[4px] shadow-lg">
                <CardContent className="flex items-center flex-wrap gap-5 justify-center flex-co py-5">
                    <div><center>
                    {Product.icon}
                    <br /><br />
                    <Link href="/" className='text-lg font-semibold'>{Product.name}</Link><br /><br />
                    <p className='text-sm'>{Product.category}</p></center>
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
    </div>
  )
}

export default CarouselSection