import { CashIcon, CheckCircleIcon, InformationCircleIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import LayoutManage from '../../layouts/manage'
import Chart from '../../components/layouts/manage/chart'
import { usePrincipal } from '../../library/usePrincipal';
import useAxios from '../../library/useAxios';
import { formatVND } from '../../library/utility';

const Dashboard = () => {
    const { authentication, principal, login, logout, reset } = usePrincipal()
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        statistical: [
            {
                totalStatus:[
                    {
                        count: 0
                    }
                ],
                totalOrder: [
                    {
                        count: 0
                    }
                ],
                totalIncome: [
                    {
                        count: 0,
                        qty: 0
                    }
                ]
            }
        ],
        _user: [
            {
                count: 0,
            }
        ]
    });

    const { response, error, loading, fetchData } = useAxios();

    useEffect(() => {
        setIsLoading(true);
        if (authentication) {
            fetchData('orders/count/statistical').then((res: any) => {
                if (res?.status === 200) {
                    setData(res?.data);
                }
                setIsLoading(false);
            }).catch((err: any) => {
                throw err;
            })
        }

        return () => {
            setIsLoading(false)
        }

    }, [authentication])

    const totalStatus = data?.statistical?.[0]?.totalStatus?.[0]
    const totalOrder = data?.statistical?.[0]?.totalOrder?.[0]
    const totalIncome = data?.statistical?.[0]?.totalIncome?.[0]
    const user = data?._user?.[0]

        return(
            <>
                <div className='space-y-2 rounded-sm'>
                    <div className='bg-white shadow-lg p-2'>
                        <h2>
                            Thống kê
                        </h2>
                    </div>
                    <div className='flex justify-between gap-5'>
                        <div className='bg-white flex items-center rounded-lg shadow-xl border gap-2 w-full h-full p-3'>
                            <div className='mr-2 bg-gray-200 rounded-xl'>
                                <ShoppingCartIcon className='w-14 h-14 text-primary p-3' />
                            </div>
                            <div>
                                <h6 className='font-semibold mb-2 text-sm'>Số đơn hàng</h6>
                                <h3 className='text-xl mb-2 font-bold'>{totalOrder?.count ?? 0}</h3>
                            </div>
                        </div>
                        <div className='bg-white flex items-center rounded-lg shadow-xl border gap-2 w-full h-full p-3'>
                            <div className='bg-gray-200 rounded-xl'>
                                <CashIcon className='w-14 h-14 text-primary p-3' />
                            </div>
                            <div>
                                <h6 className='font-semibold mb-2 text-sm'>Tổng tiền</h6>
                                <h3 className='text-xl mb-2 font-bold'>{formatVND(totalIncome?.count ?? 0)}</h3>
                            </div>
                        </div>
                        <div className='bg-white flex items-center rounded-lg shadow-xl border gap-2 w-full h-full p-3'>
                            <div className='mr-2 bg-gray-200 rounded-xl'>
                                <CheckCircleIcon className='w-14 h-14 text-primary p-3' />
                            </div>
                            <div>
                                <h6 className='font-semibold mb-2 text-sm'>Đơn hàng thành công</h6>
                                <h3 className='text-xl mb-2 font-bold'>{totalIncome?.qty ?? 0}</h3>
                            </div>
                        </div>
                        <div className='bg-white flex items-center rounded-lg shadow-xl border gap-3 w-full h-full p-3'>
                            <div className='bg-gray-200 rounded-xl'>
                                <UserCircleIcon className='w-14 h-14 text-primary p-3' />
                            </div>
                            <div>
                                <h6 className='font-semibold mb-2 text-sm'>Tài khoản mới</h6>
                                <h3 className='text-xl mb-2 font-bold'>{user?.count ?? 0}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg p-2'>
                        <h2>
                            Biểu đồ
                        </h2>
                        <Chart data={totalStatus} />
                    </div>
                </div>

            </>
        )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}


