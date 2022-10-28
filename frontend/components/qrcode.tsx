import React from 'react'
import qrcode from '../assets/images/home/qr-code.png'
import appstore from '../assets/images/iOS-download.png'
import ggplay from '../assets/images/GGPlay-download.png'
import Image from 'next/image';

const QrCode = () => {
    return (
        <>
            <div className='mt-8 lg:mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
                <div className='inset-0 inline-block align-top w-32 h-32 object-cover'>
                    <Image  src={qrcode}
                    width={128}
                    height={128}
                    layout='responsive'
                    alt='qr-code'
                    objectFit="cover" />
                </div>
                <span className='inline-block align-top px-4 space-y-5'>
                    <div className='relative w-[135px]'>
                        <Image  src={appstore}
                            width={135}
                            height={40}
                            layout='responsive'
                            alt='appstore'
                            objectFit="cover" />
                    </div>
                    <div className='relative w-[135px]'>
                        <Image src={ggplay}
                            width={135}
                            height={40}
                            layout='responsive'
                            alt='ggplay'
                            objectFit="cover" />
                    </div>
                </span>
            </div>
        </>
    )
}

export default QrCode