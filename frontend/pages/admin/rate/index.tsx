import Axios from 'axios'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import FormSearch from '../../../components/supports/FormSearch'
import LayoutAdmin from '../../../layouts/admin'
import useAxios from '../../../library/useAxios';
import { usePrincipal } from '../../../library/usePrincipal';
import { OrderStatus } from '../../../shared/enum';
import { Query } from '../../../shared/interface';
import { Rate } from '../../../shared/rate.interface';
import { SearchIcon, MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const RateHistory = () => {
    
    const router = useRouter()

    const [isActive, setIsActive] = useState<number>(0)
    const [rate, setRate] = useState<Rate[]>([])
    const [search, setSearch] = useState('');

    const { authentication, principal, login, logout, reset } = usePrincipal()


    const [query, setQuery] = useState<Query>({ filters: {rating: "" }, pageable: { page: 0, size: 10, maxPage: 1000, sort: [{ field: 'createdAt', order: 'd' }] } })
    const { response, error, loading, fetchData } = useAxios();

    useEffect(() => {
        let isMounted = true;
        if (authentication) {
            fetchData('/rates', {}, query)
                .then((res) => {
                    if (res?.status === 200) {
                        setRate(res.data)
                    }
                })
        }
        return () => {
            isMounted = false;
        }
    }, [query, authentication])

    if (!response) return <p>No profile data</p>

    return (
        <>
            <div className='bg-white rounded-sm p-8'>
                <div className='space-y-3'>
                    <div className='text-4xl text-gray-700 font-medium'>Lịch sử đánh giá</div>
                    <div className='min-h-full flex flex-col space-y-4'>
                        <div className='pt-4'>
                            <div>
                                <form>
                                    <div className='relative flex items-center  justify-between h-8'>
                                        <div className='flex items-center border'>
                                            <span className='bg-gray-100 rounded h-8 p-1'>Ngày đánh giá:</span>
                                            <input className="px-2  outline-0 h-8" type="date" placeholder="from" onChange={(e) => { setQuery({ filters: { from: e.target.value } }) }} />
                                            <div className='bg-gray-100 rounded h-8  p-1'>đến :</div>
                                            <input className="px-2  outline-0 h-8" type="date" placeholder="to" onChange={(e) => { setQuery({ filters: { to: e.target.value } }) }} />
                                        </div>
                                    </div>
                                    <div className='relative flex justify-between mt-5'>
                                        <div className='flex items-center border'>
                                            <span className='bg-gray-100 rounded h-8 p-1'>Sắp xếp theo</span>
                                            <span className='flex-grow relative inline-flex pr-3'>
                                                <select
                                                    className='px-3 outline-0 h-8 appearance-none'
                                                    onChange={(e) => { setQuery({ filters: { rating: e.target.value } }) }}
                                                >
                                                    <option value="">Số sao</option>
                                                    <option value="5" >5 sao</option>
                                                    <option value="4" >4 sao</option>
                                                    <option value="3" >3 sao</option>
                                                    <option value="2" >2 sao</option>
                                                    <option value="1" >1 sao</option>
                                                    <option value="" >Tất cả</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div>
                                        </div>
                                        <div className='flex'>
                                            <div className='w-56 relative text-slate-500'>
                                                <input
                                                    type='text'
                                                    onChange={(e) => setSearch(e.target.value)}
                                                    className='form-control w-56 box px-2 border rounded-xl h-8'
                                                    placeholder='Tìm kiếm'
                                                />
                                                <SearchIcon className="lucide w-4 h-4 absolute my-2 inset-y-0 mr-3 right-0 opacity-30" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='flex-grow'>
                            <div className='intro-y col-span-12 overflow-auto pt-3'>
                                <table className='table-auto w-full rounded border-collapse border'>
                                    <thead className='font-medium leading-4'>
                                        <tr className='bg-gray-100'>
                                        <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5 border-r'>STT</th>
                                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5 text-left'>Mã đánh giá</th>
                                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5 text-left'>Nội dung</th>
                                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5 text-left'>Đơn hàng</th>
                                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5 text-left'>Số sao</th>
                                            <th className='sticky z-10 right-0 whitespace-nowrap border-b-2 font-medium px-2 py-5'>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rate?.filter((val) => {
                                            if (search == "") {
                                                return val
                                            } 
                                            else if (val.commentUser?.toLowerCase().includes(search.toLowerCase().trim())) {
                                                return val
                                            }
                                            else if (val.orderId?.toString().includes(search)) {
                                                return val
                                            }
                                            else if (val.id?.toString().includes(search)) {
                                                return val
                                            }
                                        }).map((n, index: any) => (
                                            <tr key={index}>
                                                <td className='text-xl sticky bg-white border-r text-center'>{index+1}</td>
                                                <td className='px-3 py-2 '>#{n?.id}</td>
                                                <td className='px-3 py-2 '>{n?.commentUser}</td>
                                                <td className='px-3 py-2 '>#{n?.orderId}</td>
                                                <td className='px-3 py-2 '>{n?.rating}</td>
                                                <td className='text-xs p-1.5 text-slate-400 uppercase sticky flex justify-center right-0 bg-white font-medium'>
                                                    <button type='button' onClick={() => router.push(`orders/${n?.orderId}`)} className='button_primary'>Chi tiết đơn hàng</button>
                                                </td>
                                            </tr>
                                        ))}


                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-4 bottom-0 border rounded'>
                                <ul className='text-sm text-gray-800 h-12 p-0 ml-4 flex items-center none'>
                                    <li className='text-gray-500 inline-block h-6 mr-4 leading-5  text-base'>Tổng: {rate.length ?? 0}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RateHistory

RateHistory.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}
