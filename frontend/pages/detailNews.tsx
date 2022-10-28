import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import LayoutDefault from '../layouts/default'

import new1 from '../assets/images/news/1.jpeg'

const News = () => {
    const categories = ['Tất cả tin tức', 'Khách hàng', 'Tài xế']
    const [active, setActive] = useState(0)
    return (
        <div className='px-5'>
            <div className='overflow-auto py-5 max-w-3xl mx-auto'>
                <article className='float-left'>
                    <h1 className='font-bold text-5xl leading-12 mt-10'>NHẬN NGAY 100K KHI ĐĂNG KÝ TRỞ THÀNH TÀI XẾ XE BA GÁC</h1>
                    <p className='text-gray-500 py-8'>2022-06-17T15:37:16</p>
                    <section>
                        <div>
                        Đặc biệt trong tháng 7 này, Delivery Express mang đến chương trình thưởng “nóng” cho Đối tác đăng ký xe ba gác tại khu vực Thành phố Hồ Chí Minh. Khám phá ngay!
                        Là dịch vụ giao hàng siêu cấp với chính sách đền bù vượt trội và tài xế chất lượng cao. Delivery Express sẵn sàng giao các đơn hàng có giá trị lớn như máy tính, Smartphone, trang sức,… với tốc độ nhanh chóng, đảm bảo an tâm với chính sách đền bù hàng hóa lên tới 30 triệu đồng.
                        Không để khách hàng chờ đợi, chúng tôi hiểu mỗi khi chuyển hàng gì đó có giá trị, mỗi giây phút trôi qua đều là quý giá. Bạn sẽ muốn hàng hóa đến tay người nhận nhanh nhất có thể. Delivery Express cung cấp dịch vụ giao hàng đảm bảo an tâm siêu tốc chỉ 30 phút.
                        Nhận thấy giá trị của đơn hàng vượt xa những yêu cầu thông thường, Delivery Express cam kết đền bù hàng hóa lên tới 100% tối đa 30 triệu giúp cho khách hàng an tâm bán hàng, kinh doanh; tiết kiệm thời gian cho khách hàng; chủ shop sẽ không cần phải tự đi giao những món hàng có giá trị.
                        </div>
                    </section>
                </article>
            </div>
            <div className='my-3'>
                <div className='font-bold my-5'>
                    <h3>Có thể bạn quan tâm</h3>
                </div>
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12'>
                    {[...Array(3)].map((_, index) => (
                        <div key={index}>
                            <div className='lg:w-[400px]'>
                                <Image alt="" src={new1}
                                    layout="responsive"
                                    className='rounded-lg'
                                    width={400}
                                    height={240} />
                            </div>
                            <div>
                                <div className='text-gray-500 py-3'>
                                    13/05/2022
                                </div>
                                <div className='text-xl leading-7 text-black font-bold mb-1'>
                                    AHAMOVE MỞ TO&Agrave;N BỘ DỊCH VỤ XE TẢI TẠI H&Agrave; NỘI, TH&Agrave;NH PHỐ HỒ CH&Iacute; MINH V&Agrave; B&Igrave;NH DƯƠNG
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default News

News.getLayout = function getLayout(page: any) {
    return (
        <LayoutDefault >{page}</LayoutDefault>
    )
}
