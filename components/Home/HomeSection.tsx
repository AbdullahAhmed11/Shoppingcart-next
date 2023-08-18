import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image"
import Link from "next/link";
import { motion } from 'framer-motion';
import { setTransition } from "@/lib/transition";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const IMAGE_PROPS = [
    {
        srcImg: "/images/electronics.jpg",
        alt: "imgOne",
    },
    {
        srcImg: "/images/jewelery.jpg",
        alt: "imgOne",
    },
    {
        srcImg: "/images/mens-clothing.jpg",
        alt: "imgOne",
    },
    {
        srcImg: "/images/womens-clothing.jpg",
        alt: "imgOne",
    },
]


function HomeSection() {
    return (
        <>
            <MaxWidthWrapper>
                <motion.div
                    {...setTransition({ direction: 'left' })}
                >
                    <div className="flex items-center justify-center  mt-10">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                IMAGE_PROPS.map((prop) => (
                                    <SwiperSlide key={prop.srcImg}>

                                        <Image
                                            src={prop.srcImg}
                                            className="flex h-60 min-w-full justify-center sm:h-80 rounded"
                                            width={100}
                                            height={60}
                                            alt={prop.alt}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="mt-4 flex items-center justify-center flex-col dark:text-white text-center gap-3">
                        <h1 className="text-3xl text-center font-bold">The One Stop Shop for All Your<br /> Shopping Needs!</h1>
                        <p className="text-md text-secondry">Hi! Welcome to our shopping website. We are excited to offer you a great selection of products at amazing prices. We are sure you will find something you love. Thank you for choosing us.</p>
                        <Link passHref href="store">
                            <button className="w-17  p-3 border shadow-xl font-bold outline rounded-md dark:bg-black " >
                                Shopping now
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </MaxWidthWrapper>
        </>
    )
}
export default HomeSection;