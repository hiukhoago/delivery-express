import LayoutManage from '../../../layouts/manage'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useAxios from '../../../library/useAxios';
import { withRouter } from "next/router"
import { useRouter } from 'next/router'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import { toast } from 'react-toastify';
import { TypeDelivery } from '../../../shared/type.delivery.interface';

const DetailNews = () => {
    const router = useRouter();
    const { id } = router.query;

    const [services, setServices] = useState<TypeDelivery>()
    const { response, error, loading, fetchData } = useAxios();
    useEffect(() => {
        fetchData(`/services/detail/${id}`).then((res: any) => {
            if (res?.status < 300) {
                setServices(res?.data)
            }
        }).catch((err) => {
            console.log('err------>', err)
        })
    }, [])

    const deleteType = () => {
        let confirmDelete = confirm("Bạn có chắc muốn xóa?");
        if (confirmDelete) {
            fetchData(`/news/${id}`, { method: 'DELETE' }).then((res: any) => {
                if (res?.status < 300) {
                    toast.success('Xóa thành công')
                }
            }).catch((err) => {
                console.log('err------>', err)
            })
        } else return;
    }
    return (
        <>
            <div className='overflow-auto bg-gray-100 pl-4'>
                <div className='bg-gray-100 space-y-5'>
                    <div className='px-10 py-5 bg-white rounded-md'>
                        <h4 className='text-gray-700 py-3 font-extrabold text-5xl'>
                            Chi tiết dịch vụ 
                        </h4>

                        <div className='overflow-auto py-5 w-full'>
                            <article className='float-left'>
                                <div className='flex'>
                                    <label className='text-3xl pt-3 font-bold'>Mã dịch vụ: </label>
                                    <p className='text-5xl font-thin pl-5'>dfs</p>
                                </div>
                                <div className='flex py-5'>
                                    <label className='text-3xl pt-3 font-bold'>Tên dịch vụ: </label>
                                    <span>
                                        <p className='text-5xl font-thin pl-3 w-full'>Giao hàng nhanh</p>
                                    </span>
                                </div>
                                <div className='flex'>
                                    <label className='text-3xl pt-3 font-bold'>Đơn giá: </label>
                                    <p className='text-5xl font-thin pl-5'>15.000</p>
                                    <div className='text-3xl pl-4 pt-4 text-primary font-bold'>VNĐ</div>
                                </div>
                                <div className='flex py-5'>
                                    <label className='text-3xl pt-3 font-bold '>Tình trạng: </label>
                                    <p className='text-5xl font-thin pl-5'>Hoạt động</p>
                                </div>
                                <div className=''>
                                    <label className='text-3xl pt-3 font-bold'>Mô tả: </label>
                                    <textarea className='text-2xl font-thin pl-2' cols={5} readOnly value='Giao hàng trong 2 ngày'>
                                    </textarea>
                                </div>

                            </article>
                        </div>
                    </div>
                </div>
                <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                    <button
                        type="button"
                        className='bg-danger text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle px-10 py-5'
                        onClick={() => deleteType()}
                    >
                        Xóa
                    </button>
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
        </>

    )
}

export default DetailNews

DetailNews.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}

