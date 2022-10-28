import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../../layouts/admin'
import { usePrincipal } from '../../../library/usePrincipal';
import useAxios from '../../../library/useAxios';
import { toast } from 'react-toastify';

const ChangePassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    });
    const { response, error, loading, fetchData } = useAxios()
    const { authentication, principal, login, logout, reset } = usePrincipal()

    const handleChangePassword = async () => {
        setIsLoading(true);

        if(data?.newPassword !== data?.confirmPassword) {
            toast.error('New password and confirm password not match')
            return
        }

        if(data?.password === data?.newPassword) {
            toast.error('New password and old password not match')
            return
        }

        if(authentication && principal) {
            await fetchData(`/user/changePassword/${principal?.id}`, {method:'PATCH',data: data}).then((res: any) => {
                if (res?.status < 300) {
                    toast.success('Cập nhật thành công')
                }
            }).catch((err) => {
                toast.error('Cập nhật thất bại');
            }).finally(() => {
                setIsLoading(false);
            })
        }
    }

    const handleChange = ({ target: { name, value } }: any) => {
        setData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <div className='bg-gray-100 space-y-5'>
                <div className='shadow flex'>
                    <div className='relative px-10 py-5'>
                        <form className='space-y-2'>
                            <div>
                                <label>Mật khẩu cũ:</label>
                                <input type='password' name='password' onChange={handleChange}  />
                            </div>
                            <div>
                                <label>Mật khẩu mới:</label>
                                <input type='password'  name='newPassword'  onChange={handleChange} />
                            </div>
                            <div>
                                <label>Xác nhận mật khẩu mới:</label>
                                <input type='password' name='confirmPassword'  onChange={handleChange}  />
                            </div>
                            <div>
                                <button 
                                    onClick={handleChangePassword}
                                    className='bg-primary text-sm float-right border rounded relative flex justify-center items-center h-10 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle'>
                                    <span className='text-white px-6'>Cập nhật</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword

ChangePassword.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}