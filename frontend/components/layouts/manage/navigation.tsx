import React, { useState } from 'react'
import { navsManage } from '../../../data';
import Link from 'next/link';
import { LogoutIcon } from '@heroicons/react/outline';
import { usePrincipal } from '../../../library/usePrincipal';
const Navigation = () => {
    const [activeParent, setActiveParent] = useState<number>()
    const {logout,authentication} = usePrincipal()
    


    const selectParent = (i: number) => {
        activeParent === i ? setActiveParent(undefined) : setActiveParent(i)
    }

    return (
        <>
            <div className='w-56 rounded-sm min-w-[224px] max-w-[224px] shadow z-10'>
                <div className='w-full h-screen flex-col flex'>
                    <div className='w-full flex flex-col'>
                        <Link href='/manage'>
                            <a>
                                <h4 className='text-center text-secondary font-bold py-5'>Delivery Express</h4>
                            </a>
                        </Link>                    </div>
                    <div>
                        <ul>
                            {navsManage.map((nav, index) => (
                                <Link href={nav?.to} key={index}>
                                    <a>
                                        <li onClick={() => selectParent(index)}>
                                            <div className={activeParent === index ? `bg-secondary text-white flex justify-between items-center text-sm p-3` : 'flex justify-between items-center text-sm hover:bg-gray-100 p-3'}>
                                                <span>{nav?.name}</span>
                                            </div>
                                        </li>
                                    </a>
                                </Link>
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