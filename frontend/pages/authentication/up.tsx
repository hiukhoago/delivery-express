import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeftIcon, LockClosedIcon, UserIcon } from '@heroicons/react/outline';
import { AuthorityRole } from '../../shared/enum';
import { User } from '../../shared/accounts.interface';
import axios from 'axios';
import Modal from '../../components/supports/modal';
import useAxios from '../../library/useAxios';


const Up = () => {
    const router = useRouter();
    const [isShow, setIsShow] = useState(false);
    
    const [formData, setFormData] = useState<any>({
        email: '',
        password: '',
        repassword: '',
        name: '',
        authorities: [AuthorityRole.User],
        wallet: {
            balance: 0,
            depositCount: 0,
            withdrawCount: 0,
            depositAmount: 0,
            withdrawAmount: 0
        }
    })
    
    const { response, error, loading, fetchData } = useAxios();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log('formData-------------->', formData)
        try {
            fetchData('auth/up', {method: 'POST', data: formData}).then((res) => {
                if(res?.status === 201){
                    setIsShow(true)
                }
            })
        } catch (err: any) {
            alert(error)
            console.log('error------>', error)
        }
    }

    const handleChange = ({ target: { name, value } }: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div>
            <div className="relative bg-[url('../assets/images/banner/1.jpeg')] h-screen bg-cover bg-no-repeat overflow-hidden">
                <div className='flex flex-col justify-center h-screen items-center'>
                    <div className='bg-blue-50 p-8 rounded overflow-hidden shadow-lg w-[450px] h-[500px]'>
                        <div className='flex flex-col w-full'>
                            <div className='items-center box-border flex h-full overflow-hidden relative mb-8'>
                                <ArrowLeftIcon className='w-5 h-5 cursor-pointer' onClick={() => router.back()} />
                                <div className='text-2xl ml-4'>
                                    ????ng k??
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='flex-col flex w-full'>
                                    <label
                                        className='border-b flex items-center h-12 w-full py-2'>
                                        <UserIcon className='w-5 h-5' />
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            placeholder='S??? ??i???n tho???i/Email'
                                            name='email'
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label
                                        className=' border-b flex items-center h-12 w-full py-2'>
                                        <LockClosedIcon className='w-5 h-5' />
                                        <input
                                            type="password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder='Nh???p m???t kh???u'
                                            name='password'
                                        />
                                    </label>
                                    <label
                                        className=' border-b flex items-center h-12 w-full py-2'>
                                        <LockClosedIcon className='w-5 h-5' />
                                        <input
                                            type="password"
                                            required
                                            value={formData.repassword}
                                            placeholder='Nh???p m???t kh???u'
                                            name='repassword'
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label
                                        className=' border-b flex items-center h-12 w-full py-2'>
                                        <UserIcon className='w-5 h-5' />
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            placeholder='Nh???p h??? t??n'
                                            name='name'
                                            onChange={handleChange}

                                        />
                                    </label>
                                </div>
                                <button
                                    type='submit'
                                    className='bg-primary mt-10 w-full items-center rounded-sm shadow-none flex text-base h-10 justify-center'>
                                    <div className='text-white'>Ti???p</div>
                                </button>
                            </form>
                            <div className='mt-6'>
                                <Link href="/authentication/in">
                                    <a>
                                        B???n ???? c?? t??i kho???n?

                                        <span className="cursor-pointer text-blue-400"> ????ng nh???p</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Modal
                title='Vui l??ng ki???m tra email'
                onClose={() => setIsShow(false)}
                show={isShow}
                confirm={() => router.push('/authentication/in')}
                >
                    
                <div>
                    <p>Vui l??ng ki???m tra email ????? k??ch ho???t t??i kho???n</p>
                </div>
            </Modal>
        </div >

    )
}

export default Up

