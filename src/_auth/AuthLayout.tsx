import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            <>
                <section className='flex flex-1 justify-center items-center flex-col py-10'>
                    <Outlet />
                </section>

                <div className='hidden xl:block h-screen w-1/2 border-l-[1px] border-gray-700'>
                </div>
            </>
        </>
    );
};

export default AuthLayout;