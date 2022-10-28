import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import { navs } from '../../../data.js'
import Logo from '../../logo';
import { useRouter } from 'next/router';
import { ChevronDownIcon, LogoutIcon, UserCircleIcon } from '@heroicons/react/outline';
import { usePrincipal } from '../../../library/usePrincipal';

const Header = () => {

    const [active, setActive] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const {authentication,logout} = usePrincipal()


    const ref = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const handleActive = (id: number) => {
        setIsOpen(!isOpen)
        active == id ? setIsOpen(true) : setActive(id)
    }

    useEffect(() => {
        const checkClickOutSide = (e: any) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            }
        };
        document.addEventListener('click', checkClickOutSide);
        return () => {
            document.removeEventListener('click', checkClickOutSide);
        };
    }, [isOpen]);


    return (
        <>
            <nav>
                <div className='relative bg-white shadow'>
                    <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-6 lg:py-5 sm:px-2 md:px-5 lg:px-0 md:space-x-10'>
                        <Logo />
                        <div className='hidden lg:flex sm:mx-10 items-center gap-10' ref={ref}>
                            {navs.map((nav, index) => (
                                <div onClick={() => handleActive(index)} className={active == index ? 'text-primary relative md:text-sm  lg:text-lg font-medium' : 'hover:text-primary relative md:text-sm  lg:text-lg font-medium'} key={index}>
                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <Link href={nav.to ?? '/'} >
                                                <a>
                                                    {nav.name}
                                                </a>
                                            </Link>
                                        </div>
                                        {nav.children && (
                                            <ChevronDownIcon className='w-5 h-5' />
                                        )}
                                    </div>
                                    {nav?.children && (
                                        <div className='absolute z-1 px-2 sm:px-0 drop-shadow-xl mt-9'>
                                            <div className={isOpen && active == index ? 'block overflow-hidden w-[360px]' : 'hidden'}>
                                                <ul className='relative grid gap-3 bg-white p-4'>
                                                    {nav?.children?.map((child, index) => (
                                                        <Link href={child.to ?? '/'} key={index}>
                                                            <a>
                                                                <li>{child?.name}</li>
                                                            </a>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:flex items-center justify-end md:flex-shrink-0">
                            {!authentication?.authenticated ? (
                                <button className='button_primary'
                                    onClick={()=>{router.push('authentication/in')}} >Giao hàng ngay
                                </button>
                            )
                                : (
                                    <div className='flex relative'>
                                        <div className='w-8 h-8 bg-primary rounded-full'></div>
                                        <div className='flex justify-between gap-5 px-2 items-center max-w-[100px] truncate overflow-ellipsis'
                                            onMouseLeave={() => setTimeout(() => {
                                                setIsOpenProfile(false)
                                            }, 5000)}
                                            onMouseOver={() => setIsOpenProfile(true)} >
                                            <span>{authentication?.principal?.email}</span>
                                            <ChevronDownIcon className='w-4 h-4' />
                                        </div>
                                        {isOpenProfile && (
                                            <ul className="cursor-pointer absolute top-[68px] w-full space-y-3 p-2 shadow bg-white">
                                                <li className='flex gap-2 items-center p-2 hover:bg-neutral-300 '>
                                                    <UserCircleIcon className='w-5 h-5' />
                                                    <Link href='/admin'>
                                                        <a>Trang cá nhân</a>
                                                    </Link>
                                                </li>
                                                <li className='flex gap-2 items-center p-2 hover:bg-neutral-300 ' onClick={logout}>
                                                    <LogoutIcon className='w-5 h-5' />
                                                    <span>Đăng xuất</span>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header