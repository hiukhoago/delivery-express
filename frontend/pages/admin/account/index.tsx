import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Modal from '../../../components/supports/modal'
import LayoutAdmin from '../../../layouts/admin'
import useAxios from '../../../library/useAxios'
import { usePrincipal } from '../../../library/usePrincipal'
import { User } from '../../../shared/accounts.interface'
import EditProfile from './edit'
import ChangePassword from './ChangePassword';
import { Query } from '../../../shared/interface';
import { ChevronRightIcon, PlusCircleIcon, PrinterIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline';
import { formatVND, getStateLabelBg, toLocaleString } from '../../../library/utility';
import Deposit from '../../../components/admin/deposit'
import { Activity, ActivityState, ActivityType } from '../../../shared/actitivty.interface'

const Profile = () => {
    const router = useRouter()
    const { response, error, loading, fetchData } = useAxios()

    const [data, setData] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);
    const { authentication, principal, login, logout, reset } = usePrincipal()
    const [showModalEditProfile, setShowModalEditProfile] = useState(false);
    const [showModalChangePassword, setShowModalChangePassword] = useState(false);
    const [showModalDeposit, setShowModalDeposit] = useState(false);
   
    const [query, setQuery] = useState<Query>({ filters: { state: '',activityType : ActivityType.DEPOSIT }, pageable: { page: 0, size: 10, maxPage: 1000, sort: [{ field: 'createdAt', order: 'd' }] } })

    useEffect(() => {
        setIsLoading(true);
        if (authentication) {
            fetchData('/auth', { method: 'GET' }).then((res) => {
                if (res?.status === 200) {
                    setData(res.data.user)
                }
                setIsLoading(false);
            })
        }

        return () => {
            setData(undefined)
            setIsLoading(false);
        }
    }, [authentication, query])





    return (
        <>
            <div className="h-full space-y-5 ">
                <div className='bg-white rounded-xl p-8'>
                    <div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='text-xl font-medium text-gray-800 h-8 flex items-center'>
                                <span className='mr-2'>Thông tin tài khoản</span>
                            </div>
                            <div className='space-x-5'>
                                <button
                                    onClick={() => setShowModalEditProfile(true)}
                                    className='text-sm border rounded relative inline-flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer text-gray-800 box-border select-none align-middle'><span className='mx-2'>Cập nhật thông tin</span></button>
                                <button
                                    onClick={() => setShowModalChangePassword(true)}
                                    className='text-sm border rounded relative inline-flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer text-gray-800 box-border select-none align-middle'><span className='mx-2'>Đổi mật khẩu</span></button>
                            </div>
                        </div>
                        <div className='text-sm pb-4'>
                            <span className='text-gray-500'>User ID:</span>
                            <span className='text-gray-800 ml-2'>#{data?.id}</span>
                        </div>
                        <div className='text-sm pb-4'>
                            <span className='text-gray-500'>Email:</span>
                            <span className='text-gray-800 ml-2'>{data?.email}</span>
                        </div>
                        <div className='text-sm pb-4'>
                            <span className='text-gray-500'>Họ và tên:</span>
                            <span className='text-gray-800 ml-2'>{data?.name}</span>
                        </div>
                        <div className='text-sm pb-4'>
                            <span className='text-gray-500'>Số điện thoại:</span>
                            <span className='text-gray-800 ml-2'>{data?.phone}</span>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full">
                        <div className="relative p-0 w-full h-48 m-auto ml-0 text-center overflow-hidden max-w-lg rounded-t-xl bg-cover bg-top bg-no-repeat bg-[url('../assets/images/banner/card2.jpg')]">
                            <div className=''>
                                <div className="absolute text-white font-medium text-2xl leading-7 text-left bottom-16 left-5">
                                    <div className="text-xs font-weight-bold">Tài khoản chính</div>
                                    <div className='font-bold'>{formatVND(data?.wallet?.balance ?? 0)}</div>
                                </div>
                                <div className="absolute font-medium text-sm text-white text-left bottom-8 left-5">
                                    <div className="mr-1 font-normal">Tài khoản khuyến mãi <span className='font-bold'>{formatVND(0)}</span> </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl m-auto ml-0 bg-white">
                            <ul className="overflow-hidden bg-white rounded-br-xl rounded-bl-xl justify-center list-none p-0 text-left">
                                <li className="outline-none">
                                    <div
                                        onClick={() => setShowModalDeposit(true)}
                                        className="p-4 flex cursor-pointer items-center relative max-h-12 justify-between">
                                        <div className=" flex items-center font-weight-bold text-primary">
                                            <span className="inline-block align-middle font-medium text-sm mx-2"> <PlusCircleIcon className='h-7 w-7' /></span>
                                            <div>Nạp tiền vào tài khoản</div>
                                        </div>
                                        <div className="inline-block align-middle font-medium text-sm text-primary"> <ChevronRightIcon className='h-7 w-7' /></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl ml-3 w-full">
                        <div className="text-xl font-medium leading-none font-weight-bold p-4 ">Tài khoản COD</div>
                        <hr className="v-divider theme--light" />
                        <div className="flex pl-4 pt-4">
                            <div className="flex my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' fill="none" viewBox="0 0 40 40"><circle fill="#D1E8FF" r="20" cy="20" cx="20"></circle><path fill="url(#__29XfHHj__paint0_linear_29250_182302)" d="M23.7481 20H13.1231C12.7917 20.0003 12.4739 20.1321 12.2396 20.3665C12.0052 20.6008 11.8734 20.9186 11.873 21.25V30C11.8731 30.1658 11.9389 30.3247 12.0561 30.4419C12.1733 30.5591 12.3323 30.625 12.4981 30.625H24.3731C24.5388 30.625 24.6978 30.5591 24.815 30.4419C24.9322 30.3247 24.998 30.1658 24.998 30V21.25C24.9977 20.9186 24.8659 20.6008 24.6316 20.3665C24.3972 20.1321 24.0795 20.0003 23.7481 20V20Z"></path><path fill="url(#__29XfHHj__paint1_linear_29250_182302)" d="M16.877 20V23.437C16.8769 23.4923 16.8916 23.5466 16.9195 23.5944C16.9473 23.6422 16.9873 23.6817 17.0355 23.709C17.0836 23.7362 17.1381 23.7502 17.1934 23.7495C17.2487 23.7488 17.3028 23.7335 17.3502 23.705L18.4394 23.0514L19.5287 23.705C19.5761 23.7335 19.6302 23.7488 19.6855 23.7495C19.7408 23.7502 19.7953 23.7362 19.8434 23.709C19.8916 23.6817 19.9316 23.6422 19.9594 23.5944C19.9873 23.5466 20.0019 23.4923 20.0019 23.437V20H16.877Z"></path><path fill="url(#__29XfHHj__paint2_linear_29250_182302)" d="M26.7651 28.8235C26.6257 28.4557 26.365 28.1464 26.0262 27.9467C25.6873 27.7469 25.2905 27.6687 24.9011 27.7249L20.3726 28.3961C20.3687 28.049 20.2581 27.7115 20.0559 27.4293C19.8537 27.1471 19.5697 26.9339 19.2423 26.8185L15.3506 25.5432C14.6432 25.313 13.8806 25.3151 13.1744 25.5491L9.17727 26.883C9.05286 26.9245 8.94465 27.0041 8.86797 27.1105C8.79129 27.2169 8.75002 27.3447 8.75 27.4758V32.1095C8.75002 32.2003 8.76982 32.29 8.80802 32.3724C8.84622 32.4547 8.9019 32.5278 8.9712 32.5865C9.0405 32.6451 9.12175 32.688 9.2093 32.7121C9.29684 32.7362 9.38859 32.7409 9.47814 32.726L12.413 32.2343C12.6284 32.1983 12.8496 32.2316 13.0447 32.3294L14.9628 33.2884C15.4762 33.5468 16.0358 33.7009 16.6092 33.7416C17.1826 33.7824 17.7584 33.709 18.3032 33.5258L25.6978 31.0609C25.9173 30.9877 26.1198 30.871 26.2932 30.7178C26.4666 30.5645 26.6073 30.3779 26.707 30.169C26.8066 29.9602 26.8631 29.7334 26.8732 29.5022C26.8832 29.271 26.8465 29.0402 26.7652 28.8235H26.7651Z"></path><path fill="url(#__29XfHHj__paint3_linear_29250_182302)" d="M8.74807 25.3135H7.49803C6.80768 25.3135 6.24805 25.8731 6.24805 26.5635V32.1885C6.24805 32.8789 6.80768 33.4385 7.49803 33.4385H8.74807C9.43841 33.4385 9.99805 32.8789 9.99805 32.1885V26.5635C9.99805 25.8731 9.43841 25.3135 8.74807 25.3135Z"></path><path fill="url(#__29XfHHj__paint4_linear_29250_182302)" d="M30.7596 8.15522L22.7151 6.36629C21.7252 6.13217 20.6847 6.25089 19.7729 6.70197L17.3376 7.81848C16.767 8.1049 16.2655 8.512 15.8679 9.01156L14.3991 10.8604C14.326 10.9525 14.2804 11.0633 14.2675 11.1801C14.2545 11.2969 14.2748 11.415 14.3259 11.5208C14.377 11.6266 14.4569 11.7159 14.5564 11.7784C14.6559 11.8409 14.7711 11.8741 14.8886 11.8741H30.6237C30.7895 11.8741 30.9484 11.8083 31.0656 11.6911C31.1828 11.5739 31.2487 11.415 31.2488 11.2493V8.76524C31.2488 8.62307 31.2003 8.48516 31.1114 8.37426C31.0224 8.26335 30.8983 8.18609 30.7596 8.15522V8.15522Z"></path><path fill="url(#__29XfHHj__paint5_linear_29250_182302)" d="M26.2481 10.625H13.123C12.4327 10.625 11.873 11.1846 11.873 11.875V17.5C11.873 18.1904 12.4327 18.75 13.123 18.75H26.2481C26.9384 18.75 27.4981 18.1904 27.4981 17.5V11.875C27.4981 11.1846 26.9384 10.625 26.2481 10.625Z"></path><path fill="url(#__29XfHHj__paint6_linear_29250_182302)" d="M15.625 17.1885H14.0625C13.8968 17.1885 13.7378 17.1226 13.6206 17.0054C13.5034 16.8882 13.4375 16.7292 13.4375 16.5635V12.8135C13.4375 12.6477 13.5034 12.4888 13.6206 12.3715C13.7378 12.2543 13.8968 12.1885 14.0625 12.1885H15.625C15.7076 12.1877 15.7895 12.2033 15.866 12.2343C15.9425 12.2654 16.0122 12.3113 16.0708 12.3694C16.1295 12.4275 16.1761 12.4967 16.2079 12.5729C16.2397 12.6491 16.2561 12.7309 16.2561 12.8135C16.2561 12.8961 16.2397 12.9779 16.2079 13.0541C16.1761 13.1303 16.1295 13.1995 16.0708 13.2576C16.0122 13.3157 15.9425 13.3616 15.866 13.3927C15.7895 13.4237 15.7076 13.4393 15.625 13.4385H14.6875V15.9385H15.625C15.7076 15.9377 15.7895 15.9533 15.866 15.9843C15.9425 16.0154 16.0122 16.0613 16.0708 16.1194C16.1295 16.1775 16.1761 16.2467 16.2079 16.3229C16.2397 16.3991 16.2561 16.4809 16.2561 16.5635C16.2561 16.6461 16.2397 16.7279 16.2079 16.8041C16.1761 16.8803 16.1295 16.9495 16.0708 17.0076C16.0122 17.0657 15.9425 17.1116 15.866 17.1427C15.7895 17.1737 15.7076 17.1893 15.625 17.1885V17.1885Z"></path><path fill="url(#__29XfHHj__paint7_linear_29250_182302)" d="M23.7502 17.1885H25.3127C25.4785 17.1885 25.6375 17.1226 25.7547 17.0054C25.8719 16.8882 25.9377 16.7292 25.9377 16.5635V12.8135C25.9377 12.6477 25.8718 12.4888 25.7546 12.3716C25.6374 12.2544 25.4785 12.1885 25.3127 12.1885H23.7502C23.6676 12.1877 23.5857 12.2033 23.5092 12.2343C23.4326 12.2654 23.363 12.3113 23.3044 12.3694C23.2457 12.4275 23.1991 12.4967 23.1673 12.5729C23.1355 12.6491 23.1191 12.7309 23.1191 12.8135C23.1191 12.8961 23.1355 12.9779 23.1673 13.0541C23.1991 13.1303 23.2457 13.1995 23.3044 13.2576C23.363 13.3157 23.4326 13.3616 23.5092 13.3927C23.5857 13.4237 23.6676 13.4393 23.7502 13.4385H24.6877V15.9385H23.7502C23.6676 15.9377 23.5857 15.9533 23.5092 15.9843C23.4326 16.0154 23.363 16.0613 23.3044 16.1194C23.2457 16.1775 23.1991 16.2467 23.1673 16.3229C23.1355 16.3991 23.1191 16.4809 23.1191 16.5635C23.1191 16.6461 23.1355 16.7279 23.1673 16.8041C23.1991 16.8803 23.2457 16.9495 23.3044 17.0076C23.363 17.0657 23.4326 17.1116 23.5092 17.1427C23.5857 17.1737 23.6676 17.1893 23.7502 17.1885V17.1885Z"></path><path fill="url(#__29XfHHj__paint8_linear_29250_182302)" d="M19.6875 17.1885C21.0682 17.1885 22.1875 16.0692 22.1875 14.6885C22.1875 13.3078 21.0682 12.1885 19.6875 12.1885C18.3068 12.1885 17.1875 13.3078 17.1875 14.6885C17.1875 16.0692 18.3068 17.1885 19.6875 17.1885Z"></path><path fill="url(#__29XfHHj__paint9_linear_29250_182302)" d="M30.6262 9.37598H25.9387C25.8104 9.37603 25.6852 9.41553 25.5801 9.48912C25.475 9.56271 25.3951 9.66683 25.3512 9.78736L24.9011 11.0254C24.7891 11.3312 24.5998 11.6026 24.3515 11.8133C24.1033 12.024 23.8046 12.1667 23.4848 12.2275L19.3656 12.9998C19.0408 13.0601 18.7502 13.2397 18.551 13.5032C18.3518 13.7668 18.2583 14.0953 18.2889 14.4243C18.3195 14.7533 18.4719 15.0589 18.7163 15.2813C18.9607 15.5036 19.2794 15.6265 19.6098 15.6259H26.0757C26.6914 15.6268 27.3002 15.4969 27.8619 15.2447L30.881 13.897C30.9912 13.8478 31.0849 13.7677 31.1506 13.6665C31.2163 13.5652 31.2512 13.447 31.2512 13.3263V10.0009C31.2512 9.83518 31.1853 9.67622 31.0681 9.55902C30.9509 9.44182 30.7919 9.37598 30.6262 9.37598V9.37598Z"></path><path fill="url(#__29XfHHj__paint10_linear_29250_182302)" d="M32.502 6.875H31.2519C30.5616 6.875 30.002 7.43464 30.002 8.12498V13.75C30.002 14.4404 30.5616 15 31.2519 15H32.502C33.1923 15 33.752 14.4404 33.752 13.75V8.12498C33.752 7.43464 33.1923 6.875 32.502 6.875Z"></path><defs><linearGradient gradientUnits="userSpaceOnUse" y2="28.6627" x2="18.4355" y1="19.9665" x1="18.4355" id="__29XfHHj__paint0_linear_29250_182302"><stop stopColor="#FED200"></stop><stop stopColor="#F59815" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="23.9592" x2="18.4394" y1="20.1172" x1="18.4394" id="__29XfHHj__paint1_linear_29250_182302"><stop stopColor="#FD9B02"></stop><stop stopColor="#FF7302" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="33.5274" x2="17.813" y1="25.6922" x1="17.813" id="__29XfHHj__paint2_linear_29250_182302"><stop stopColor="#F1D2BD"></stop><stop stopColor="#FEB592" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="35.318" x2="4.63996" y1="27.4083" x1="10.413" id="__29XfHHj__paint3_linear_29250_182302"><stop stopColor="#87A8FC"></stop><stop stopColor="#0148FE" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="987.904" x2="5161.73" y1="112.321" x1="5161.73" id="__29XfHHj__paint4_linear_29250_182302"><stop stopColor="#F1D2BD"></stop><stop stopColor="#FEB592" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="3386.67" x2="4705.21" y1="852.759" x1="1812.58" id="__29XfHHj__paint5_linear_29250_182302"><stop stopColor="#34CA82"></stop><stop stopColor="#37A477" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="20.4217" x2="26.182" y1="12.8506" x1="11.2092" id="__29XfHHj__paint6_linear_29250_182302"><stop stopColor="#37AA79"></stop><stop stopColor="#398A70" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="587.555" x2="1253.13" y1="349.131" x1="416.691" id="__29XfHHj__paint7_linear_29250_182302"><stop stopColor="#37AA79"></stop><stop stopColor="#398A70" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="1172.43" x2="1906.24" y1="507.062" x1="638.187" id="__29XfHHj__paint8_linear_29250_182302"><stop stopColor="#37AA79"></stop><stop stopColor="#398A70" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="1100.08" x2="4393.16" y1="127.232" x1="4393.16" id="__29XfHHj__paint9_linear_29250_182302"><stop stopColor="#F1D2BD"></stop><stop stopColor="#FEB592" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="16.8796" x2="28.3939" y1="8.96984" x1="34.1669" id="__29XfHHj__paint10_linear_29250_182302"><stop stopColor="#87A8FC"></stop><stop stopColor="#0148FE" offset="1"></stop></linearGradient></defs></svg>
                            </div>
                            <div className="flex grow">
                                <div className="flex-col flex ml-3"><span className="font-bold text-lg">Số dư hiện tại</span>
                                    <div className="withdraw-amount">
                                        <div className="font-bold">{formatVND(data?.wallet?.balance ?? 0)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center p-4 mt-2">
                            <div className="max-w-full w-full overflow-hidden flex">
                                <button className="m-0 w-full bg-white hover:bg-gray-300">
                                    <span className="items-center whitespace-no-wrap text-primary flex justify-center p-2 "><span><PrinterIcon className='h-7 w-7 text-primary' /></span>Rút tiền</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl ml-3 w-full">
                        <div className="text-xl font-medium leading-none font-weight-bold p-4">Tài khoản khác</div>
                        <hr className="v-divider theme--light" />
                        <div className="flex pl-4 pt-4">
                            <div className="flex my-auto">
                                <div className='flex'>
                                    <div className='flex items-center'>
                                        <LibraryIcon className='h-8 w-8 text-primary' />
                                        <div className="flex font-weight-bold px-4 text-3xl">
                                            Bank Account
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className='text-sm border rounded relative inline-flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border bg-gray-200 select-none align-middle'><span className='mx-4 text-primary'>Thêm</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title='Thông tin tài khoản'
                onClose={() => setShowModalEditProfile(false)}
                show={showModalEditProfile}
            >
                <EditProfile />
            </Modal>
            <Modal
                title='Đổi mật khẩu'
                onClose={() => setShowModalChangePassword(false)}
                show={showModalChangePassword}
            >
                <ChangePassword />
            </Modal>
            <Modal
                title='Nạp tiền'
                onClose={() => setShowModalDeposit(false)}
                show={showModalDeposit}
            >
                <Deposit />
            </Modal>
        </>

    )
}

export default Profile

Profile.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}


