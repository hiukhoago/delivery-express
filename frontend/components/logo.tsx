import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <>
            <div>
                <Link href='/'>
                    <a>
                        <div className='flex flex-col justify-center items-start'>
                            <div className='text-4xl text-secondary font-bold'>Delevery Express</div>
                            <div className='text-base'>Giao hàng tận nơi - Có mặt mọi nơi</div>
                        </div>
                    </a>
                </Link>
            </div></>
    )
}

export default Logo