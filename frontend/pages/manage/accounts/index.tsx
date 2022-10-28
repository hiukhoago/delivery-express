import React, { useEffect, useState } from 'react'
import LayoutManage from '../../../layouts/manage'
import Image from 'next/image';
import avatar from '../../../assets/images/customer/ahamart-service.png';
import { SearchIcon, CheckIcon, MenuIcon, TrashIcon } from '@heroicons/react/outline';
import { User } from '../../../shared/accounts.interface';
import useAxios from '../../../library/useAxios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Modal from '../../../components/supports/modal';
import AddAccount from './add';
import { Query } from '../../../shared/interface';

const ListAccount = () => {
    const router = useRouter()
    const { response, error, loading, fetchData } = useAxios()
    const [data, setData] = useState<User[]>([]);
    const [search, setSeach] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState<Query>({ filters: { authorities: { [0] : '' } } } );

    useEffect(() => {
        fetchData('/users', { method: 'GET' },query).then((res) => {
            if (res?.status === 200) {
                setData(res.data)
            }
            setIsLoading(false);
        })

        return () => {
            setData([])
        }
    }, [isLoading,query,showModal])



    const deleteAccount = async (id: number) => {
        setIsLoading(true);
        let confirmDelete = confirm("Bạn có chắc muốn xóa?");
        console.log('confirmDelete', confirmDelete)
        if (confirmDelete) {
            await fetchData(`/users/${id}`, { method: 'DELETE' }).then((res) => {
                if (res?.status === 200) {
                    toast.success('Xóa thành công')
                }
                setIsLoading(false);
            }).catch(err => {
                console.log(err)
                toast.error('Xóa thất bại')
            })
        } else return;
    }


    if (!response) return <p>No profile data</p>

    return (
        <>
            <div className='bg-white rounded-sm p-5'>
                <div className='flex justify-between'>
                    <button onClick={() => setShowModal(true)} className="bg-primary text-white w-48 cursor-pointer rounded-md border border-transparent align-middle text-center py-2 font-semibold">
                        Thêm tài khoản mới
                    </button>
                    <div className='flex items-center'>
                        <div className='border rounded-xl'>
                            <span className='bg-gray-100 rounded-l-xl p-2'>Chọn loại tài khoản</span>
                            <span className='flex-grow relative inline-flex pr-3'>
                                <select 
                                onChange={(e) => {setQuery({filters: {  authorities: { [0] : e.target.value }  }})}}
                                className='px-3 outline-0 h-8 appearance-none'>
                                    <option value='' >Tất cả</option>
                                    <option value='driver'>Tài xế</option>
                                    <option value='user'>Khách hàng</option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <div className='sm:w-auto sm:mt-0 sm:ml-auto md:ml-0'>
                        <div className='w-56 relative text-slate-500'>
                            <input
                                onChange={event => setSeach(event.target.value)}
                                type='text'
                                placeholder='Tìm kiếm' />
                            <SearchIcon className='absolute right-2 top-1 w-5 h-5' />
                        </div>
                    </div>
                </div>
                <div className='col-span-12 overflow-auto relative pt-10'>
                    <table className='w-auto min-w-full rounded border-collapse border'>
                        <thead className='font-medium leading-4'>
                            <tr>
                                <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5 '>STT</th>
                                <th className='text-left whitespace-nowrap border-b-2 font-medium px-2 py-5'>Mã</th>
                                <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Ảnh đại diện</th>
                                <th className='text-left whitespace-nowrap border-b-2 font-medium px-2 py-5'>Tên tài khoản</th>
                                <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Số điện thoại</th>
                                <th className='text-left whitespace-nowrap border-b-2 font-medium px-2 py-5'>Email</th>
                                <th className='whitespace-nowrap border-b-2 font-medium px-2 py-5'>Trạng thái</th>
                                <th className='whitespace-nowrap border-b-2 min-w-[250px] font-medium px-2 py-5'>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.filter((val) => {
                                if (search == "") {
                                    return val
                                }
                                else if (val.name?.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                                else if (val.phone?.includes(search)) {
                                    return val
                                }
                                else if (val.email?.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                            }).map((item, index) => (
                                <tr key={index} className='bg-gray-50 w-full h-16 text-center'>
                                    <td className=' text-center'>{index + 1}</td>
                                    <td className='text-center'>{item?.id}</td>
                                    <td className=''><Image alt="" src={avatar}
                                        className="rounded-full"
                                        height={50}
                                        width={50}
                                    /></td>
                                    <td className='text-left px-2'> {item?.name}</td>
                                    <td className='text-left px-2'> {item?.phone}</td>
                                    <td className='text-left w-40'> {item?.email}</td>
                                    <td>
                                        <div className='flex items-center justify-center text-success'>
                                            <CheckIcon className='h-5 w-5' />
                                        </div>
                                    </td>
                                    <td className='relative border-l'>
                                        <div className='flex justify-center items-center'>
                                            <button
                                                type="button"
                                                onClick={() => router.push({ pathname: `./accounts/${item?.id}` })}
                                                className='flex items-center text-blue-500 mr-2' >
                                                <MenuIcon className='h-5 w-5' />
                                                Chi tiết
                                            </button>
                                            {/* <button
                                                type="button"
                                                onClick={() => router.push({ pathname: `accounts/edit` })}
                                                className='flex items-center mr-2 border-x px-1' >
                                                <CheckIcon className='h-5 w-5' />
                                                Cập nhật
                                            </button> */}
                                            <button
                                                className='flex items-center text-danger'
                                                onClick={() => deleteAccount(+item.id)}
                                            >
                                                <TrashIcon className='h-5 w-5' />
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
            <Modal
                title='Tạo tài khoản mới'
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                <AddAccount />
            </Modal>
        </>
    )
}

export default ListAccount

ListAccount.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}
