import React, { useEffect, useState } from 'react'
import LayoutManage from '../../../layouts/manage'
import Image from 'next/image';
import avatar from '../../../assets/images/customer/ahamart-service.png';
import { useRouter } from 'next/router'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import { toast } from 'react-toastify'
import Axios from 'axios'
import useAxios from '../../../library/useAxios';

const DetailAccount = () => {

    const router = useRouter();
    const  {id}  = router.query;

    const { response, error, loading, fetchData } = useAxios();
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        if(id) {
            fetchData(`users/${id}`).then(res => {
                if (res?.status === 200) {
                    setData(res.data);
                }
                setIsLoading(false);
            })
        }

        return () => {
            setData(null);
            setIsLoading(false);
        }

    }, [id])

    return (
        <div className='overflow-auto bg-gray-100 pl-4'>
            <div className='bg-gray-100 space-y-2 mb-5'>
                <div className='px-10 py-5 bg-white '>
                    <h4 className='text-gray-900 font-medium'>
                        Chi tiết tài khoản
                    </h4>
                    <div className='flex rounded-md pl-[30%] -mt-5'>
                        <div className='border rounded-xl relative px-10 py-5'>
                            <div>
                                <div>
                                        <Image alt="" src={avatar}
                                            className="rounded-full"
                                            height={400}
                                            width={400}
                                        />
                                </div>
                                <div className='pt-5 pb-3'>
                                    <label className='text-xl font-medium text-gray-600'>Họ và tên:</label>
                                    <span className='pl-2 text-2xl'>{data?.name}</span>
                                </div>
                                <div className='py-2'>
                                    <label className='text-xl font-medium text-gray-600'>Email:</label>
                                    <span className='pl-2 text-2xl'>{data?.email}</span>
                                </div>
                                <div className='py-2'>
                                    <label className='text-xl font-medium text-gray-600'>Số điện thoại:</label>
                                    <span className='pl-2 text-2xl'>{data?.phone}</span>
                                </div>
                                <div className='py-2'>
                                    <label className='text-xl font-medium text-gray-600'>Loại tài khoản:</label>
                                    <span className='pl-2 text-2xl'>{data?.authorities[0]}</span>
                                </div>
                                <div className='py-2 flex'>
                                    <label className='text-xl font-medium text-gray-600'>Tình trạng:</label>
                                    <input type='checkbox' disabled checked={data?.isAvailable ? true : false} className='ml-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                {/* <button
                    type="button"
                    className='bg-danger text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle px-10 py-5'
                    onClick={() => deleteAccount()}
                >
                    Xóa
                </button> */}
                <button
                    className='bg-blue-600 text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mx-10 px-5 py-5'
                    type="button"
                    onClick={() => router.push({ pathname: `./edit` })}
                >
                    <span className='mx-2'>Cập nhật</span>
                </button>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className='bg-warning text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center cursor-pointer box-border select-none align-middle mr-10 px-10 py-5'
                >
                    Trở lại
                </button>
            </div>
        </div>
    )
}

export default DetailAccount

DetailAccount.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}