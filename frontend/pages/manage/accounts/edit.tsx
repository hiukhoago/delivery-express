import React, { useState } from 'react'
import LayoutManage from '../../../layouts/manage'
import Image from 'next/image';
import avatar from '../../../assets/images/customer/ahamart-service.png';
import { withRouter } from "next/router"
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import useAxios from '../../../library/useAxios';

const EditAccount = () => {

    const { response, error, loading, fetchData } = useAxios();
    const router = useRouter();
    const { query } = useRouter();

    const id = query.id;
    const name = query.name;
    const phone = query.phone;
    const email = query.email;
    const password = query.password;

    const [newtitle, setNewTitle] = useState("");
    const [newcontent, setNewContent] = useState("");
    const [newstatus, setNewStatus] = useState(true);
    const [newimage, setNewImage] = useState("newImage.png");

    const updateAccount = async () => {
        const id = query.id;
        await fetchData(`/auth/${id}`, { method: 'PUT', data: {
            id: id,
            name: name,
            email: email,
            phone: phone,
            password: password,
        }
        })}
    
    const clearAll = () => {
        setNewTitle('');
        setNewContent('');
        setNewStatus(true);
    }

    return (
        <div className='overflow-auto bg-gray-100 pl-4'>
            <div className='bg-gray-100 space-y-5 mb-5'>
                <div className='px-10 py-5 bg-white '>
                    <h4 className='text-gray-900 font-medium'>
                        Cập nhật tài khoản
                    </h4>
                    <div className='flex rounded-md pl-[30%] -mt-5'>
                        <div className='border rounded-xl relative px-10 py-5'>
                            <div>
                                <div>
                                    <div><Image src={avatar}
                                        className="rounded-full"
                                        height={400}
                                        alt=""
                                        width={400}
                                    />
                                        <div><input type="file" /><label ></label></div>
                                    </div>
                                </div>
                                <div className='pt-5 pb-3'>
                                    <label className='text-xl font-medium text-gray-600 pr-2'>Họ và tên:</label>
                                    <input
                                        className='pl-2 text-2xl border rounded-lg'
                                        type="text"
                                        onChange={(event) => { setNewTitle(event.target.value) }}
                                        value='Trần Hiếu khoa' />
                                </div>
                                <div className='py-2'>
                                    <label className='text-xl font-medium text-gray-600 pr-2'>Email:</label>
                                    <input
                                        className='pl-2 text-2xl border rounded-lg'
                                        type='text'
                                        onChange={(event) => { setNewTitle(event.target.value) }}
                                        value='hiukhoa@gmail.com' />
                                </div>
                                <div className='py-2'>
                                    <label className='text-xl font-medium text-gray-600 pr-2'>Password:</label>
                                    <input
                                        className='pl-2 text-2xl border rounded-lg'
                                        type='text'
                                        onChange={(event) => { setNewTitle(event.target.value) }}
                                        value='0147258399Aa' />
                                </div>
                                <div className='py-2'>
                                    <label className='text-xl font-medium text-gray-600 pr-2'>Số điện thoại:</label>
                                    <input
                                        className='pl-2 text-2xl border rounded-lg'
                                        type='number'
                                        onChange={(event) => { setNewTitle(event.target.value) }}
                                        value='0355501613' />
                                </div>
                                <div className='py-2 flex'>
                                    <label className='text-xl font-medium text-gray-600 pr-2'>Tình trạng:</label>
                                    <span className='pl-2 text-2xl'>
                                        <select className='border rounded-lg h-10'>
                                            <option selected value="0">Hoạt động</option>
                                            <option value="1">Không hoạt động</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                <div className='mr-4'>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className='bg-danger text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mr-10 w-24 py-5'>
                        Trở lại
                    </button>
                </div>
                <div>
                    <button
                        className='bg-warning text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center cursor-pointer box-border select-none align-middle mr-10 px-10 py-5'
                        onClick={clearAll}>
                        Xóa toàn bộ
                    </button>
                </div>
                <div>
                    <button
                        className='bg-primary text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mr-10 w-24 py-5'
                        onClick={() => updateAccount()}>
                        Cập nhật
                    </button>
                </div>
            </div>

        </div>
    )
}

export default EditAccount

EditAccount.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}