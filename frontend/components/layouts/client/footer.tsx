import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import QrCode from '../../qrcode';

const Footer = () => {
	return (
		<>
			<footer>
				<div className='pb-1 lg:pb-0 lg:z-10 lg:relative w-full'>
					<div className='lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-8'>
						<div>
							<Link href='/'>
								<a>
									<div className='flex flex-col justify-center items-start'>
										<div className='text-4xl text-secondary font-bold'>Delevery Express</div>
										<div className='text-base'>Giao hàng tận nơi - Có mặt mọi nơi</div>
									</div>
								</a>
							</Link>
						</div>
						<QrCode  />
					</div>
				</div>
				<div className='max-w-md mx-auto border-t sm:border-gray-200 lg:border-t-0 md:border-t-0 sm:max-w-7xl lg:pt-8 w-full'>
					<div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 my-5' >
						<div className='my-5'>
							<div className='text-xl leading-7 font-bold'>Dịch vụ</div>
							<ul role='list' className='mt-6 space-y-4'>
								<li >
									<p className='text-base font-semibold leading-6'>
										DeliveryExpress
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6'>
										ExpressMart
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6'>
										ExpressTruck
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6'>
										Dịch vụ doanh nghiệp
									</p>
								</li>
							</ul>
						</div>
						<div className='my-5'>
							<div className='text-xl leading-7 font-bold'>
								Công ty
							</div>
							<ul role='list' className='mt-6 space-y-4'>
								<li>
									<p className='text-base font-semibold leading-6'>
										Về ch&uacute;ng tôi
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6'>
										Tin tức
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6'>
										Tuyển dụng
									</p>
								</li>
							</ul>
						</div>
						<div className='my-5'>
							<div className='text-xl leading-7 font-bold'>
								Khách hàng
							</div>
							<ul role='list' className='mt-6 space-y-4'>
								<li>
									<p className='text-base font-semibold leading-6'>
										Khách hàng cá nhân
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6'>
										Khách hàng doanh nghiệp
									</p>
								</li>
							</ul>
						</div>
						<div className='my-5'>
							<div className='text-xl leading-7 font-bold'>
								Hỗ trợ
							</div>
							<ul role='list' className='mt-6 space-y-4'>
								<li>
									<p className='text-base font-semibold leading-6 '>
										Chính sách và điều khoản
									</p>
								</li>
							</ul>
						</div>
						<div className='my-5'>
							<div className='text-xl leading-7 font-bold'>
								T&agrave;i xế
							</div>
							<ul role='list' className='mt-6 space-y-4'>
								<li>
									<p className='text-base font-semibold leading-6'>
										Đăng k&yacute; t&agrave;i xế mới
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6'>
										Cộng đồng t&agrave;i xế
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6 '>
										Cẩm nang t&agrave;i xế
									</p>
								</li>
								<li>
									<p className='text-base font-semibold leading-6 '>
										Trung tâm hỗ trợ
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='mt-12 border-t border-gray-200 pt-8 grid lg:grid-cols-3 gap-4'>
						<div className='col-span-2 flex-auto'>
							<h3 className='text-2xl leading-9 font-bold'>
								Công Ty Cổ Phần Dịch Vụ Tức Thời
							</h3>
							<div role='list' className='mt-6 space-y-4'>
								<div className='flex gap-2'>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
									</svg>
									<p className='font-medium leading-6'>
										TP.HCM: 65 Huỳnh Thúc Kháng, P.Bến Nghé, Q.1, Tp.HCM
									</p>
								</div>
								<div className='flex gap-2'>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									<p className='font-medium leading-6'>
										hiukhoago@gmail.com
									</p>
								</div>
								<div className='flex gap-2'>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
									</svg>
									<p className='font-medium leading-6'>
										0355501613
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>


		</>
	)
}

export default Footer