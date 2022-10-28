import { SearchIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react'
import LayoutAdmin from '../../../layouts/admin';
import useAxios from '../../../library/useAxios';
import { Query } from '../../../shared/interface';
import { usePrincipal } from '../../../library/usePrincipal';
import { useRouter } from 'next/router';
import { Activity, ActivityState, ActivityType } from '../../../shared/actitivty.interface';
import { formatVND, getStateLabelBg, toLocaleString } from '../../../library/utility';

const Activity = (props: any) => {
    const navs = [['Nạp tiền', 'd'], ['Rút tiền', 'w']]
    const states = [
        ['All', ''],
        ['Request', ActivityState.REQUEST],
        ['User Cancel', ActivityState.USER_CANCEL],
        ['Cancel', ActivityState.CANCEL],
        ['Complete', ActivityState.COMPLETE],
        ['Return', ActivityState.RETURN],]

    const router = useRouter()

    const { authentication, principal, login, logout, reset } = usePrincipal()

    const [isActiveStatus, setIsActiveStatus] = useState<number>(0)
    const [isActiveType, setIsActiveType] = useState<number>(0)
    const [activities, setActivities] = useState<Activity[]>([])
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [query, setQuery] = useState<Query>({ filters: { state: '',activityType:ActivityType.DEPOSIT }, pageable: { page: 0, size: 10, maxPage: 1000, sort: [{ field: 'createdAt', order: 'd' }] } })

    const { response, error, loading, fetchData } = useAxios();

    const handleTypeActi = (t: string, index: number) => {
        setQuery({ ...query, filters: { activityType: t } })
        setIsActiveType(index)
    }
    const handleStatus = (t: string, s: string, index: number) => {
        setQuery({ ...query, filters: { activityType: t, state: s } })
        setIsActiveStatus(index)
    }

    const handleFetchData = () => {
        if (authentication) {
            fetchData('/activity', {}, query)
                .then((res) => {
                    if (res?.status === 200) {
                        setActivities(res.data)
                    }
                })
        }
    }


    useEffect(() => {
        setIsLoading(true)
        handleFetchData()

        return () => {
            setIsLoading(false)
        }

    }, [authentication, query, isLoading])

    return (
        <>
            <div className='bg-white rounded-sm p-8'>
                    <div className='space-y-3'>
                        <div className='text-xl pb-6 text-gray-800 font-medium'>Quản lí dòng tiền</div>
                        <div>
                            <div className='space-y-3'>
                                <div className='flex gap-5 items-center cursor-pointer'>
                                    {navs && navs.map((nav, index) => (
                                        <div key={index} onClick={() => handleTypeActi(nav[1], index)} className={isActiveType == index ? 'bg-primary text-white border py-2 px-3 border-primary rounded transition duration-1000	' : 'hover:text-primary px-3'}>
                                            <span>{nav[0]}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex gap-5 items-center cursor-pointer'>
                                    {states && states.map((nav, index) => (
                                        <div key={index} onClick={() => handleStatus(navs?.[isActiveType]?.[1], nav[1], index)} className={isActiveStatus == index ? 'border-b-4 text-primary border-primary pb-1 px-3 transition duration-1000	' : 'hover:text-primary px-3'}>
                                            <span>{nav[0]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='min-h-full flex flex-col space-y-4'>
                            <div className='pt-4'>
                                <div>
                                    <form>
                                        <div className='relative flex items-center  justify-between h-8'>
                                            <div className='flex items-center border'>
                                                <span className='bg-gray-100 rounded h-8 p-1'>Ngày tạo đơn từ:</span>
                                                <input className="px-2  outline-0 h-8" type="date" placeholder="from" onChange={(e) => { setQuery({ filters: { from: e.target.value } }) }} />
                                                <div className='bg-gray-100 rounded h-8  p-1'>đến :</div>
                                                <input className="px-2  outline-0 h-8" type="date" placeholder="to" onChange={(e) => { setQuery({ filters: { to: e.target.value } }) }} />
                                            </div>
                                            {/* <div>
                                            {query?.filters?.status == OrderStatus.IDLE || query?.filters?.status == '' && (
                                                <button className='bg-primary p-2 text-white rounded' onClick={() => handleAcceptAll()}>
                                                    Xác nhận tất cả
                                                </button>
                                            )}

                                        </div> */}
                                        </div>
                                        <div className='relative flex justify-between mt-5'>
                                            <div className='flex'>
                                                <div className='w-56 relative text-slate-500'>
                                                    <input
                                                        onChange={event => setKeyword(event.target.value)}
                                                        type='text'
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
                                <div className='overflow-auto rounded text-gray-800 relative'>
                                    <table className='text-xs w-auto min-w-full rounded border-collapse border'>
                                        <thead className='font-medium text-sm leading-4'>
                                            <tr>
                                                <th className='p-3 bg-gray-100 box-border relative min-w-[150px] text-center'>id</th>
                                                <th className='p-3 bg-gray-100 box-border relative min-w-[150px] text-left'>Thời gian nạp/rút </th>
                                                <th className='p-3 bg-gray-100 box-border relative min-w-[150px] text-left'>loại</th>
                                                <th className='p-3 bg-gray-100 box-border relative min-w-[150px] text-left'>Số tiền nạp/rút </th>
                                                <th className='p-3 bg-gray-100 box-border relative min-w-[150px] text-left'>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {activities && activities.map((n, i) => (
                                                <tr key={i}>
                                                    <td className='px-3 py-2 text-center '>{n?.id}</td>
                                                    <td className='px-3 py-2 '>{toLocaleString(n?.createdAt ?? '')}</td>
                                                    <td className='px-3 py-2 '>{n?.activityType === ActivityType.DEPOSIT ? 'nạp tiền' : 'rút tiền'}</td>
                                                    <td className='px-3 py-2 '>{formatVND(n?.amount)}</td>
                                                    <td className='px-3 py-2'>
                                                        <span className={getStateLabelBg(n?.state).color + ' px-3 py-1 rounded w-16 text-white whitespace-nowrap'}>
                                                            {getStateLabelBg(n?.state).label}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
                                </div>
                                <div className='mt-4 bottom-0 border rounded'>
                                    <ul className='text-sm text-gray-800 h-12 p-0 ml-4 flex items-center none'>
                                        <li className='text-gray-500 inline-block h-6 mr-4 leading-5  text-base'>Tổng: {activities ? activities.length : 0} đơn</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Activity

Activity.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin>{page}</LayoutAdmin>
    )
}


