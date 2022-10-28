import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import loginImg from '../../assets/images/login.png'
import { useRouter } from 'next/router'
import { getCookie, getCookies, setCookies, removeCookies } from 'cookies-next';
import { usePrincipal } from '../../library/usePrincipal';
import useAxios from '../../library/useAxios';
import { hasAdminRole, hasUserRole } from '../../library/utility';
import { AuthorityRole } from '../../shared/enum';
import { EyeOffIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/outline';



const SignIn = () => {
    interface Payload {
        email: string;
        password: string;
    }
    const [payload, setPayload] = useState<Payload>({
        email: 'tranthanhman1912@gmail.com',
        password: '1234',
    })

    const router = useRouter();

    const { login, authentication } = usePrincipal()

    useEffect(() => {
        if (authentication?.authenticated) {
            if (authentication.roles?.includes(AuthorityRole.Admin)) {
                router.replace('/manage')
            } else if (authentication.roles?.includes(AuthorityRole.User)) {
                router.replace('/admin')
            } else {
                router.replace('/')
            }
        }
        return () => { }
    }, [authentication]);

    const { response, error, loading, fetchData } = useAxios();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (!payload.email || !payload.password) {
                alert('Vui lòng nhập đầy đủ thông tin')
                throw new Error('Vui lòng nhập đầy đủ thông tin')
            }
            const result = await fetchData('/auth/in', { method: 'POST', data: payload }).then((res: any) => {
                if (res?.status < 300) {
                    login?.({ jwt: res?.data[0], principal: res?.data[1] })
                    if (hasAdminRole(res?.data[1].authorities)) router.push('/manage')
                    else if (hasUserRole(res?.data[1].authorities)) router.push('/admin')
                    else router.push('/')
                } else {
                    if(res?.status === 401){
                        alert('Sai tài khoản hoặc mật khẩu')
                    }else{
                        alert('Đăng nhập thất bại')
                    }
                    setPayload({
                        email: '',
                        password: '',
                    })
                }
            });
        } catch (error: any) {
            alert(error)
            throw new Error(error.message)
        }
    }


    const handleChange = ({ target: { name, value } }: any) => {
        setPayload((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    console.log('render----------->>>>>>', error?.message)

    return (
        <div>
            <div className='bg-primary items-center box-border flex justify-center max-w-none min-h-screen mr-0'>
                <div className='flex flex-col'>
                    <div className='bg-orange-200 items-center flex justify-end relative w-[1040px] h-[600px]'>
                        <Image alt="" src={loginImg} objectFit="cover" />
                    </div>
                    <div className='bg-blue-50 p-8 rounded ml-[572px] mt-14 overflow-hidden absolute shadow-lg w-[468px] h-[500px]'>
                        <div className='flex flex-col'>
                            <div className='text-2xl mb-16'>
                                Đăng nhập
                            </div>
                            <form onSubmit={handleSubmit} >
                                <div className='p-0'>
                                    <div className='items-center box-border flex h-12 w-full border-b-2'>
                                        <div className='items-center box-border flex h-12 w-full border-0'>
                                            <UserCircleIcon className='h-6 w-6' />
                                            <input
                                                className='ml-5 block w-full border-none bg-transparent rounded-none text-base p-0  outline-none'
                                                type="text"
                                                required
                                                name="email"
                                                onChange={handleChange}
                                                placeholder='Số điện thoại/Email'
                                                value={payload.email}
                                            />
                                        </div>
                                    </div>
                                    <div className='mt-5 items-center flex h-12 w-full border-b-2 space-x-4'>
                                        <div className='items-center  flex h-12 w-full '>
                                            <LockClosedIcon className='w-6 h-6' />
                                            <input
                                                id='password'
                                                className='ml-5 block w-full border-none bg-transparent rounded-none text-base p-0  focus:outline-none'
                                                type="password"
                                                placeholder='Mật khẩu'
                                                name="password"
                                                onChange={handleChange}
                                                required
                                                value={payload.password}
                                            />
                                        </div>
                                        <div className='cursor-pointer flex-shrink-0 h-8 justify-center w-8 items-center flex border-r'>
                                            <EyeOffIcon className='h-6 w-6' />
                                        </div>
                                        <Link href='/forgot-password'>
                                            <a className='text-blue-500 items-center flex flex-shrink-0 h-12 cursor-pointer'>Quên?</a>
                                        </Link>
                                    </div>
                                    {error && <div className='text-danger text-sm'>{error.message}</div>}
                                    <button type='submit' className='bg-primary mt-16 w-full items-center rounded-sm shadow-none flex text-base h-10 justify-center'>
                                        <div className='text-white'>Đăng nhập</div>
                                    </button>
                                </div>
                            </form>
                            <div className='absolute bottom-5 left-4 right-5 mt-6 text-center'>
                                Bạn chưa có tài khoản?
                                <Link href='/authentication/up'>
                                    <a className="cursor-pointer text-blue-400">Đăng ký</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default SignIn