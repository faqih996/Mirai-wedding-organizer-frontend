
import React from 'react'
import { TPackage, TShow } from './types'


import Slider from '@/components/Slider'

import Popular from '@/assets/images/popular.svg'
import Pinpoint from '@/assets/images/pinpoint.svg'
import HomeTown from '@/assets/images/hometown.svg'
import Image from 'next/image'
import getData from './actions'
import Link from 'next/link'

// Props for WeddingPackagesWrapper component
type PropsWeddingPackagesWrapper = {
    show: TShow,
    type: "grid" | "slider"
}

function WeddingPackageSlider({ data }: { data: TPackage[] }) {
    
    console.log(data)
    return <div className = 'relative' >
        <Slider swiperClassName='w-full h-[480px]'
            swiperSliderClassName='px-12 -mx-10 xl:max-w-5xl 2xl:max-w-7xl'
        >
            {
                data.map(slide => {
                    // Construct the image URL
                    const imageUrl = `${process.env.HOST_API}/${slide.thumbnail}`;
                    
                    // Log the image URL to the console
                    console.log("Image URL:", imageUrl);

                    return <div key={slide.id} className="relative h-full overflow-hidden card-slide rounded-3xl">

                        <figure className="absolute w-full h-full">
                            <Image
                                fill
                                className="object-cover object-center"
                                src={`${process.env.HOST_API}/${slide.thumbnail}`}
                                alt={slide.name}
                                sizes="(max-width: 768px) 100vw"
                            />
                        </figure>

                        <div className="flex flex-col items-start card-slide-content gap-y-5" >
                            <span className="inline-flex items-center px-3 py-1 text-sm uppercase rounded-full bg-color1 text-light1 gap-x-2">
                                <Popular />
                                {slide.isPopular}
                            </span>

                            <span className="flex flex-col gap-y-1">
                            
                                <h6 className="text-[28px] font-bold">
                                    {slide.about}
                                </h6>
                                
                                <span className="text-xl font-semibold text-color2">Rp { slide.price }</span>
                            </span>

                            <span className="flex gap-x-4">
                            
                                <span className="flex items-center gap-x-2">
                                    <Pinpoint />
                                    {slide.city.name}
                                </span>
                            
                                <span className="flex items-center gap-x-2">
                                    <HomeTown />
                                    {slide.weddingOrganizer.name}
                                </span>
                                
                            </span>
                            
                            <Link
                                href="/wedding-details.html"
                                className="flex justify-center w-full py-2 rounded-full bg-color2 text-light1"
                            >View Package
                            </Link>
                        </div>
                    </div>
                })
            }
            
        </Slider>
    </div >
}

async function WeddingPackagesWrapper({
    show, type
}: PropsWeddingPackagesWrapper) {
    const { data }: { data: TPackage[] } = await getData(show);
    console.log(data)
    if (type === "grid") {
        return <div className=''>Grid</div>
    }

    if (type === "slider") {
        return <WeddingPackageSlider data={data} />
    }

    return null
}

export default WeddingPackagesWrapper