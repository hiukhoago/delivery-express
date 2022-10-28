import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import LayoutDefault from '../layouts/default'
import bannerlienhe from '../assets/images/contact/bannerlienhe.png'

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      title: "",
      content: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập họ tên").min(4,"Họ và tên phải đủ 4 ký tự"),
      phone: Yup.string().required("Vui lòng nhập số điện thoại").matches(/^[0-9\-\+]{9,15}$/,"Nhập đúng định dạng số điện thoại"),
      email: Yup.string().required("Vui lòng nhập email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,"Nhập đúng định dạng email"),
      address: Yup.string().required("Vui lòng nhập địa chỉ"),
      title: Yup.string().required("Vui lòng nhập tiêu đề"),
      content: Yup.string().required("Vui lòng nhập nội dung"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  // console.log(formik.errors.name);
  return (
    <div>
      <div className=''>
        <div className='-mt-4 text-center bg-gray-100'>
          <Image alt="" src={bannerlienhe} />
        </div>
        <div className='mx-auto w-2/3'>
          <div className=' text-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6320207712683!2d106.67401781531613!3d10.762817062386516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee200fd5ef5%3A0x6f5f7227024a4186!2zQ8O0bmcgVHkgQ3AgVuG6rW4gVOG6o2kgRHUgTOG7i2NoIFBoxrDGoW5nIFRyYW5n!5e0!3m2!1sen!2sus!4v1455441381592" width="1000" height="300"></iframe>
          </div>

          <div className='flex gap-2 mt-5'>
            <div className='leading-10'>
              <div className='flex gap-2 justify-star'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <div className='pl-3 font-bold text-base leading-6'>Trụ sở chính</div>
              </div>
              <div className='mt-0 mb-2'>
                Công ty Dịch vụ chuyển phát nhanh Delivery Express DE 
              </div>
              <div className='pl-1 leading-12 flex gap-2 justify-start text-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className=''>65 Huỳnh Thúc Kháng, P.Bến Nghé, Q.1, Tp.HCM</div>
              </div>
              <div className='pl-1 leading-12 flex gap-2 justify-start text-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>0355501613</div>
              </div>
              <div className='pl-1 leading-12 flex gap-2 justify-start text-primary '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
                <div>hiukhoago@gmail.com</div>
              </div>
              <div className='pl-1 leading-12 flex gap-2 justify-start text-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>deliveryexpress.com</div>
              </div>
              <div className='flex gap-2 justify-center items-start mt-5'>
                <div >Kết nối với chúng tôi: </div>
                <div className='flex gap-2 justify-start text-primary'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>

                </div>
                <div className='flex gap-2 justify-start text-primary'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>

                </div>
              </div>
            </div>
            <div className='w-1/2 ml-20'>
              <div className='flex gap-2 justify-start'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className='pl-2 font-bold text-base leading-6'>Gởi thắc mắc - yêu cầu</div>
              </div>
              <div className=''>
                <form onSubmit={formik.handleSubmit}>
                  <div className='flex gap-2 justify-between'>
                    <div className='w-1/2'>
                      <label className='font-bold'>*Họ và tên</label>
                      <input
                        className='border rounded w-72'
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder='Nhập họ và tên'
                      />
                      {formik.errors.name && (
                        <p className='text-danger p-1'>{formik.errors.name}</p>
                      )}
                    </div>
                    <div className='w-1/2'>
                      <label className='font-bold'>*Điện thoại</label>
                      <input
                        className='border rounded w-72'
                        type="number"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        placeholder='Nhập số điện thoại'
                      />
                      {formik.errors.phone && (
                        <p className='text-danger p-1'>{formik.errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className=' flex gap-2 justify-between'>
                    <div className='w-1/2'>
                      <label className='font-bold'>*Email</label>
                      <input
                        className='border rounded w-72'
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder='Nhập email'
                      />
                      {formik.errors.email && (
                        <p className='text-danger p-1'>{formik.errors.email}</p>
                      )}
                    </div>
                    <div className='w-1/2'>
                      <label className='font-bold'>*Địa chỉ</label>
                      <input
                        className='border rounded w-72'
                        type="text"
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        placeholder='Nhập địa chỉ'
                      />
                      {formik.errors.address && (
                        <p className='text-danger p-1'>{formik.errors.address}</p>
                      )}
                    </div>
                  </div>
                  <label className='font-bold'>*Tiêu đề</label>
                  <input
                    className='border rounded w-full'
                    type="text"
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    placeholder='Nhập tiêu đề'
                  />
                  {formik.errors.title && (
                        <p className='text-danger p-1'>{formik.errors.title}</p>
                      )}
                  <label className='font-bold'>*Nội dung</label>
                  <textarea
                    className=' border rounded w-full'
                    id="content"
                    name="content"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    placeholder='Nhập nội dung'
                  />
                  {formik.errors.content && (
                        <p className='text-danger p-1'>{formik.errors.content}</p>
                      )}
                  <button className='bg-primary text-white w-32 p-2 cursor-pointer rounded-md border border-transparent text-center text-base leading-6 font-semibold mt-4 mb-4' type='submit'>
                    Gửi nội dung
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Contact

Contact.getLayout = function getLayout(page: any) {
  return (
    <LayoutDefault >{page}</LayoutDefault>
  )
}

