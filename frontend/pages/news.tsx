import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import LayoutDefault from '../layouts/default'

import new1 from '../assets/images/news/1.jpeg'

const News = () => {
    const categories = ['Tất cả tin tức', 'Khách hàng', 'Tài xế']
    const [active, setActive] = useState(0)
    return (
        <>
            <div className='max-w-md px-5 mx-auto sm:max-w-3xl lg:max-w-7xl md:px-0'>
                <div className='mt-20 bg-white'>
                    <div>
                        <h2 className='pt-8 pb-3'>
                            Có gì trên Delivery Express
                        </h2>
                        <div className='sub_title my-5 max-w-2xl'>	Nơi cập nhật tất cả tin tức, hoạt động mới nhất từ Delivery Express và các đối tác.</div>
                    </div>
                    <div className='space-y-5'>
                        <ul className='flex gap-10 items-center overflow-x-auto'>
                            {categories.map((c, index) => (
                                <li className={active == index ? 'tag_active' : ''} key={index} onClick={() => setActive(index)}>
                                    <Link href='#'>
                                        <a>{c}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <div className='space-y-5'>
                                <div className='flex flex-col md:flex-row md:items-start justify-between'>
                                    <div>
                                        <Link href='./detailNews'>
                                            <a className='w-full min-w-[600px] hidden lg:block'>
                                            <div>
                                                <Image alt="" src={new1}
                                                className="rounded-xl"
                                                width={625}
                                                height={370} />
                                            </div>
                                            <div className='py-1 '>
                                                23/05/2022
                                            </div>
                                            <div className='py-1 font-bold text-xl'>
                                                [AHAMART] BỮA TRƯA VUI VẺ &ndash; NHẬN DEAL 0 ĐỒNG
                                            </div>
                                            <div>
                                                <div className='py-2 text-primary'>
                                                    Đọc tiếp
                                                </div>
                                            </div>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='lg:flex flex-col ml-10'>
                                        {[...Array(3)].map((_, index) => (
                                            <div key={index}>
                                                <Link href='./detailNews'>
                                                    <a className='lg:flex gap-3 mb-8'>
                                                        <Image alt="" src={new1}
                                                            className="rounded-xl"
                                                            width={350}
                                                            height={230} />
                                                        <div className='py-2'>
                                                            <div className='text-sm font-medium text-gray-700 m-0 leading-5'>
                                                                16/05/2022
                                                            </div>
                                                            <div className='text-xl leading-7 text-black font-bold'>
                                                                [Ahamove x ZaloPay] Thanh toán ZaloPay, giao h&agrave;ng chỉ với NỬA GIá
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12'>
                                {[...Array(9)].map((_, index) => (
                                    <div key={index}>
                                        <Link href='./detailNews'>
                                            <a className='lg:w-[400px]'>
                                                <div >
                                                    <Image alt="" src={new1}
                                                        layout="responsive"
                                                        className='rounded-xl'
                                                        width={400}
                                                        height={240} />
                                                </div>
                                                <div className='py-2'>
                                                    <div>
                                                        13/05/2022
                                                    </div>
                                                    <div className='text-lg font-medium'>
                                                        AHAMOVE MỞ TO&Agrave;N BỘ DỊCH VỤ XE TẢI TẠI H&Agrave; NỘI, TH&Agrave;NH PHỐ HỒ CH&Iacute; MINH V&Agrave; B&Igrave;NH DƯƠNG
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default News

News.getLayout = function getLayout(page: any) {
    return (
        <LayoutDefault >{page}</LayoutDefault>
    )
}
