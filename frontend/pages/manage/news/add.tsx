import LayoutManage from '../../../layouts/manage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link'
import useAxios from '../../../library/useAxios';
import { useFormik } from 'formik';
import { NewsSchema } from '../../../components/supports/Validation';
import { News } from '../../../shared/news.interface';

const AddNews = () => {

    const [formData, setFormData] = useState<News>()
    const [news, setNews] = useState({
        title: "",
        content: "",
        status: true,
        image: ""
    })
    const onInputChange = (e: any) => { setNews({ ...news, [e.target.name]: e.target.value }) };
    const { response, error, loading, fetchData } = useAxios();

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            status: "true",
            image:""
        },
        validationSchema: NewsSchema,
        onSubmit: (values) => {
            fetchData('news', { method: 'POST', data: formData }).then((res:any) =>{
                if(res?.status < 300){
                    toast.success("Thêm thành công")
                }
            }).catch(err => {
                        console.log(err)
                    })
        }
    });

    return (
        <>
        <div className='overflow-auto bg-gray-100 pl-4'>
            <form onSubmit={formik.handleSubmit}>
                <div className='bg-gray-100 space-y-5'>
                    <div className='px-10 py-5 bg-white rounded-md'>
                        <h4 className='text-gray-900 py-3 font-medium'>
                            Thêm tin tức mới
                        </h4>
                        <div className='grid grid-cols-2 gap-10 w-full'>
                            <div className='flex flex-col justify-start'>
                                <span className='block text-sm font-bold text-gray-700 leading-6'>
                                    Tiêu đề
                                </span>
                                <div className='flex-grow flex flex-col justify-center'>
                                    <input
                                        className='shadow-sm focus:ring-orange-400 focus:border-orange-400 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-3 h-8'
                                        placeholder='Nhập tiêu đề tin tức'
                                        type="text"
                                        id="title"
                                        name="title"
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                    />
                                    {formik.errors.title && (
                                        <p className='text-danger py-2'>{formik.errors.title}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="about" className="block text-sm font-bold text-gray-700 leading-6"> Nội dung </label>
                            <div className="mt-1">
                                <textarea
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-3 h-80"
                                    placeholder="Nội dung tin tức"
                                    id="content"
                                    name="content"
                                    onChange={formik.handleChange}
                                    value={formik.values.content}
                                >
                                </textarea>
                                {formik.errors.content && (
                                    <p className='text-danger py-2'>{formik.errors.content}</p>
                                )}
                            </div>
                        </div>
                        <div className='flex flex-row mt-5'>
                            <span className='flex'>
                                <input
                                    id="status"
                                    name="status"
                                    type='checkbox'
                                    className='w-5 h-5 relative rounded-full'
                                    checked
                                ></input>
                            </span>
                            <span className='text-gray-600 leading-8 inline-block pl-3'>
                                Hoạt động
                            </span>
                        </div>
                        <div className='my-5'>
                            <label className="block text-sm font-medium text-gray-700"> Thêm ảnh </label>
                            <input
                                id="image"
                                name="image"
                                onChange={formik.handleChange}
                                value={formik.values.image}
                                type="file"
                            />
                            {formik.errors.image && (
                                <p className='text-danger py-2'>{formik.errors.image}</p>
                            )}
                            {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div> */}
                        </div>
                    </div>
                </div>
                <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                    <div className='mr-4'>
                        <Link href={`./`}>
                            <button className='bg-danger text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mx-5 px-10 py-5'>
                                Quay lại
                            </button>
                        </Link>
                    </div>
                    <div>
                        <button className=' bg-warning text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle px-10 py-5'
                            // onClick={clearAll}
                        >
                            Xóa toàn bộ
                        </button>
                    </div>
                    <div>
                        <button className='bg-blue-600 text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mx-5 px-10 py-5'>
                            Thêm và tiếp tục
                        </button>
                    </div>
                    <div>
                        <button
                            className='bg-primary text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mr-10 px-10 py-5'
                            type='submit'
                        >
                            Thêm
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddNews

AddNews.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}
