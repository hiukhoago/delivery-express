import React, { useEffect, useState } from 'react'
import LayoutManage from '../../../layouts/manage'
import useAxios from '../../../library/useAxios';
import { TypeDelivery } from '../../../shared/type.delivery.interface';
import { SearchIcon, CheckIcon, MenuIcon, TrashIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Axios from 'axios'
import { usePrincipal } from '../../../library/usePrincipal';

const ListTypeDelivery = () => {
    const router = useRouter()

    const { authentication, principal, login, logout, reset } = usePrincipal()
    const { response, error, loading, fetchData } = useAxios();
    const [type, setType] = useState<TypeDelivery[]>([])
    const [search,setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchData = () => {
        if (authentication) {
            fetchData('/services', {})
                .then((res) => {
                    if (res?.status === 200) {
                        setType(res.data)
                    }
                })
        }
    }

    useEffect(() => {
        handleFetchData()
    }, [authentication])


    const deleteServices = async (id: any) => {
        setIsLoading(true);
        let confirmDelete = confirm("Bạn có chắc muốn xóa?");
        console.log('confirmDelete', confirmDelete)
        if (confirmDelete) {
            await fetchData(`/services/${id}`, { method: 'DELETE' }).then((res) => {
                if (res?.status === 200) {
                    toast.success('Xóa thành công')
                    router.reload()
                }
                setIsLoading(false);
            }).catch(err => {
                console.log(err)
                toast.error('Xóa thất bại')
            })
        } else return;
    }

    return (
        <div className='bg-white rounded-sm p-5'>
            <div className='flex justify-between'>
                <div className="bg-primary text-white w-48 cursor-pointer rounded-md border border-transparent align-middle text-center py-2 font-semibold" >
                    <Link href={'/manage/services/add'}><a>Thêm dịch vụ mới</a></Link>
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
                            type='text'
                            onChange={(event)=>setSearch(event.target.value)}
                            className='form-control w-56 box px-2 hover:border-orange-500 border-2 rounded-xl h-8'
                            placeholder='Tìm kiếm'
                        />
                        <SearchIcon className="lucide w-4 h-4 absolute my-2 inset-y-0 mr-3 right-0 opacity-30"/>
                    </div>
                </div>
            </div>
            <div className='overflow-auto rounded text-gray-800 relative pt-10'>
                <table className='table-auto rounded border-collapse border w-full'>
                    <thead className='font-medium leading-4'>
                        <tr>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>STT</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Mã</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Tên dịch vụ</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Mô tả</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Đơn giá</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Trạng thái</th>
                            <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5 min-w-[270px]'>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {type && type?.filter((val) => {
                            if (search == "") {
                                return val
                            } 
                            else if (val.id?.toLowerCase().includes(search.toLowerCase())){
                                return val
                            }
                            else if (val.description?.toLowerCase().includes(search.toLowerCase())){
                                return val
                            }
                            else if (val.name?.toLowerCase().includes(search.toLowerCase().trim())){
                                return val
                            }
                        }).map((item, index) => (
                            <tr key={index} className='bg-gray-50 w-full h-16 text-center'>
                                <td className='text-center'> {index + 1}</td>
                                <td className='text-center'> {item?.id}</td>
                                <td className='text-center'> {item?.name}</td>
                                <td className='text-center'> {item?.description}</td>
                                <td className='text-center'> {item?.fee}</td>
                                <td className='text-center'>
                                    <div className='flex items-center justify-center text-success'>
                                        <CheckIcon className='w-5 h-5' />
                                    </div>
                                </td>
                                <td className='relative pt-0 pb-0 border-l'>
                                    <div className='flex justify-center items-center'>
                                        <button
                                            type="button"
                                            onClick={() => router.push(`/manage/services/${item?.id}`)}
                                            className='flex items-center text-blue-500 mr-2' >
                                            <MenuIcon className='w-5 h-5' />
                                            Chi tiết
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => router.push({ pathname: `services/edit`, query: { id: item.id, name: item.name, description: item.description, status: item.status, fee: item.fee } })}
                                            className='flex items-center mr-2 border-x px-2' >
                                            <CheckIcon className='w-5 h-5' />
                                            Cập nhật
                                        </button>
                                        <button
                                            className='flex items-center text-danger'
                                            onClick={() => deleteServices(item?.id)}
                                        >
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

export default ListTypeDelivery

ListTypeDelivery.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}