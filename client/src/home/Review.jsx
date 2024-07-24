import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaS, FaStar } from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
       <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
       <div>
         <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            history={{
            key: 'slide',
            }}
            modules={[Navigation, Pagination, History]}
            className="mySwiper"
        >
            <SwiperSlide data-history="1">
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5 w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magnam impedit, aspernatur accusamus 
                        iusto reiciendis deleniti.Voluptate fugit facilis sed, ratione modi, nam sequi 
                        voluptatem sint, molestias sunt aperiam? Velit!</p>
                        <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO,ABC Company</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide data-history="1">
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5 w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magnam impedit, aspernatur accusamus 
                        iusto reiciendis deleniti.Voluptate fugit facilis sed, ratione modi, nam sequi 
                        voluptatem sint, molestias sunt aperiam? Velit!</p>
                        <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO,ABC Company</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide data-history="1">
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    {/* text */}
                    <div className='mt-7'>
                        <p className='mb-5 w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magnam impedit, aspernatur accusamus 
                        iusto reiciendis deleniti.Voluptate fugit facilis sed, ratione modi, nam sequi 
                        voluptatem sint, molestias sunt aperiam? Velit!</p>
                        <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO,ABC Company</p>
                    </div>
                </div>
            </SwiperSlide>
         </Swiper>
       </div>
    </div>
  )
}

export default Review
