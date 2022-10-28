import LayoutManage from '../../../layouts/manage'
import Axios from 'axios'
import useAxios from '../../../library/useAxios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { withRouter } from "next/router"
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

const EditType = () => {
    const router = useRouter();
    const { query } = useRouter();

    const code = query.code;
    const name = query.name;
    const fee = query.fee;
    const status = query.status;
    const description = query.description;

    const [newCode, setNewCode] = useState("");
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newFee, setNewFee] = useState("");
    const [newStatus, setNewStatus] = useState(true);

    const updateNews = () => {
        const id = query.id;
        Axios.put(`http://localhost:3030/api/news/${id}`, {
            name: newName,
            code: newCode,
            status: newStatus,
            fee: newFee,
            description: newDescription
        })
    }
    const clearAll = () => {
        setNewName('');
            setNewCode('');
            setNewFee('');
            setNewStatus(true);
            setNewDescription('');
    }
    return (
        <div className='overflow-auto bg-gray-100 pl-4'>
            <div className='bg-gray-100 space-y-5'>
                <div className='px-10 py-5 bg-white rounded-md'>
                    <h4 className='text-gray-900 py-3 font-medium'>
                        Cập nhật dịch vụ giao hàng
                    </h4>
                    <div>
                        <div>
                            <form>
                                <div className='grid grid-cols-2 gap-10 w-full'>
                                    <div className='flex flex-col justify-start py-2'>
                                        <span className='block text-sm font-bold text-gray-700 leading-6'>
                                            Mã dịch vụ
                                        </span>
                                        <span className='flex-grow flex flex-col justify-center'>
                                            <span className='rounded flex leading-none border'>
                                                <input
                                                    className='rounded text-sm text-gray-800 h-8 w-full px-3 min-w-2xl'
                                                    placeholder='Nhập mã dịch vụ vận chuyển'
                                                    type="text"
                                                    onChange={(event) => { setNewCode(event.target.value) }}
                                                    value='dss'
                                                />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-10 w-full py-2'>
                                    <div className='flex flex-col justify-start'>
                                        <span className='block text-sm font-bold text-gray-700 leading-6'>
                                            Tên dịch vụ
                                        </span>
                                        <span className='flex-grow flex flex-col justify-center'>
                                            <span className='rounded flex leading-none border'>
                                                <input
                                                    className='rounded text-sm text-gray-800 h-8 w-full px-3 min-w-2xl'
                                                    placeholder='Nhập tên dịch vụ vận chuyển'
                                                    type="text"
                                                    onChange={(event) => { setNewName(event.target.value) }}
                                                    value={name}
                                                />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-10 w-full py-2'>
                                    <div className='flex flex-col justify-start'>
                                        <span className='block text-sm font-bold text-gray-700 leading-6'>
                                            Đơn giá
                                        </span>
                                        <span className='flex-grow flex flex-col justify-center'>
                                            <span className='rounded flex leading-none border'>
                                                <input
                                                    className='rounded text-sm text-gray-800 h-8 w-full px-3 min-w-2xl'
                                                    placeholder='Nhập đơn giá'
                                                    type="text"
                                                    onChange={(event) => { setNewFee(event.target.value) }}
                                                    value={fee}
                                                />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                               
                                <div className='flex flex-row py-2'>
                                    <span className='flex'>
                                        <input
                                            type='checkbox'
                                            className='w-5 h-5 relative rounded-full'
                                            checked
                                        ></input>
                                    </span>
                                    <span className='text-gray-600 leading-8 inline-block pl-3'>
                                        Hoạt động
                                    </span>
                                </div>
                                <div className='mt-3 mb-20'>
                                    <label htmlFor="about" className="block text-sm font-bold text-gray-700 leading-6"> Mô tả </label>
                                    <div className="mt-1">
                                        <textarea
                                            name="about"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-3 h-80"
                                            placeholder="Nội dung tin tức"
                                            onChange={(event) => { setNewDescription(event.target.value) }}
                                            value={description}
                                        >
                                        </textarea>
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

export default EditType

EditType.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}