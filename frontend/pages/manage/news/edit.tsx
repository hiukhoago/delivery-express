import LayoutManage from '../../../layouts/manage'
import Axios from 'axios'
import useAxios from '../../../library/useAxios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { withRouter } from "next/router"
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';


const EditNews = () => {
    const router = useRouter();
    const { query } = useRouter();

    const id = query.id;
    const title = query.title;
    const content = query.content;
    const status = query.status;
    const image = query.image;
    const { response, error, loading, fetchData } = useAxios();

    const [newtitle, setNewTitle] = useState("");
    const [newcontent, setNewContent] = useState("");
    const [newstatus, setNewStatus] = useState(true);
    const [newimage, setNewImage] = useState("newImage.png");

    const updateNews = async () => {
        const id = query.id;
        await fetchData(`/news/${id}`, { method: 'PUT', data: {
            id: id,
            title: newtitle,
            content: newcontent,
            status: newstatus,
            image: newimage,}
        })
    }
    const clearAll = () => {
        setNewTitle('');
        setNewContent('');
        setNewStatus(true);
    }
    return (
        <div className='overflow-auto bg-gray-100 pl-4'>
            <div className='bg-gray-100 space-y-5'>
                <div className='px-10 py-5 bg-white rounded-md'>
                    <h4 className='text-gray-900 py-3 font-medium'>
                        Chỉnh sửa tin tức
                    </h4>
                    <div>
                        <div>
                            <form>
                                <div className='grid grid-cols-2 gap-10 w-full'>
                                    <div className='flex flex-col justify-start'>
                                        <span className='block text-sm font-bold text-gray-700 leading-6'>
                                            Tiêu đề
                                        </span>
                                        <span className='flex-grow flex flex-col justify-center'>
                                            <span>
                                                <span className='rounded flex leading-none border'>
                                                    <input
                                                        className='rounded text-sm text-gray-800 h-8 w-full px-3 min-w-2xl'
                                                        placeholder='Nhập tiêu đề tin tức'
                                                        type="text"
                                                        onChange={(event) => { setNewTitle(event.target.value) }}
                                                        value={title}

                                                    />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <label htmlFor="about" className="block text-sm font-bold text-gray-700 leading-6"> Nội dung </label>
                                    <div className="mt-1">
                                        <textarea
                                            name="about"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-3 h-80"
                                            placeholder="Nội dung tin tức"
                                            onChange={(event) => { setNewContent(event.target.value) }}
                                            value={content}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className='flex flex-row mt-5'>
                                    <span className='flex'>
                                        <input
                                            type='checkbox'
                                            className='w-5 h-5 relative rounded-full'
                                            value={status}
                                        ></input>
                                    </span>
                                    <span className='text-gray-600 leading-8 inline-block pl-3'>
                                        Hoạt động
                                    </span>
                                </div>
                                <div className='my-5'>
                                    <label className="block text-sm font-medium text-gray-700"> Thêm ảnh </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                <div className='mr-4'>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className='bg-danger text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mr-10 w-24 py-5'
                    >
                        Trở lại
                    </button>
                </div>
                <div>
                    <button 
                    className='bg-warning text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center cursor-pointer box-border select-none align-middle mr-10 px-10 py-5'
                    onClick={clearAll}
                    >
                        Xóa toàn bộ
                    </button>
                </div>
                <div>
                    <button
                        className='bg-primary text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mr-10 w-24 py-5'
                    // onClick={()=>updateNews()}
                    >
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditNews

EditNews.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}