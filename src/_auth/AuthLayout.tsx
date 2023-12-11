import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AuthLayout = () => {
    return (
        <>
            <>
                <section className='flex flex-1 justify-center items-center flex-col py-10'>
                    <Outlet />
                </section>

                <div 
                    className='hidden xl:block h-screen w-1/2 border-l-[1px] border-gray-700'
                >
                    <Swiper 
                        spaceBetween={0} 
                        slidesPerView={1}  
                        navigation
                        parallax
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 300 }}
                    >
                    
                    </Swiper>
                </div>
            </>
        </>
    );
};

export default AuthLayout;