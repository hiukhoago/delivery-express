import React, { useEffect } from 'react'
import { SearchIcon, CheckIcon, MenuIcon, TrashIcon } from '@heroicons/react/outline';
import LayoutManage from '../../../layouts/manage'
import { Query } from '../../../shared/interface';
import Image from 'next/image';
import avatar from '../../../assets/images/customer/ahamart-service.png';
import useAxios from '../../../library/useAxios';
import Axios from 'axios'
import { News } from '../../../shared/news.interface';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Link from 'next/link'

const ListNews = () => {
    const router = useRouter()
    const { response, error, loading, fetchData } = useAxios();
    const [news, setNews] = useState<News[]>([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        if(!response) {
            fetchData('news', {}).then(res => {
                if (res?.status === 200) {
                    setNews(res.data);
                }
            })
        }

        return () => {
            setNews([])
        }

    }, [response])

    const deleteNews = (id : number) => {
        let confirmDelete = confirm("Bạn có chắc muốn xóa?");
        if (confirmDelete) {
            fetchData(`/news/${id}`,{method: 'DELETE'}).then((res: any) => {
                if(res?.status < 300){
                    toast.success('Xóa thành công')
                }
            })
        }
    }

    if (loading) return <p>Loading...</p>
    if (!response) return <p>Không có dữ liệu</p>

    return (
        <div className='bg-white rounded-sm p-5'>
            <div className='flex justify-between'>
                <div className="bg-primary text-white w-48 cursor-pointer rounded-md border border-transparent align-middle text-center py-2 font-semibold" >
                    <Link href={'news/add'} > Thêm tin tức mới</Link>
                </div>
                <div className='flex items-center'>
                    <div className='border rounded-xl'>
                        <span className='bg-gray-100 rounded-l-xl p-2'>Sắp xếp theo</span>
                        <span className='flex-grow relative inline-flex pr-3'>
                            <select className='px-3 outline-0 h-8 appearance-none'>
                                <option defaultValue="COD" >Vui lòng chọn</option>
                                <option value='1'>Tăng dần</option>
                                <option value='2'>Giảm dần</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-56 relative text-slate-500'>
                        <input
                            onChange={(e) => { setSearch(e.target.value) }}
                            className='form-control w-56 box px-2 border rounded-xl h-8'
                            placeholder='Tìm kiếm'
                        />
                        <SearchIcon className="lucide w-4 h-4 absolute my-2 inset-y-0 mr-3 right-0 opacity-30" />
                    </div>
                </div>
            </div>
            <div className='intro-y col-span-12 overflow-auto pt-10'>
                <table className='table-auto w-full rounded border-collapse border'>
                    <thead className='font-medium leading-4'>
                        <tr>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>STT</th>
                            <th className='text-left whitespace-nowrap border-b-2 font-medium px-2 py-5'>Mã</th>
                            <th className='text-left whitespace-nowrap border-b-2 font-medium px-2 py-5'>Tiêu đề</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Ảnh</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Tình trạng</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5 min-w-[270px]'>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news && news.filter((val) => {
                            if (search == "") {
                                return val
                            } else if (val.title.toLowerCase().includes(search.toLowerCase())) { return val }
                        }).map((item, index) => (
                            <tr key={index} className='bg-gray-50 h-16 py-2 text-center '>
                                <td className='w-20'>{index + 1}</td>
                                <td className='text-left w-40'>{item?.id}</td>
                                <td className='w-300 text-left text-ellipsis'>{item?.title}</td>
                                <td className='w-40'> <Image alt="" src={avatar}
                                    className="rounded-sm"
                                    height={50}
                                    width={50}
                                /></td>
                                <td className='w-30'>
                                    <div className='flex items-center justify-center text-success mx-3'>
                                        <CheckIcon className='w-5 h-5' />
                                    </div>
                                </td>
                                <td className='relative border-l'>
                                    <div className='flex justify-center items-center'>
                                        <button
                                            type="button"
                                            onClick={() => router.push(`/manage/news/${item?.id}`)} 
                                            className='flex items-center text-blue-500 mr-2' >
                                            <MenuIcon className='w-5 h-5' />
                                            Chi tiết
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => router.push(`/manage/news/edit/${item?.id}`)} 
                                            className='flex items-center mr-2 border-x px-2' >
                                            <CheckIcon className='w-5 h-5' />
                                            Cập nhật
                                        </button>
                                        <button
                                            className='flex items-center text-danger'
                                            onClick={() => deleteNews(+item?.id)}>
                                            <TrashIcon className='w-5 h-5' />
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListNews

ListNews.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}
