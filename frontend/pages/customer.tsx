import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
import LayoutDefault from '../layouts/default'
import ahamartService from '../assets/images/customer/ahamart-service.png'
import guide from '../assets/images/customer/hello.png'
import bikeService from '../assets/images/customer/bike-service.png'
import iphone from '../assets/images/customer/iphone.png'
import shadowIphone from '../assets/images/customer/iphone-shadow.png';


const Customer = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			phone: "",
			email: "",
			area: "",
			product: "",
			need:"",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Vui lòng nhập họ tên").min(4, "Họ và tên phải đủ 4 ký tự"),
			phone: Yup.string().required("Vui lòng nhập số điện thoại").matches(/^[0-9\-\+]{9,15}$/, "Nhập đúng định dạng số điện thoại"),
			email: Yup.string().required("Vui lòng nhập email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, "Nhập đúng định dạng email"),
			area: Yup.string().required("Vui lòng chọn khu vực kinh doanh"),
			product: Yup.string().required("Vui lòng chọn ngành hàng kinh doanh"),
			need: Yup.string().required("Vui lòng chọn nhu cầu giao hàng"),
		}),
		onSubmit: (values) => {
			console.log(values);
		}
	});

	return (
		<><div>
			<div className="relative bg-[url('../assets/images/customer/truck-heroimg.png')] h-screen bg-cover bg-no-repeat overflow-hidden">
				<div className="bg-blue-100  w-6/12  min-h-screen absolute rounded-tr-[100px]">
					<div className="hidden xl:mr-12 xl:flex flex-col justify-center h-screen w-[35rem] ml-auto ">
						<h1 className="text-opacity-50 font-bold text-6xl">Ứng dụng giao hàng dành cho bạn</h1>
						<div className="text-lg leading-7 text-black font-medium max-w-xl my-3">Giao h&agrave;ng si&ecirc;u tốc v&agrave; tiện lợi, đồng h&agrave;nh c&ugrave;ng bạn mọi l&uacute;c mọi nơi, trong công việc lẫn cuộc sống.</div>
						<button className="button_primary w-48 p-2 border border-transparent text-center text-base leading-6 font-semibold my-3">Nhận tư vấn ri&ecirc;ng</button>
					</div>
				</div>
			</div>
		</div><div>
				<div className="bg-white pt-16 p-6 relative max-w-md px-5 mx-auto sm:max-w-3xl lg:max-w-7xl md:px-0">
					<div className="text-center">
						<h2 className="max-w-xxl ml-auto mr-auto font-bold text-5xl leading-12">Lợi &iacute;ch khi sử dụng dịch vụ Ahamove</h2>
						<div className="text-lg leading-7 text-black font-medium mt-3 text-center">Ch&uacute;ng tôi luôn mong muốn mang lại những trải nghiệm tốt nhất v&agrave; trở th&agrave;nh người đồng h&agrave;nh của bạn mọi l&uacute;c mọi nơi.</div>
						<div className="mt-6">
							<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
								<div className="hover:bg-blue-100 p-5 rounded-xl">
									<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3 inline-flex items-center justify-center"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="fast_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#fast_svg__a)"><path d="M70.833 143.75c27.615 0 50-22.386 50-50s-22.385-50-50-50c-27.614 0-50 22.386-50 50s22.386 50 50 50Z" fill="url(#fast_svg__b)"></path></g><circle cx="56" cy="57" r="26" fill="#FFF2E8"></circle><path d="M62.426 15h-12.84a1.926 1.926 0 0 0-1.927 1.926v3.852c0 1.064.863 1.927 1.926 1.927h12.841a1.926 1.926 0 0 0 1.926-1.927v-3.852A1.926 1.926 0 0 0 62.426 15Z" fill="#435A96"></path><path d="M25.188 43.25H12.347a1.926 1.926 0 1 0 0 3.852h12.84a1.926 1.926 0 0 0 0-3.852ZM24.546 60.585a1.926 1.926 0 0 0-1.927-1.926H9.78a1.926 1.926 0 1 0 0 3.852h12.84a1.926 1.926 0 0 0 1.927-1.926ZM23.903 66.364h-8.988a1.926 1.926 0 0 0 0 3.852h8.988a1.926 1.926 0 1 0 0-3.852ZM24.546 52.88a1.927 1.927 0 0 0-1.927-1.925H5.926a1.926 1.926 0 1 0 0 3.852H22.62a1.926 1.926 0 0 0 1.927-1.926Z" fill="#FC8F1D"></path><path d="M56.006 56.733v-21.83c-12.037 0-21.83 9.793-21.83 21.83 0 12.037 9.793 21.83 21.83 21.83 12.037 0 21.83-9.793 21.83-21.83h-21.83Z" fill="#FF8200"></path><path d="m77.132 37.047 2.065-2.066a1.926 1.926 0 1 0-2.724-2.724l-2.15 2.15a28.772 28.772 0 0 0-14.465-6.31v-3.466h-7.705v3.467a28.772 28.772 0 0 0-14.465 6.308l-2.15-2.15a1.927 1.927 0 1 0-2.724 2.724l2.066 2.066a28.784 28.784 0 0 0-7.766 19.687c0 15.931 12.96 28.892 28.892 28.892 15.93 0 28.892-12.96 28.892-28.892a28.784 28.784 0 0 0-7.766-19.686ZM56.006 80.489a23.756 23.756 0 1 1 0-47.512 23.756 23.756 0 0 1 0 47.512Z" fill="#435A96"></path><defs><linearGradient id="fast_svg__b" x1="33.333" y1="52.083" x2="93.75" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient></defs></svg>
									<div className="text-xl leading-7 text-black font-semibold mt-2 mb-2">Nhanh ch&oacute;ng</div>
									<p className="text-base leading-6 text-black font-medium">Chỉ từ 30 ph&uacute;t, giao h&agrave;ng nhanh ch&oacute;ng v&agrave; kịp thời ngay khi bạn cần.</p>
								</div>
								<div className="hover:bg-blue-100 p-5 rounded-xl">
									<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3 inline-flex items-center justify-center"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="good-service_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#good-service_svg__a)"><path d="M70.833 143.75c27.615 0 50-22.386 50-50s-22.385-50-50-50c-27.614 0-50 22.386-50 50s22.386 50 50 50Z" fill="url(#good-service_svg__b)"></path></g><path d="M69.798 65.746c.054-1.643-1.3-3.007-2.967-3.007h-.007l.248-.001c1.618-.001 2.93-1.289 2.928-2.876-.002-1.587-1.314-2.864-2.932-2.863h-12.19a.491.491 0 0 1-.475-.642l1.069-3.198c.909-2.722.747-4.575.747-7.764 0-1.875-1.55-3.395-3.462-3.395-1.737 0-3.205 1.262-3.432 2.95-.252 1.87-.422 5.192-3.572 8.167l-2.223 2.099a6.715 6.715 0 0 1-4.61 1.822H36v18.848h2.392c4.244-.004 3.856 4.119 9.135 4.114h17.966c1.615 0 2.925-1.285 2.925-2.87 0-1.585-1.31-2.87-2.925-2.87h.514c1.59 0 2.949-1.213 3.002-2.771.055-1.63-1.276-2.968-2.925-2.968h.712c1.592 0 2.95-1.215 3.002-2.775Z" fill="#FFF2E8"></path><path d="M32.249 55H26.75c-.415 0-.751.706-.751 1.576v20.848c0 .87.336 1.576.75 1.576h5.499c.415 0 .751-.706.751-1.576V56.576c0-.87-.336-1.576-.751-1.576Z" fill="#142246"></path><path d="M35.792 27.37a.67.67 0 0 0-.38-1.148l-4.34-.619a.684.684 0 0 1-.516-.368l-1.942-3.86a.69.69 0 0 0-1.228 0l-1.942 3.86a.686.686 0 0 1-.516.368l-4.34.62a.669.669 0 0 0-.38 1.146l3.14 3.005a.665.665 0 0 1 .198.596l-.742 4.242c-.096.55.492.969.995.71l3.882-2.004a.696.696 0 0 1 .638 0l3.883 2.003c.503.26 1.09-.16.994-.709l-.742-4.243a.665.665 0 0 1 .198-.595l3.14-3.005ZM80.792 27.37a.67.67 0 0 0-.38-1.148l-4.34-.619a.685.685 0 0 1-.516-.368l-1.942-3.86a.69.69 0 0 0-1.228 0l-1.942 3.86a.686.686 0 0 1-.516.368l-4.34.62a.669.669 0 0 0-.38 1.146l3.141 3.005a.665.665 0 0 1 .197.596l-.742 4.242c-.096.55.492.969.995.71l3.882-2.004a.696.696 0 0 1 .638 0l3.883 2.003c.503.26 1.09-.16.994-.709l-.741-4.243a.663.663 0 0 1 .197-.595l3.14-3.005ZM62.675 22.19c.636-.622.286-1.706-.593-1.834l-6.783-.991a1.07 1.07 0 0 1-.806-.589L51.46 12.6c-.393-.8-1.527-.8-1.92 0l-3.033 6.176a1.07 1.07 0 0 1-.806.589l-6.783.99c-.878.129-1.229 1.213-.594 1.836l4.908 4.808c.253.247.368.603.308.952l-1.158 6.789c-.15.879.768 1.55 1.553 1.134l6.067-3.205c.312-.165.684-.165.996 0l6.066 3.205c.786.415 1.704-.255 1.554-1.134l-1.159-6.789a1.08 1.08 0 0 1 .308-.952l4.908-4.808Z" fill="#FF8200"></path><defs><linearGradient id="good-service_svg__b" x1="33.333" y1="52.083" x2="93.75" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient></defs></svg>
									<div className="text-xl leading-7 text-black font-semibold mt-2 mb-2">Tiện lợi</div>
									<p className="text-base leading-6 text-black font-medium">Đáp ứng mọi nhu cầu giao h&agrave;ng, giao đồ đạc, giấy tờ t&agrave;i liệu, chuyển nh&agrave;, mua hộ...</p>
								</div>
								<div className="hover:bg-blue-100 p-5 rounded-xl">
									<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3 inline-flex items-center justify-center"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="cod_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#cod_svg__a)"><path d="M70.834 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50c-27.615 0-50 22.386-50 50s22.385 50 50 50Z" fill="url(#cod_svg__b)"></path></g><path d="M58.998 50h-25.5a3.003 3.003 0 0 0-3 3v21a1.5 1.5 0 0 0 1.5 1.5h28.5a1.5 1.5 0 0 0 1.5-1.5V53a3.003 3.003 0 0 0-3-3Z" fill="url(#cod_svg__c)"></path><path d="M42.503 50v8.249a.748.748 0 0 0 1.135.643l2.614-1.569 2.615 1.569a.75.75 0 0 0 1.136-.643V50h-7.5Z" fill="url(#cod_svg__d)"></path><path d="M66.236 71.177a4.15 4.15 0 0 0-4.473-2.637l-10.869 1.611a4.062 4.062 0 0 0-2.713-3.786l-9.34-3.06a8.37 8.37 0 0 0-5.222.013l-9.594 3.202A1.5 1.5 0 0 0 23 67.943v11.12a1.5 1.5 0 0 0 1.747 1.48l7.044-1.18a2.474 2.474 0 0 1 1.516.228l4.604 2.302a10.434 10.434 0 0 0 8.017.57l17.747-5.916a4.13 4.13 0 0 0 2.562-5.37Z" fill="url(#cod_svg__e)"></path><path d="M22.997 62.753h-3a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-13.5a3 3 0 0 0-3-3Z" fill="url(#cod_svg__f)"></path><path d="m75.825 21.572-19.307-4.293a10.483 10.483 0 0 0-7.061.805l-5.845 2.68a10.566 10.566 0 0 0-3.528 2.863l-3.525 4.437a1.5 1.5 0 0 0 1.175 2.433H75.5a1.5 1.5 0 0 0 1.5-1.5v-5.961a1.5 1.5 0 0 0-1.174-1.464Z" fill="url(#cod_svg__g)"></path><path d="M64.998 27.5h-31.5a3 3 0 0 0-3 3V44a3 3 0 0 0 3 3h31.5a3 3 0 0 0 3-3V30.5a3 3 0 0 0-3-3Z" fill="url(#cod_svg__h)"></path><path d="M39.5 43.253h-3.75a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h3.75a1.5 1.5 0 1 1 0 3h-2.25v6h2.25a1.5 1.5 0 1 1 0 3Z" fill="url(#cod_svg__i)"></path><path d="M59.002 43.253h3.75a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-3.75a1.501 1.501 0 1 0 0 3h2.25v6h-2.25a1.501 1.501 0 1 0 0 3Z" fill="url(#cod_svg__j)"></path><path d="M49.25 43.253a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="url(#cod_svg__k)"></path><path d="M75.5 24.503H64.25a1.502 1.502 0 0 0-1.41.987l-1.08 2.972a4.52 4.52 0 0 1-3.399 2.885L48.475 33.2a3.178 3.178 0 0 0 .586 6.303H64.58c1.477.002 2.938-.31 4.286-.915l7.246-3.235a1.5 1.5 0 0 0 .889-1.37v-7.98a1.5 1.5 0 0 0-1.5-1.5Z" fill="url(#cod_svg__l)"></path><path d="M80.003 18.5h-3a3 3 0 0 0-3 3V35a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V21.5a3 3 0 0 0-3-3Z" fill="url(#cod_svg__m)"></path><defs><linearGradient id="cod_svg__b" x1="33.334" y1="52.083" x2="93.75" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="cod_svg__c" x1="46.247" y1="49.92" x2="46.247" y2="70.791" gradientUnits="userSpaceOnUse"><stop stopColor="#FED200"></stop><stop offset="1" stopColor="#F59815"></stop></linearGradient><linearGradient id="cod_svg__d" x1="46.252" y1="50.281" x2="46.252" y2="59.502" gradientUnits="userSpaceOnUse"><stop stopColor="#FD9B02"></stop><stop offset="1" stopColor="#FF7302"></stop></linearGradient><linearGradient id="cod_svg__e" x1="44.751" y1="63.662" x2="44.751" y2="82.466" gradientUnits="userSpaceOnUse"><stop stopColor="#F1D2BD"></stop><stop offset="1" stopColor="#FEB592"></stop></linearGradient><linearGradient id="cod_svg__f" x1="21.497" y1="62.753" x2="21.497" y2="82.253" gradientUnits="userSpaceOnUse"><stop stopColor="#FE5F00"></stop><stop offset="1" stopColor="#FF9150"></stop></linearGradient><linearGradient id="cod_svg__g" x1="12390.2" y1="271.57" x2="12390.2" y2="2372.97" gradientUnits="userSpaceOnUse"><stop stopColor="#F1D2BD"></stop><stop offset="1" stopColor="#FEB592"></stop></linearGradient><linearGradient id="cod_svg__h" x1="4352.19" y1="2048.62" x2="11294.5" y2="8130.01" gradientUnits="userSpaceOnUse"><stop stopColor="#34CA82"></stop><stop offset="1" stopColor="#37A477"></stop></linearGradient><linearGradient id="cod_svg__i" x1="28.902" y1="32.842" x2="64.837" y2="51.013" gradientUnits="userSpaceOnUse"><stop stopColor="#37AA79"></stop><stop offset="1" stopColor="#398A70"></stop></linearGradient><linearGradient id="cod_svg__j" x1="1002.06" y1="839.915" x2="3009.52" y2="1412.13" gradientUnits="userSpaceOnUse"><stop stopColor="#37AA79"></stop><stop offset="1" stopColor="#398A70"></stop></linearGradient><linearGradient id="cod_svg__k" x1="1533.65" y1="1218.95" x2="4576.97" y2="2815.83" gradientUnits="userSpaceOnUse"><stop stopColor="#37AA79"></stop><stop offset="1" stopColor="#398A70"></stop></linearGradient><linearGradient id="cod_svg__l" x1="10545.6" y1="307.356" x2="10545.6" y2="2642.2" gradientUnits="userSpaceOnUse"><stop stopColor="#F1D2BD"></stop><stop offset="1" stopColor="#FEB592"></stop></linearGradient><linearGradient id="cod_svg__m" x1="78.503" y1="18.5" x2="78.503" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#FE5F00"></stop><stop offset="1" stopColor="#FF9150"></stop></linearGradient></defs></svg>
									<div className="text-xl leading-7 text-black font-semibold mt-2 mb-2">Ứng COD</div>
									<p className="text-base leading-6 text-black font-medium">Xác thực t&agrave;i khoản bằng eKYC nhanh ch&oacute;ng v&agrave; bảo mật, bạn c&oacute; thể được t&agrave;i xế ứng tiền trước l&ecirc;n đến 500,000đ/đơn h&agrave;ng.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-blue-100 max-w-md px-5 mx-auto sm:max-w-3xl lg:max-w-7xl md:px-0">
					<div className="pl-0 pr-0">
						<div className="pl-16 pr-16 pb-20 pt-20">
							<div className="text-center mb-20">
								<h2 className="max-w-xl ml-auto mr-auto font-bold leading-12 text-4xl">Th&ecirc;m nhiều tiện &iacute;ch hơn nữa d&agrave;nh cho bạn</h2>
								<div className="text-lg leading-7 text-black font-medium mt-3">Không chỉ giao h&agrave;ng, Ahamove còn mang đến nhiều t&iacute;nh năng hữu &iacute;ch v&agrave; tiện lợi hơn nữa cho cuộc sống của bạn.</div>
							</div>
							<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
								<Image src={ahamartService}
									width={400}
									height={290}
									alt=""
								// objectFit="cover"
								/>
								<div>
									<h4 className='text-2xl leading-9 font-bold'>ExpressMart</h4>
									<p className="text-base leading-6 text-black font-medium mt-4 mb-4">Dịch vụ mua h&agrave;ng online các loại thực phẩm, h&agrave;ng ti&ecirc;u d&ugrave;ng, thuốc men..., giao tận tay.</p>
									<a href="https://www.ahamove.com/services/ahamart/"><button className="bg-primary text-white w-48 p-2 cursor-pointer rounded-md border border-transparent text-center text-base leading-6 font-semibold mt-3 mb-3">T&igrave;m hiểu th&ecirc;m</button></a></div>
							</div>
							<div className="h-12 lg:h-28">&nbsp;</div>
							<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
								<div className="hidden lg:block">
									<h4 className='text-2xl leading-9 font-bold'>ExpressLoyalty</h4>
									<p className="text-base leading-6 text-black font-medium mt-4 mb-4">T&iacute;ch điểm đơn h&agrave;ng v&agrave; đổi th&agrave;nh các voucher mua sắm, ăn uống hấp dẫn từ nhiều thương hiệu nổi tiếng.</p>
									<a href="https://www.ahamove.com/ahaloyalty-blog" target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white w-48 p-2 cursor-pointer rounded-md border border-transparent text-center text-base leading-6 font-semibold mt-3 mb-3">T&igrave;m hiểu th&ecirc;m</button></a></div>
								<Image src={ahamartService}
									width={495}
									height={290}
									alt=""
								// objectFit="cover"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="relative py-10 max-w-md px-5 mx-auto sm:max-w-3xl lg:max-w-7xl md:px-0">
					<div className="mx-auto flex max-w-7xl w-full py-7 px-5 md:px-0 text-center lg:py-12 lg:text-left">
						<div className="relative w-1/2">
							<div className="absolute z-10 left-1/4 w-1/2 text-center">
								<Image src={iphone}
									className="rounded-3xl"
									width={310}
									height={640}
									alt=""
									objectFit="cover"
								/>
							</div>
							<div className="absolute left-1/4 w-1/2 text-center">
								<Image src={shadowIphone}
									className="rounded-3xl"
									width={310}
									height={640}
									alt=""
									objectFit="cover"
								/>
							</div>
							<div className="absolute left-[168px] top-4 w-1/2 rounded-2xl overflow-hidden">
								<div className="">
									<Image src={guide}
										className="rounded-3xl"
										width={300}
										height={615}
										id='guild'
										objectFit="cover"
									/>
								</div>
							</div>
						</div>
						<div className=" bg-orange-100 lg:w-1/2 sm:pl-8 xl:pl-0 xl:pr-8 rounded-3xl">
							<h2 className="max-w-xl ml-auto mr-auto font-bold leading-12 text-4xl">Hướng dẫn sử dụng dịch vụ giao h&agrave;ng</h2>
							<div className="flex my-5 p-3 rounded-xl cursor-pointer bg-primary text-white">
								<div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
								<div>
									<div className=" mt-0 font-bold text-xl leading-7">Bước 1</div>
									<div className="mt-0 font-bold text-xl leading-7">Chọn &ldquo;Bạn muốn giao h&agrave;ng đến đâu?&rdquo;</div>
								</div>
							</div>
							<div className="flex my-5 p-3 rounded-xl cursor-pointer">
								<div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
								<div>
									<div className="mt-0 font-bold text-xl leading-7">Bước 2</div>
									<div className="mt-0 font-medium text-xl leading-7">Nhập địa chỉ giao h&agrave;ng</div>
								</div>
							</div>
							<div className="flex my-5 p-3 rounded-xl cursor-pointer">
								<div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
								<div>
									<div className="mt-0 font-bold text-xl leading-7">Bước 3</div>
									<div className="mt-0 font-medium text-xl leading-7">Nhập thông tin người nhận h&agrave;ng</div>
								</div>
							</div>
							<div className="flex my-5 p-3 rounded-xl cursor-pointer">
								<div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
								<div>
									<div className="mt-0 font-bold text-xl leading-7">Bước 4</div>
									<div className="mt-0 font-medium text-xl leading-7">Kiểm tra lại thông tin của người gửi v&agrave; người nhận</div>
								</div>
							</div>
							<div className="flex my-5 p-3 rounded-xl cursor-pointer">
								<div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
								<div>
									<div className="mt-0 font-bold text-xl leading-7">Bước 5</div>
									<div className="mt-0 font-medium text-xl leading-7">Chọn y&ecirc;u cầu đặc biệt (nếu c&oacute;) v&agrave; kiểm tra thông tin thanh toán đơn h&agrave;ng</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pl-0 pr-0 max-w-md px-5 mx-auto sm:max-w-3xl lg:max-w-7xl md:px-0">
					<div className="px-3 my-20 lg:px-16">
						<h2 className="max-w-2xl mx-auto text-center ml-auto mr-auto font-bold leading-12 text-4xl">Các dịch vụ giao h&agrave;ng ph&ugrave; hợp với nhu cầu của bạn</h2>
						<div className="mt-10 mb-10">
							<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
								<div>
									<Image src={bikeService}
										width={495}
										alt=""
										height={290}
									// objectFit="cover"
									/>
									<div className="flex flex-col justify-between">
										<div>
											<h4 className="mt-4 mb-4 text-2xl leading-9 font-bold">Dịch vụ giao h&agrave;ng xe máy</h4>
											<p className="text-base leading-6 text-black font-medium mt-4 mb-4">Nhu cầu giao h&agrave;ng h&oacute;a nhỏ gọn, giao giấy tờ t&agrave;i liệu...</p>
										</div>
										<a href=""><button className="bg-primary text-white w-48 p-2 cursor-pointer rounded-md border border-transparent text-center text-base leading-6 font-semibold mt-3 mb-3">T&igrave;m hiểu th&ecirc;m</button></a></div>
								</div>
								<div>
									<Image src={bikeService}
										width={495}
										height={290}
										alt=""
									// objectFit="cover"
									/>
									<div className="flex flex-col justify-between">
										<div>
											<h4 className="mt-4 mb-4 text-2xl leading-9 font-bold">Dịch vụ giao h&agrave;ng xe tải</h4>
											<p className="text-base leading-6 text-black font-medium mt-4 mb-4">Nhu cầu chuyển nh&agrave;, chuyển văn phòng, vận chuyển đồ đạc cồng kềnh.</p>
										</div>
										<a href=""><button className="bg-primary text-white w-48 p-2 cursor-pointer rounded-md border border-transparent text-center text-base leading-6 font-semibold mt-3 mb-3">T&igrave;m hiểu th&ecirc;m</button></a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-blue-100 relative mx-auto lg:max-w-7xl md:px-0 rounded-3xl">
					<div className="common_container__5Hm_R lg:pt-20 pt-5">
						<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-14">
							<div className="max-w-md">
								<h2 className='text-gray-800 font-bold leading-16 text-5xl pl-20'>H&atilde;y để ch&uacute;ng tôi giải quyết những trăn trở của doanh nghiệp bạn</h2>
							</div>
							<div className="rounded-3xl pb-8">
								<div className="p-5 mx-auto bg-white shadow-xl border rounded-xl items-center space-x-4 mr-10">
									<h4 className='text-2xl leading-9 mb-2 font-bold'>Đăng k&yacute; thông tin để nhận tư vấn</h4>
									<form onSubmit={formik.handleSubmit}>
										<p className="text-gray-900 mb-4 text-base leading-6 text-black font-normal">Delivery Express sẽ li&ecirc;n hệ hỗ trợ bạn nhanh nhất c&oacute; thể</p>
										<div className="my-3 space-y-3">
											<label className="flex items-baseline">
												<input className="border-orange-100" id="business-type_small" name="business-type" type="radio" value="Kinh doanh nhỏ" />
												<p className="text-base leading-6 text-black ml-2 mr-2">Kinh doanh nhỏ (1 cửa h&agrave;ng hoặc kinh doanh online. C&oacute; ứng tiền)</p>
											</label>
											<label className="flex items-baseline">
												<input className="border-orange-100" id="business-type_huge" name="business-type" type="radio" value="Doanh nghiệp" />
												<p className="text-base leading-6 text-black ml-2 mr-2">Doanh nghiệp (Tr&ecirc;n 2 cửa h&agrave;ng. C&oacute; ứng tiền)</p>
											</label>
										</div>
										<div>
											<div className='mb-4 text-gray-700 text-left'>
												<input
													className='border rounded-sm w-full h-10'
													type="text"
													id="name"
													name="name"
													value={formik.values.name}
													onChange={formik.handleChange}
													placeholder='Họ và tên'
												/>
												{formik.errors.name && (
													<p className='text-danger p-1'>{formik.errors.name}</p>
												)}
											</div>
											<div className='mb-4 text-gray-700 text-left'>
												<input
													className='border rounded-sm w-full h-10'
													type="number"
													id="phone"
													name="phone"
													value={formik.values.phone}
													onChange={formik.handleChange}
													placeholder='SĐT liên hệ'
												/>
												{formik.errors.phone && (
													<p className='text-danger p-1'>{formik.errors.phone}</p>
												)}
											</div>
											<div className='mb-4 text-gray-700 text-left'>
												<input
													className='border rounded-sm w-full h-10'
													type="email"
													id="email"
													name="email"
													value={formik.values.email}
													onChange={formik.handleChange}
													placeholder='Email'
												/>
												{formik.errors.email && (
													<p className='text-danger p-1'>{formik.errors.email}</p>
												)}
											</div>
											<div className='mb-4 text-gray-700 text-left'>
												<select 
												value={formik.values.area}
												onChange={formik.handleChange}
												className='border rounded-sm w-full h-10 appearance-none pl-3'>
													<option value="selected">Khu vực kinh doanh của bạn</option>
													<option value="grapefruit">Hồ Chí Minh</option>
													<option value="lime">Hà Nội</option>
													<option value="coconut">Đà Nẳng</option>
													<option value="mango">Hải Phòng</option>
												</select>
												{formik.errors.area && (
													<p className='text-danger p-1'>{formik.errors.area}</p>
												)}
											</div>
											<div className='mb-4 text-gray-700 text-left'>
												<select 
												value={formik.values.product}
												onChange={formik.handleChange}
												className='border rounded-sm w-full h-10 appearance-none pl-3'>
													<option value="selected">Ngành hàng kinh doanh của bạn</option>
													<option value="grapefruit">Bán điện gia dụng</option>
													<option value="lime">Bán thực phẩm</option>
													<option value="coconut">Bán quần áo</option>
													<option value="mango">Bán mĩ phẩm</option>
												</select>
												{formik.errors.product && (
													<p className='text-danger p-1'>{formik.errors.product}</p>
												)}
											</div>
											<div className='mb-4 text-gray-700 text-left'>
												<select 
												value={formik.values.need}
												onChange={formik.handleChange}
												className='border rounded-sm w-full h-10 appearance-none pl-3'>
													<option value="selected">Nhu cầu giao hàng</option>
													<option value="grapefruit">Giao bằng xe máy</option>
													<option value="lime">Giao bằng xe tải</option>
												</select>
												{formik.errors.need && (
													<p className='text-danger p-1'>{formik.errors.need}</p>
												)}
											</div>
										</div>
										<button className="bg-primary text-white w-48 p-2 cursor-pointer rounded-md border border-transparent text-center text-base leading-6 font-semibold mt-3 mb-3" type="submit">Đăng k&yacute;</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div></>
	)
}


export default Customer

Customer.getLayout = function getLayout(page: any) {
	return (
		<LayoutDefault >{page}</LayoutDefault>
	)
}
