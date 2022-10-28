import React, { useState } from 'react'
import Logo from '../../logo';
import { navsAdmin } from '../../../data';
import Link from 'next/link';
import { ChevronUpIcon, LogoutIcon } from '@heroicons/react/outline'
import Modal from '../../supports/modal';
import Image from 'next/image';
import single from '../../../assets/images/order/single.svg';
import mass from '../../../assets/images/order/mass.svg';
import { useRouter } from 'next/router';
import { usePrincipal } from '../../../library/usePrincipal';
const Navigation = () => {
    const [activeParent, setActiveParent] = useState<number>()
    const router = useRouter()
    const selectParent = (i: number) => {
        activeParent === i ? setActiveParent(undefined) : setActiveParent(i)
    }

    const { logout } = usePrincipal()

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='w-56 rounded-sm min-w-[224px] max-w-[224px] shadow z-10'>
                <div className='w-full h-screen flex-col flex'>
                    <div className='w-full flex flex-col'>
                        <Link href={'/admin'}>
                            <a>
                                <h4 className='text-center text-secondary font-bold py-5'>Delivery Express</h4>
                            </a>
                        </Link>
                        <button className='button_primary mx-3 mb-5' onClick={() => setShowModal(true)}>
                            <Link href='/admin/orders/create'>
                                <a>
                                    Tạo đơn
                                </a>
                            </Link>
                        </button>
                        <Modal
                            title='Tạo đơn hàng'
                            onClose={() => setShowModal(false)}
                            show={showModal}
                        >
                            <div className='flex justify-between items-center gap-5 w-[600px] h-72'>
                                <div className='w-full'>
                                    <div className='flex flex-col text-center  px-5 items-center gap-5 w-full h-32 hover:text-primary hover:border-primary'
                                    onClick={() => { router.push('/admin/orders/create'),setShowModal(false)}}>
                                    <div className='w-[100px] h-[100px]'><Image src={single} alt="" width={100} height={100} layout="responsive" /></div>
                                    <div className='flex-col flex'>
                                        <span className='text-lg font-medium'>
                                            Tạo đơn hàng mới
                                        </span>
                                        <span className='text-gray-400'>
                                            Tạo đơn theo từng bước
                                        </span>
                                    </div>
                                </div>
                                </div>
                                <div className='w-full'>
                                    <div className='flex flex-col text-center  px-5 items-center gap-5  h-32 hover:text-primary hover:border-primary'
                                        onClick={() => { router.push('/admin/orders/create'),setShowModal(false)}}>
                                        <div className='w-[100px] h-[100px]'><Image src={mass} alt="" width={100} height={100} layout="responsive" /></div>
                                        <div className='flex-col flex'>
                                            <span className='text-lg font-medium'>
                                                Tạo nhiều đơn hàng
                                            </span>
                                            <span className='text-gray-400'>
                                                Tạo nhiều đơn hàng bằng file excel
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <ul className='cursor-pointer'>
                            {navsAdmin.map((nav, index) => (
                                <li key={index} onClick={() => selectParent(index)}>
                                    {nav?.to ? (
                                        <Link href={nav?.to}>
                                            <a>
                                                <div className='flex justify-between items-center text-sm hover:bg-gray-100 p-3'>
                                                    <span>{nav?.name}</span>
                                                    {!nav?.to ? (activeParent == index ? <ChevronUpIcon className='h-5 w-5' /> : <ChevronUpIcon className='h-5 w-5 rotate-180' />) : null}
                                                </div>
                                            </a>
                                        </Link>
                                    ) : (
                                        <div className='flex justify-between items-center text-sm hover:bg-gray-100 p-3'>
                                            <span>{nav?.name}</span>
                                            {!nav?.to ? (activeParent == index ? <ChevronUpIcon className='h-5 w-5' /> : <ChevronUpIcon className='h-5 w-5 rotate-180' />) : null}
                                        </div>
                                    )}
                                    {/* {nav?.children && activeParent == index && (
                                        <ul>
                                            {nav.children.map((c, i) => (
                                                <Link href={c.to} key={i}>
                                                    <a><li className='px-5 py-3 hover:bg-gray-100 text-sm' key={i}>{c.name}</li></a>
                                                </Link>
                                            ))}
                                        </ul>
                                    )} */}
                                </li>
                            ))}
                            <li className='p-3 flex gap-5 items-center text-sm hover:bg-gray-100' onClick={logout}>
                                <LogoutIcon className='w-5 h-5' />
                                <span>Đăng xuất</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navigation