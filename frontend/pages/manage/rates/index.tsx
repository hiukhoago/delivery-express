import React, { useEffect } from 'react'
import { SearchIcon, MenuIcon } from '@heroicons/react/outline';
import LayoutManage from '../../../layouts/manage'
import useAxios from '../../../library/useAxios';
import { Rate } from '../../../shared/rate.interface';
import { useState } from 'react';
import { Query } from '../../../shared/interface';
import { useRouter } from 'next/router'
import { usePrincipal } from '../../../library/usePrincipal';

const ListNews = () => {
    const router = useRouter()
    const { authentication, principal, login, logout, reset } = usePrincipal()
    const { response, error, loading, fetchData } = useAxios();
    const [rate, setRate] = useState<Rate[]>([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const [query, setQuery] = useState<Query>({ filters: { rating: "" } })

    useEffect(() => {
        if (authentication) {
            fetchData('/rates', {}, query)
                .then((res) => {
                    if (res?.status === 200) {
                        setRate(res.data)
                    }
                })
        }

    }, [authentication, query, isLoading])

    if (loading) return <p>Loading...</p>
    if (!response) return <p>Không có dữ liệu</p>

    return (
        <div className='bg-white rounded-sm p-5'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold text-gray-500'>Danh sách đánh giá</div>
                <div className='flex items-center'>
                    <div className='border rounded-xl'>
                        <span className='bg-gray-100 rounded-l-xl p-2'>Sắp xếp theo</span>
                        <span className='flex-grow relative inline-flex pr-3'>
                            <select
                                onChange={(e) => { setQuery({ filters: { rating: e.target.value } }) }}
                                className='px-3 outline-0 h-8 appearance-none'
                                >
                                <option value='555'>Số sao</option>
                                <option value='5'>5 sao</option>
                                <option value='4'>4 sao</option>
                                <option value='3'>3 sao</option>
                                <option value='2'>2 sao</option>
                                <option value='1'>1 sao</option>
                                <option value="" >Tất cả</option>
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
                            <th className='text-left whitespace-nowrap border-b-2 font-medium px-2 py-5'>Email người đánh giá</th>
                            <th className='text-left whitespace-nowrap border-b-2 font-medium px-2 py-5'>Nội dung đánh giá</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Số sao</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Mã đơn hàng</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rate && rate?.filter((val) => {
                            if (search == "") {
                                return val
                            }
                            else if (val.emailUser.toLowerCase().includes(search.toLowerCase().trim())) {
                                return val
                            }
                            else if (val.commentUser?.toLowerCase().includes(search.toLowerCase().trim())) {
                                return val
                            }
                            else if (val.orderId?.toString().includes(search)) {
                                return val
                            }
                        }).map((item, index) => (
                            <tr key={index} className='bg-gray-50 h-16 py-2 text-center '>
                                <td className=''>{index + 1}</td>
                                <td className='text-left text-ellipsis'>{item?.emailUser}</td>
                                <td className='text-left'>{item?.commentUser}</td>
                                <td className=''>{item?.rating}</td>
                                <td className=''>{item?.orderId}</td>
                                <td className='border-l'>
                                    <div className='flex justify-center items-center'>
                                        <button
                                            type="button"
                                            onClick={() => router.push(`/manage/rates/${item.id}`)}
                                            className='flex items-center text-blue-500 mr-2' >
                                            <MenuIcon className='w-5 h-5' />
                                            Chi tiết
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
