import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
import LayoutDefault from '../layouts/default'
import banner1 from '../assets/images/customer/truck-heroimg.png'
import downloadApp from '../assets/images/driver/driver-downloadapp.png'
import community from '../assets/images/driver/driver-community.jpg'
import blog from '../assets/images/driver/blog-1-1.jpg'

const Customer = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            city:"",
            distrist:"",
            type_car:"",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Vui lòng nhập họ tên").min(4, "Họ và tên phải đủ 4 ký tự"),
            phone: Yup.string().required("Vui lòng nhập số điện thoại").matches(/^[0-9\-\+]{9,15}$/, "Nhập đúng định dạng số điện thoại"),
            email: Yup.string().required("Vui lòng nhập email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, "Nhập đúng định dạng email"),
            city: Yup.string().required("Vui lòng chọn thành phố"),
            distrist: Yup.string().required("Vui lòng chọn quận/huyện"),
            type_car: Yup.string().required("Vui lòng chọn loại xe"),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    useEffect(()=>{
        formik
    },[formik])
    return (
        <div>
            <div className="relative bg-[url('../assets/images/customer/truck-heroimg.png')] h-screen bg-cover bg-no-repeat overflow-hidden">
                <div className="bg-orange-100 w-[650px]  min-h-screen absolute rounded-tr-[80px]">
                    <div className="bg-white absolute ml-20 mt-16 min-h-screen w-4/5 rounded-lg">
                        <div className='pl-12 pr-12 py-5'>
                            <h3 className="mb-3 font-semibold">Đăng k&yacute; trở th&agrave;nh t&agrave;i xế Ahamove</h3>
                            <form onSubmit={formik.handleSubmit}>
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
                                        <p className='text-danger m-1 '>{formik.errors.name}</p>
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
                                        <p className='text-danger m-1'>{formik.errors.phone}</p>
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
                                        <p className='text-danger m-1'>{formik.errors.email}</p>
                                    )}
                                </div>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4">
                                    <div className='mb-2 text-gray-700 text-left'>
                                        <select 
                                        onChange={formik.handleChange}
                                        value={formik.values.city}
                                        className='border rounded-lg w-full h-10 pl-2'>
                                            <option value="0">Thành phố</option>
                                            <option value="grapefruit">Hồ Chí Minh</option>
                                            <option value="lime">Hà Nội</option>
                                            <option value="coconut">Đà Nẳng</option>
                                            <option value="mango">Hải Phòng</option>
                                        </select>
                                    </div>
                                    <div className='mb-2 text-gray-700 text-left'>
                                        <select 
                                        onChange={formik.handleChange}
                                        value={formik.values.distrist}
                                        className='border rounded-lg w-full h-10 pl-2'>
                                            <option value="0">Quận/Huyện</option>
                                            <option value="grapefruit">Không có</option>
                                        </select>
                                    </div>
                                    {formik.errors.city && (
                                        <p className='text-danger mb-2 '>{formik.errors.city}</p>
                                    )}
                                    {formik.errors.distrist && (
                                        <p className='text-danger mb-2 '>{formik.errors.distrist}</p>
                                    )}
                                </div>
                                
                                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                                    <div className='mb-2 text-gray-700 text-left'>
                                        <select 
                                        onChange={formik.handleChange}
                                        value={formik.values.type_car}
                                        className='border rounded-lg w-full h-10 pl-2'>
                                            <option value="0">Loại xe</option>
                                            <option value="grapefruit">Xe tải</option>
                                            <option value="lime">Xe ba gác</option>
                                            <option value="coconut">Xe máy</option>
                                        </select>
                                    </div>
                                </div>
                                {formik.errors.type_car && (
                                        <p className='text-primary'>{formik.errors.type_car}</p>
                                    )}
                                <button className="bg-primary text-white w-48 p-2 cursor-pointer rounded-md border border-transparent text-center text-base leading-6 font-semibold mt-3 mb-3" type="submit">Đăng ký ngay</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto pr-0 max-w-7xl">
                <h2 className="text-center text-5xl mt-10">Địa chỉ văn phòng Delivery Express</h2>
                <div>
                    <div className="my-10">
                        <div className="mr-8 h-12 rounded-lg inline-flex items-center font-medium text-lg cursor-pointer py-3 px-3">Hồ Ch&iacute; Minh</div>
                        <div className="mr-8 h-12 rounded-lg inline-flex items-center font-medium text-lg cursor-pointer py-3 px-3">H&agrave; Nội</div>
                        <div className="mr-8 h-12 rounded-lg inline-flex items-center font-medium text-lg cursor-pointer py-3 px-3">Hải Phòng</div>
                        <div className="mr-8 h-12 rounded-lg inline-flex items-center font-medium text-lg cursor-pointer py-3 px-3">Đ&agrave; Nẵng</div>
                        <div className="mr-8 h-12 rounded-lg inline-flex items-center font-medium text-lg cursor-pointer py-3 px-3">B&igrave;nh Dương</div>
                        <div className="mr-8 h-12 rounded-lg inline-flex items-center font-medium text-lg cursor-pointer py-3 px-3">Đồng Nai</div>
                        <div className="mr-8 h-12 rounded-lg inline-flex items-center font-medium text-lg cursor-pointer py-3 px-3">Các tỉnh th&agrave;nh khác</div>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
                        <div className="h-72 lg:h-full">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5457997934245!2d106.66156691480073!3d10.76944539232626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9578bdcb85%3A0x9bc44588f5ca31e4!2sAhaMove!5e0!3m2!1sen!2s!4v1647591488086!5m2!1sen!2s" width="100%" height="100%" loading="lazy"></iframe></div>
                        <div className='pl-5'>
                            <div className="text-xl leading-7 text-black font-bold">Hồ Ch&iacute; Minh</div>
                            <div className="mt-5 my-1 flex">
                                <svg width="18" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 lg:mr-4" ><path fillRule="evenodd" clipRule="evenodd" d="M9.646 21.41C11.708 19.485 18 13.266 18 9.075 18 4.063 13.97 0 9 0S0 4.063 0 9.075c0 4.19 6.292 10.41 8.354 12.335a.939.939 0 0 0 1.292 0ZM9 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#272727"></path></svg>
                                <p className="text-base leading-6 text-black font-medium">65 Huỳnh Thúc Kháng, P.Bến Nghé, Q.1, Tp.HCM</p>
                            </div>
                            <div className=" text-orange-600 cursor-pointer whitespace-nowrap inline-flex items-center justify-center ml-5 px-4 text-base font-semibold"><span className="mr-3">Xem hướng dẫn đường đi</span></div>
                            <div className="my-5">
                                <div className="flex">
                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 lg:mr-4" ><path fillRule="evenodd" clipRule="evenodd" d="M10 20C4.48 20 0 15.53 0 10 0 4.48 4.48 0 10 0c5.53 0 10 4.48 10 10 0 5.53-4.47 10-10 10Zm3.19-6.29a.742.742 0 0 0 1.03-.26c.21-.35.1-.81-.26-1.03L10.4 10.3V5.68a.749.749 0 1 0-1.5 0v5.05c0 .26.14.5.37.64l3.92 2.34Z" fill="#130F26"></path></svg>
                                    <p className="text-base leading-6 text-black font-medium">Thời gian hỗ trợ:&nbsp;từ thứ 2 đến hết sáng thứ 7 h&agrave;ng tuần</p>

                                </div>
                                <div className="my-3">
                                    <p className="ml-8 text-base leading-6 text-black font-bold">&bull; Sáng:&nbsp;8h30 - 11h30</p>
                                    <p className="ml-8 text-base leading-6 text-black font-bold">&bull; Chiều:&nbsp;13h00 - 17h00</p>
                                </div>
                            </div>
                            <div className="my-5 flex items-center">
                                <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 lg:mr-4" ><path d="M2 3.481a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.436a1 1 0 0 1-.54 1.059l-1.548.774a11.037 11.037 0 0 0 6.105 6.104l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.987v2.152a1 1 0 0 1-1 1h-2c-7.18 0-13-5.82-13-13v-2Z" fill="#111827"></path></svg>
                                <p className="text-base leading-6 text-black font-medium">Hotline tuyển dụng<button><div className="ml-8 rounded-lg p-3 border font-medium">0355501613</div></button></p>
                            </div>
                            <div className="flex bg-blue-200 rounded-lg p-3 border">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" className="mr-3 lg:mr-4" ><path d="M12.5 0C5.873 0 .5 5.373.5 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12Zm1 18h-2v-7h2v7Zm-1-9.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12.5 8.5Z" fill="#007CFF"></path></svg>
                                <p className="text-base leading-6 text-black font-medium">Đối tác vui lòng c&agrave;i đặt ứng dụng Tài xế Delivery để được hỗ trợ nhanh nhất</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10 text-center">
                <Image alt="" src={downloadApp}
                    className="hidden lg:block "
                    width={720}
                    height={320}
                    objectFit="cover"
                />
            </div>
            <div className="bg-blue-100 w-full mt-5 py-20">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="font-bold">V&igrave; sao chọn Delivery Express</h2>
                    <div className="text-lg leading-7 text-black mt-3 mb-3e max-w-xl mx-auto my-3">Ch&uacute;ng tôi luôn muốn đem đến những trải nghiệm dịch vụ đỉnh cao d&agrave;nh cho khách h&agrave;ng v&agrave; đối tác của Delivery Express</div>
                    <div className="mt-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flow-root rounded-lg px-2 lg:px-6 pb-7">
                                <div className="mt-6">
                                    <span className="inline-flex items-center justify-center"><svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#time_svg__a)"><path opacity="0.5" d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#64C3DF"></path><mask id="time_svg__b" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#0085BC"></path></mask><g mask="url(#time_svg__b)"><path d="M71.334 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z" fill="url(#time_svg__c)"></path></g><path d="M54.257 18.098h-7.484v6.622h7.484v-6.622Z" fill="#FFE3D3"></path><path d="M56.952 18.905H44.064a2.754 2.754 0 0 1-2.748-2.759 2.754 2.754 0 0 1 2.748-2.759h12.888a2.754 2.754 0 0 1 2.748 2.76 2.757 2.757 0 0 1-2.748 2.758Z" fill="#FA8C16"></path><path d="m76.312 31.506-2.675-2.687-2.688 2.699 2.676 2.686 2.687-2.698Z" fill="#FFE3D3"></path><path d="m76.992 32.77-4.618-4.637a1.398 1.398 0 0 1 0-1.975 1.384 1.384 0 0 1 1.967 0l4.618 4.637a1.398 1.398 0 0 1 0 1.975 1.384 1.384 0 0 1-1.968 0Z" fill="#FA8C16"></path><path d="m27.426 34.246 2.676-2.687-2.728-2.738-2.675 2.686 2.727 2.739Z" fill="#FFE3D3"></path><path d="m24.018 32.77 4.618-4.637a1.398 1.398 0 0 0 0-1.975 1.384 1.384 0 0 0-1.967 0l-4.618 4.637a1.398 1.398 0 0 0 0 1.975 1.384 1.384 0 0 0 1.967 0Z" fill="#FA8C16"></path><path d="M50.505 83.387c16.013 0 28.995-13.035 28.995-29.115S66.518 25.157 50.505 25.157c-16.014 0-28.995 13.035-28.995 29.115S34.49 83.387 50.505 83.387Z" fill="#FFF2EA"></path><path opacity="0.3" d="M50.506 25.157v29.115l25.752-14.924s-11.964-15.37-25.752-14.191Z" fill="#FFD5BC"></path><path opacity="0.22" d="M65.472 80.57 50.505 54.272H21.51S19.682 91.478 65.472 80.57Z" fill="#FF7F32"></path><path d="M50.505 83.387c16.013 0 28.995-13.035 28.995-29.115S66.518 25.157 50.505 25.157c-16.014 0-28.995 13.035-28.995 29.115S34.49 83.387 50.505 83.387Z" stroke="url(#time_svg__d)" strokeWidth="4" strokeMiterlimit="10"></path><path d="M50.504 30.745v4.85M38.791 33.896l2.415 4.202M30.213 42.506l4.185 2.425M27.074 54.272h4.835M30.213 66.033l4.185-2.425M38.791 74.648l2.415-4.203M50.504 77.799v-4.854M62.222 74.648l-2.42-4.203M70.796 66.033l-4.185-2.425M73.934 54.272h-4.83M70.796 42.506l-4.185 2.425M62.222 33.896l-2.42 4.202" stroke="#125598" strokeMiterlimit="10" strokeLinecap="round"></path><path d="m49.346 54.272.997-16.081a.16.16 0 0 1 .173-.151.162.162 0 0 1 .151.151l.997 16.08a1.168 1.168 0 0 1-1.086 1.239 1.167 1.167 0 0 1-1.233-1.091c-.003-.05 0-.105 0-.147Z" fill="#B1D8FF"></path><path d="M52.714 54.272c0 1.226-.99 2.22-2.21 2.22a2.215 2.215 0 0 1-2.211-2.22c0-1.227.99-2.22 2.21-2.22a2.212 2.212 0 0 1 2.21 2.22Z" fill="#125598"></path></g><defs><linearGradient id="time_svg__c" x1="33.834" y1="52.083" x2="94.251" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="time_svg__d" x1="35.755" y1="48.967" x2="77.267" y2="82.04" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#DD4100"></stop></linearGradient><clipPath id="time_svg__a"><rect x="0.5" width="100" height="100" rx="8" fill="#fff"></rect></clipPath></defs></svg></span>
                                    <div className="text-xl leading-7 text-black font-semibold my-2">Thời gian linh hoạt</div>
                                    <p className="text-base leading-6 text-black font-medium">Dễ d&agrave;ng l&agrave;m việc v&agrave;o bất kỳ thời gian n&agrave;o m&agrave; bạn mong muốn, không gò b&oacute; v&agrave; cố định.</p>
                                </div>
                            </div>
                            <div className="flow-root rounded-lg px-2 lg:px-6 pb-7">
                                <div className="mt-6">
                                    <span className="inline-flex items-center justify-center"><svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#trust_svg__a)"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="trust_svg__b" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100" ><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#0085BC"></path></mask><g mask="url(#trust_svg__b)"><path d="M71.334 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z" fill="url(#trust_svg__c)"></path></g><path d="M80.27 26.4a1.104 1.104 0 0 0-.984-.984C70.5 24.51 63.34 21.58 58.88 19.282c-4.848-2.498-7.646-4.813-7.673-4.835a1.104 1.104 0 0 0-1.416 0c-.11.092-11.212 9.23-28.078 10.97-.52.053-.93.464-.984.984-.048.464-1.136 11.513 1.88 24.38 1.779 7.59 4.628 14.214 8.467 19.686 4.824 6.874 11.221 11.932 19.015 15.032a1.104 1.104 0 0 0 .816 0c7.793-3.1 14.19-8.157 19.014-15.032 3.84-5.472 6.688-12.095 8.468-19.685 3.016-12.868 1.928-23.917 1.88-24.381Z" fill="url(#trust_svg__d)"></path><path d="M80.27 26.4a1.104 1.104 0 0 0-.985-.984 54.083 54.083 0 0 1-2.666-.343c.202 3.873.315 12.984-2.081 23.209-1.837 7.836-4.778 14.673-8.742 20.322-4.886 6.965-11.339 12.121-19.18 15.336a43.977 43.977 0 0 0 3.475 1.56 1.104 1.104 0 0 0 .816 0C58.7 82.4 65.098 77.34 69.92 70.466c3.84-5.472 6.689-12.095 8.468-19.685 3.016-12.868 1.928-23.917 1.88-24.381Z" fill="#FE5F00"></path><path d="M73.439 31.968a1.104 1.104 0 0 0-.985-.985C59.72 29.67 51.29 22.756 51.207 22.687a1.104 1.104 0 0 0-1.416 0c-.083.07-8.48 6.979-21.248 8.296-.52.054-.93.465-.984.985-.037.355-.87 8.815 1.438 18.66 1.363 5.815 3.547 10.89 6.49 15.087 3.705 5.28 8.618 9.164 14.604 11.545a1.104 1.104 0 0 0 .815 0c5.986-2.381 10.9-6.266 14.603-11.545 2.945-4.197 5.129-9.273 6.491-15.087 2.308-9.845 1.475-18.305 1.439-18.66Z" fill="#FFF2EA"></path><path d="M47.306 59.352a2.97 2.97 0 0 1-2.1-.87l-6.754-6.755a2.97 2.97 0 0 1 4.2-4.2l4.654 4.655 11.41-11.41a2.97 2.97 0 0 1 4.2 4.2l-13.51 13.51a2.97 2.97 0 0 1-2.1.87Z" fill="#FE5F00"></path></g><defs><linearGradient id="trust_svg__c" x1="33.834" y1="52.083" x2="94.251" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="trust_svg__d" x1="35.239" y1="43.38" x2="83.592" y2="75.892" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><clipPath id="trust_svg__a"><rect x="0.5" width="100" height="100" rx="8" fill="#fff"></rect></clipPath></defs></svg></span>
                                    <div className="text-xl leading-7 text-black font-semibold my-2">Tin cậy tuyệt đối</div>
                                    <p className="text-base leading-6 text-black font-medium">Giao h&agrave;ng ứng tiền với những khách h&agrave;ng đ&atilde; được xác thực hồ sơ. Delivery Express cam kết bảo vệ quyền lợi t&agrave;i xế.</p>
                                </div>
                            </div>
                            <div className="flow-root rounded-lg px-2 lg:px-6 pb-7">
                                <div className="mt-6">
                                    <span className="inline-flex items-center justify-center"><svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#trust_svg__a)"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="trust_svg__b" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100" ><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#0085BC"></path></mask><g mask="url(#trust_svg__b)"><path d="M71.334 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z" fill="url(#trust_svg__c)"></path></g><path d="M80.27 26.4a1.104 1.104 0 0 0-.984-.984C70.5 24.51 63.34 21.58 58.88 19.282c-4.848-2.498-7.646-4.813-7.673-4.835a1.104 1.104 0 0 0-1.416 0c-.11.092-11.212 9.23-28.078 10.97-.52.053-.93.464-.984.984-.048.464-1.136 11.513 1.88 24.38 1.779 7.59 4.628 14.214 8.467 19.686 4.824 6.874 11.221 11.932 19.015 15.032a1.104 1.104 0 0 0 .816 0c7.793-3.1 14.19-8.157 19.014-15.032 3.84-5.472 6.688-12.095 8.468-19.685 3.016-12.868 1.928-23.917 1.88-24.381Z" fill="url(#trust_svg__d)"></path><path d="M80.27 26.4a1.104 1.104 0 0 0-.985-.984 54.083 54.083 0 0 1-2.666-.343c.202 3.873.315 12.984-2.081 23.209-1.837 7.836-4.778 14.673-8.742 20.322-4.886 6.965-11.339 12.121-19.18 15.336a43.977 43.977 0 0 0 3.475 1.56 1.104 1.104 0 0 0 .816 0C58.7 82.4 65.098 77.34 69.92 70.466c3.84-5.472 6.689-12.095 8.468-19.685 3.016-12.868 1.928-23.917 1.88-24.381Z" fill="#FE5F00"></path><path d="M73.439 31.968a1.104 1.104 0 0 0-.985-.985C59.72 29.67 51.29 22.756 51.207 22.687a1.104 1.104 0 0 0-1.416 0c-.083.07-8.48 6.979-21.248 8.296-.52.054-.93.465-.984.985-.037.355-.87 8.815 1.438 18.66 1.363 5.815 3.547 10.89 6.49 15.087 3.705 5.28 8.618 9.164 14.604 11.545a1.104 1.104 0 0 0 .815 0c5.986-2.381 10.9-6.266 14.603-11.545 2.945-4.197 5.129-9.273 6.491-15.087 2.308-9.845 1.475-18.305 1.439-18.66Z" fill="#FFF2EA"></path><path d="M47.306 59.352a2.97 2.97 0 0 1-2.1-.87l-6.754-6.755a2.97 2.97 0 0 1 4.2-4.2l4.654 4.655 11.41-11.41a2.97 2.97 0 0 1 4.2 4.2l-13.51 13.51a2.97 2.97 0 0 1-2.1.87Z" fill="#FE5F00"></path></g><defs><linearGradient id="trust_svg__c" x1="33.834" y1="52.083" x2="94.251" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="trust_svg__d" x1="35.239" y1="43.38" x2="83.592" y2="75.892" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><clipPath id="trust_svg__a"><rect x="0.5" width="100" height="100" rx="8" fill="#fff"></rect></clipPath></defs></svg></span>
                                    <div className="text-xl leading-7 text-black font-semibold my-2">Thu nhập hấp dẫn</div>
                                    <p className="text-base leading-6 text-black font-medium">Nhanh ch&oacute;ng nhận được tiền cước ngay khi ho&agrave;n th&agrave;nh đơn h&agrave;ng, lương thưởng hấp dẫn.</p>
                                </div>
                            </div>
                            <div className="flow-root rounded-lg px-2 lg:px-6 pb-7">
                                <div className="mt-6">
                                    <span className="inline-flex items-center justify-center"><svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#easy_svg__a)"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="easy_svg__b" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#0085BC"></path></mask><g mask="url(#easy_svg__b)"><path d="M71.334 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z" fill="url(#easy_svg__c)"></path></g><g clipPath="url(#easy_svg__d)"><path d="M31.268 21.225h36.294c2.002 0 3.654 1.619 3.755 3.683l2.68 54.305c.08 1.615-1.153 2.977-2.72 3.007L29.68 83c-1.472.027-2.68-1.197-2.68-2.716V25.629c0-2.432 1.91-4.404 4.268-4.404Z" fill="url(#easy_svg__e)"></path><path d="M31.379 20.784c4.956.694 22 2.839 36.09 1.723.643-.052 1.201.451 1.235 1.115l2.81 54.547c.038.748-.515 1.388-1.24 1.432-5.927.362-30.334 1.761-39.04.82-.529-.057-.932-.517-.935-1.067l-.326-57.294c-.005-.778.658-1.38 1.406-1.276Z" fill="#FA8C16"></path><path d="M31.91 22.2c4.77.666 21.171 2.731 34.732 1.657.618-.049 1.155.435 1.188 1.074l2.703 52.493c.037.72-.495 1.335-1.192 1.378-5.703.348-29.192 1.694-37.57.789-.51-.055-.896-.498-.9-1.027l-.314-55.137c-.005-.748.634-1.329 1.353-1.228Z" fill="#fff"></path><path d="m34.971 27.474.507 11.254c.017.375.31.672.673.683 2.02.059 8.313.217 11.866.026a.788.788 0 0 0 .733-.773c.068-2.11.216-8.253-.25-10.82a.883.883 0 0 0-.83-.735l-11.936-.43a.75.75 0 0 0-.763.795Z" fill="#FFD5BC"></path><path d="M41.84 33.917c1.295 0 2.344-1.083 2.344-2.419s-1.05-2.42-2.344-2.42c-1.294 0-2.344 1.084-2.344 2.42 0 1.336 1.05 2.42 2.344 2.42ZM38.28 38.6h7.47c.457 0 .732-.521.485-.92-.634-1.024-1.962-2.529-4.26-2.461-2.215.066-3.529 1.425-4.189 2.4-.28.414.006.982.495.982Z" fill="#FF7F32"></path><path d="M65.052 28.454a.205.205 0 0 0 .203-.215l-.01-.325a.225.225 0 0 0-.215-.219l-13.522-.249c-.115-.002-.178.088-.14.2l.207.604a.318.318 0 0 0 .278.203h13.2v.001ZM51.508 29.544c-.115-.002-.178.088-.14.2l.207.605a.317.317 0 0 0 .278.203h13.2a.205.205 0 0 0 .202-.216l-.01-.324a.225.225 0 0 0-.215-.22l-13.522-.248ZM51.508 31.673c-.115-.002-.178.088-.14.2l.207.604a.317.317 0 0 0 .278.203h13.2a.205.205 0 0 0 .202-.215l-.01-.324a.225.225 0 0 0-.215-.22l-13.522-.248ZM66.325 42.945a.197.197 0 0 0 .195-.215l-.02-.325a.231.231 0 0 0-.223-.217l-31.099-.253c-.115 0-.15.075-.079.167l.52.675a.486.486 0 0 0 .34.168h30.366ZM35.176 44.034c-.114-.001-.15.074-.079.167l.52.674a.486.486 0 0 0 .34.169h30.367a.197.197 0 0 0 .195-.215l-.02-.325a.231.231 0 0 0-.223-.217l-31.1-.253ZM35.255 47.538c.738-.058 2.118-.085 2.878-.096a.693.693 0 0 1 .68.543c.147.628.35 1.718.324 2.873a.62.62 0 0 1-.617.617l-2.805-.03a.682.682 0 0 1-.664-.631l-.246-2.723a.502.502 0 0 1 .45-.553ZM40.227 48.647c-.115-.005-.195.087-.178.204l.132.91a.253.253 0 0 0 .24.212h7.245a.21.21 0 0 0 .206-.215l-.007-.566a.228.228 0 0 0-.211-.224l-7.427-.32ZM50.535 47.538c.737-.058 2.118-.085 2.878-.096a.693.693 0 0 1 .68.543c.146.628.349 1.718.323 2.873a.62.62 0 0 1-.617.617l-2.805-.03a.682.682 0 0 1-.663-.631l-.247-2.723a.503.503 0 0 1 .45-.553ZM55.506 48.647c-.115-.005-.195.087-.178.204l.133.91a.253.253 0 0 0 .24.212h7.244a.21.21 0 0 0 .206-.215l-.006-.566a.228.228 0 0 0-.212-.224l-7.427-.32ZM35.201 57.527c.095.455.42.771.792.767l30.246-.327c.342-.003.616-.361.609-.795-.008-.421-.279-.76-.611-.762l-30.248-.175c-.533-.003-.924.638-.788 1.292ZM35.201 62.674c.095.455.42.771.792.767l30.246-.327c.342-.003.616-.361.609-.795-.008-.421-.279-.76-.611-.762l-30.248-.175c-.533-.003-.924.638-.788 1.292ZM35.201 67.821c.095.455.42.771.792.767l30.246-.327c.342-.003.616-.361.609-.795-.008-.422-.279-.76-.611-.762l-30.248-.175c-.533-.003-.924.637-.788 1.292ZM35.201 72.969c.095.454.42.77.792.766l30.246-.327c.342-.003.616-.36.609-.795-.008-.421-.279-.76-.611-.762l-30.248-.174c-.533-.004-.924.637-.788 1.291Z" fill="#125598"></path><path d="M51.666 13.82c-1.31-.94-2.45-.922-3.253-.678-.732.223-1.206.953-1.137 1.737l.346 3.898 4.118.377s2.497-3.488-.074-5.334Zm-1.81 3.145c-.568 0-1.028-.475-1.028-1.06 0-.585.46-1.06 1.027-1.06.568 0 1.027.475 1.027 1.06 0 .586-.46 1.06-1.027 1.06Z" fill="#FE5F00"></path><path d="M42.002 21.296v-1.96c0-.676.543-1.218 1.198-1.194l13.094.462c.58.02 1.052.494 1.087 1.093l.11 1.883-15.489-.284Z" fill="#FE5F00"></path><path d="M37.9 20.579h22.895c.823 0 1.528.61 1.668 1.448l.02.115c.153.917-.53 1.756-1.433 1.756H37.56c-.54 0-.97-.466-.944-1.022l.051-1.085c.032-.678.574-1.212 1.232-1.212Z" fill="#FA8C16"></path></g></g><defs><linearGradient id="easy_svg__c" x1="33.834" y1="52.083" x2="94.251" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="easy_svg__e" x1="38.546" y1="46.484" x2="78.679" y2="70.912" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#DD4100"></stop></linearGradient><clipPath id="easy_svg__a"><rect x="0.5" width="100" height="100" rx="8" fill="#fff"></rect></clipPath><clipPath id="easy_svg__d"><path fill="#fff" transform="translate(27 13)" d="M0 0h47v70H0z"></path></clipPath></defs></svg></span>
                                    <div className="text-xl leading-7 text-black font-semibold my-2">Đăng k&yacute; dễ d&agrave;ng</div>
                                    <p className="text-base leading-6 text-black font-medium">Sau khi đăng k&yacute;, Delivery Express sẽ li&ecirc;n lạc xác nhận v&agrave; hướng dẫn thủ tục tham gia đ&agrave;o tạo, k&iacute;ch hoạt t&agrave;i khoản.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white my-20 w-full">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className='font-bold'>D&agrave;nh cho đối tác t&agrave;i xế của Delivery Express</h2>
                    <div className="my-5">Chương tr&igrave;nh thưởng, ưu đ&atilde;i v&agrave; dịch vụ</div>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="flow-root bg-gray-50 hover:bg-blue-200 rounded-lg px-6 py-8">
                                <div className="h-full flex flex-col justify-between">
                                    <div>
                                        <h4>Ưu đ&atilde;i</h4>
                                        <div className="my-5 mt-5 mb-5">------------------------------</div>
                                        <p className="paragraph_level2__ApB2y">Tặng bạn vô v&agrave;n ưu đ&atilde;i đa dạng về ăn uống, sửa chữa xe máy/xe tải, khám-chữa bệnh,...cực hấp dẫn khi trở th&agrave;nh Đối tác của Delivery Express.</p>
                                    </div>
                                    <div className="my-3">
                                        <Link href="./detailNews" target="_blank" rel="noopener noreferrer">
                                            <button className="inline-block cursor-pointer font-semibold whitespace-no-wrap text-center text-base text-blue-900">
                                                <span className="mr-3">Khám phá th&ecirc;m</span>
                                                <svg className='inline-block' width="20" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.751.351a1.2 1.2 0 0 1 1.697 0l4.8 4.8a1.2 1.2 0 0 1 0 1.698l-4.8 4.8a1.2 1.2 0 1 1-1.697-1.698L15.503 7.2H1.6a1.2 1.2 0 0 1 0-2.4h13.903L12.75 2.049a1.2 1.2 0 0 1 0-1.698Z" fill="#0E4174"></path></svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flow-root bg-gray-50 hover:bg-blue-200 rounded-lg px-6 py-8">
                                <div className="h-full flex flex-col justify-between">
                                    <div>
                                        <h4>Ch&iacute;nh sách thưởng</h4>
                                        <div className="my-5 mt-5 mb-5">------------------------------</div>
                                        <p className="text-left text-sm leading-5 text-black">Cơ hội gia tăng thu nhập mỗi ng&agrave;y với h&agrave;ng ng&agrave;n chương tr&igrave;nh thưởng hấp dẫn của Delivery Express. Tại sao không?</p>
                                    </div>
                                    <div className="my-3">
                                        <Link href="./detailNews" target="_blank" rel="noopener noreferrer">
                                            <button className="inline-block cursor-pointer font-semibold whitespace-no-wrap text-center text-base text-blue-900">
                                                <span className="mr-3">Khám phá th&ecirc;m</span>
                                                <svg className='inline-block' width="20" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.751.351a1.2 1.2 0 0 1 1.697 0l4.8 4.8a1.2 1.2 0 0 1 0 1.698l-4.8 4.8a1.2 1.2 0 1 1-1.697-1.698L15.503 7.2H1.6a1.2 1.2 0 0 1 0-2.4h13.903L12.75 2.049a1.2 1.2 0 0 1 0-1.698Z" fill="#0E4174"></path></svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flow-root bg-gray-50 hover:bg-blue-200 rounded-lg px-6 py-8">
                                <div className="h-full flex flex-col justify-between">
                                    <div>
                                        <h4>Bảo hiểm, t&agrave;i ch&iacute;nh</h4>
                                        <div className="my-5 mt-5 mb-5">------------------------------</div>
                                        <p className="paragraph_level2__ApB2y">Vững chắc tay lái, an tâm hơn khi giao h&agrave;ng với ExpressCare.</p>
                                    </div>
                                    <div className="my-3">
                                        <Link href="./detailNews" target="_blank" rel="noopener noreferrer">
                                            <button className="inline-block cursor-pointer font-semibold whitespace-no-wrap text-center text-base text-blue-900">
                                                <span className="mr-3">Khám phá th&ecirc;m</span>
                                                <svg className='inline-block' width="20" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.751.351a1.2 1.2 0 0 1 1.697 0l4.8 4.8a1.2 1.2 0 0 1 0 1.698l-4.8 4.8a1.2 1.2 0 1 1-1.697-1.698L15.503 7.2H1.6a1.2 1.2 0 0 1 0-2.4h13.903L12.75 2.049a1.2 1.2 0 0 1 0-1.698Z" fill="#0E4174"></path></svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="pt-5">
                    <div className="px-6 lg:px-0">
                        <div className="grid grid-cols-1 md:gap-8 lg:grid-cols-2 mx-auto lg:flex max-w-7xl">
                            <div className="py-3 md:py-16 pl-10">
                                <h2 className="max-w-xl font-bold ">Gia nhập cộng đồng Delivery Express ngay hôm nay</h2>
                                <div className="text-lg leading-7 text-black mt-5 mb-5 my-5">Thu nhập l&ecirc;n đến 12-15 triệu / tháng c&ugrave;ng với Delivery Express</div>
                                <div className="my-5 sm:flex sm:justify-center lg:justify-start items-center text-center">
                                    <Link className="bg-transparent" href="./detailNews" target="_blank" rel="noopener noreferrer"><button className="button_primary w-48 p-2 border border-transparent text-center text-base leading-6 font-semibold my-3">Cộng đồng Delivery Express</button></Link>
                                    <div className="mx-5 my-6 md:my-0">
                                        <Link href="./detailNews" target="_blank" rel="noopener noreferrer">
                                            <button className="inline-block cursor-pointer font-semibold whitespace-no-wrap text-center text-base text-blue-900">
                                                <span className="mr-3">Đăng ký ngay</span>
                                                <svg className='inline-block' width="20" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.751.351a1.2 1.2 0 0 1 1.697 0l4.8 4.8a1.2 1.2 0 0 1 0 1.698l-4.8 4.8a1.2 1.2 0 1 1-1.697-1.698L15.503 7.2H1.6a1.2 1.2 0 0 1 0-2.4h13.903L12.75 2.049a1.2 1.2 0 0 1 0-1.698Z" fill="#0E4174"></path></svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Image alt="" src={community}
                                className="inset-0 w-full h-full object-cover"
                                width={660}
                                height={440}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-20 md:my-28">
                <div className="px-6 lg:px-0 mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl">
                    <div className="flex items-center justify-between">
                        <h2 className='font-bold text-4xl'>Tin tức mới nhất</h2>
                        <div className="hidden md:block">
                            <Link className="whitespace-nowrap inline-flex items-center justify-center px-4 text-base font-semibold" href="./detailNews">
                                <div className="mr-3">
                                    <Link href="./detailNews" target="_blank" rel="noopener noreferrer">
                                        <button className="inline-block cursor-pointer font-semibold whitespace-no-wrap text-center text-base text-orange-500">
                                            <span className="mr-3">Xem tất cả</span>
                                            <svg className='inline-block' width="20" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.751.351a1.2 1.2 0 0 1 1.697 0l4.8 4.8a1.2 1.2 0 0 1 0 1.698l-4.8 4.8a1.2 1.2 0 1 1-1.697-1.698L15.503 7.2H1.6a1.2 1.2 0 0 1 0-2.4h13.903L12.75 2.049a1.2 1.2 0 0 1 0-1.698Z" fill="#FE5F00"></path></svg>
                                        </button>
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10 max-w-md grid lg:gap-8 gap-6 sm:max-w-lg lg:grid-cols-3 lg:max-w-7xl">
                        <div>
                            <Image alt="" src={blog}
                                width={405}
                                height={232}
                                objectFit="cover"
                            />
                            <div className="false">
                                <div className="mt-4">31/05/2022</div>
                                <div className="text-xl leading-7 text-black font-bold mb-1 mt-1">NHẬN HỖ TRỢ L&Ecirc;N TỚI 500K KHI GIỚI THIỆU T&Agrave;I XẾ XE BA GáC, XE TẢI.</div>
                            </div>
                        </div>
                        <div>
                            <Image alt="" src={blog}
                                width={405}
                                height={232}
                                objectFit="cover"
                            />
                            <div className="false">
                                <div className="mt-4">30/05/2022</div>
                                <div className="text-xl leading-7 text-black font-bold mb-1 mt-1">T&Iacute;NH NĂNG MUA CHUNG GIá RẺ, MUA VỚI GIÁ 60%</div>
                            </div>
                        </div>
                        <div>
                            <Image alt="" src={blog}
                                width={405}
                                height={232}
                                objectFit="cover"
                            />
                            <div className="false">
                                <div className="mt-4">23/05/2022</div>
                                <div className="text-xl leading-7 text-black font-bold mb-1 mt-1">BỮA TRƯA VUI VẺ &ndash; NHẬN DEAL 0 ĐỒNG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cpl-0 pr-0">
                <div className="mt-24 mb-24">
                    <h2 className="text-left md:text-center">Những câu hỏi thường gặp</h2>
                    <div className="md:w-4/5 mx-auto">
                        <div className="md:px-10 md:py-5">
                            <div className="mt-5 mb-5 pb-5">
                                <div className="flex items-center md:justify-start">
                                    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 md:mr-6" ><path fillRule="evenodd" clipRule="evenodd" d="M15 8a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H9a1 1 0 1 1 0-2h5V9a1 1 0 0 1 1-1Z" fill="#111827"></path><rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#000"></rect></svg>
                                    <div className="text-lg leading-7 text-black font-bold text-left">L&agrave;m thế n&agrave;o để đăng k&yacute; trở th&agrave;nh t&agrave;i xế Delivery Express? Cần chuẩn bị những g&igrave; để đăng k&yacute;?</div>
                                </div>
                                <div className="mt-5 mb-5 pb-5 border-b">
                                    <div id="headlessui-disclosure-panel-453" className="px-10 py-4 text-left lg:px-12">
                                        <p className="text-base leading-6 text-black font-medium">Đăng k&yacute; Đối tác xe máy:&nbsp;<Link className='text-orange-500' href="#" target="_blank" rel="noreferrer">Hướng dẫn</Link>
                                            <br />
                                            Đăng k&yacute; Đối tác xe tải:&nbsp;<Link className='text-orange-500' href="#" target="_blank" rel="noreferrer">Hướng dẫn</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 mb-5 pb-5 border-b">
                                <div className="flex items-center md:justify-start">
                                    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 md:mr-5" ><path fillRule="evenodd" clipRule="evenodd" d="M15 8a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H9a1 1 0 1 1 0-2h5V9a1 1 0 0 1 1-1Z" fill="#111827"></path><rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#000"></rect></svg>
                                    <div className="text-lg leading-7 text-black font-bold text-left">Thu nhập được t&iacute;nh ra sao?</div>
                                </div>
                            </div>
                            <div className="mt-5 mb-5 pb-5 border-b">
                                <div className="flex items-center md:justify-start">
                                    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 md:mr-6" ><path fillRule="evenodd" clipRule="evenodd" d="M15 8a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H9a1 1 0 1 1 0-2h5V9a1 1 0 0 1 1-1Z" fill="#111827"></path><rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#000"></rect></svg>
                                    <div className="text-lg leading-7 text-black font-bold text-left">L&agrave;m sao để biết tôi đang được áp dụng những chương tr&igrave;nh thưởng n&agrave;o, c&oacute; đạt thưởng hay không, khi n&agrave;o th&igrave; tiền thưởng được cộng?</div>
                                </div>
                            </div>
                            <div className="mt-5 mb-5 pb-5 border-b">
                                <div className="flex items-center md:justify-start">
                                    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 md:mr-5" ><path fillRule="evenodd" clipRule="evenodd" d="M15 8a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H9a1 1 0 1 1 0-2h5V9a1 1 0 0 1 1-1Z" fill="#111827"></path><rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#000"></rect></svg>
                                    <div className="text-lg leading-7 text-black font-bold text-left">Với đơn h&agrave;ng thất bại tôi cần l&agrave;m g&igrave;?</div>
                                </div>
                            </div>
                            <div className="mt-5 mb-5 pb-5">
                                <div className="flex items-center md:justify-start">
                                    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 md:mr-5" ><path fillRule="evenodd" clipRule="evenodd" d="M15 8a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H9a1 1 0 1 1 0-2h5V9a1 1 0 0 1 1-1Z" fill="#111827"></path><rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#000"></rect></svg>
                                    <div className="text-lg leading-7 text-black font-bold text-left">Tôi bị khoá t&agrave;i khoản th&igrave; l&agrave;m sao?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2 hidden md:block">&nbsp;</div>
        </div >
    )
}


export default Customer

Customer.getLayout = function getLayout(page: any) {
    return (
        <LayoutDefault >{page}</LayoutDefault>
    )
}
