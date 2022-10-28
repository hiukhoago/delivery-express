import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import avatar from '../../../assets/images/customer/ahamart-service.png';
import LayoutAdmin from '../../../layouts/admin'
import { usePrincipal } from '../../../library/usePrincipal';
import useAxios from '../../../library/useAxios';
import { User } from '../../../shared/accounts.interface';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

const EditProfile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Pick<User, 'id' | 'name' | 'phone' | 'email' | 'avatar'>>();
    const { response, error, loading, fetchData } = useAxios()
    const { authentication, principal, login, logout, reset } = usePrincipal()
    const [avatar,setAvatar] = useState<File>()
    const [checkAvatar,setCheckAvatar] = useState('')

    useEffect(() => {
        setIsLoading(true);
        if (authentication) {
            fetchData('/auth').then((res) => {
                console.log('res', res)
                if (res?.status === 200) {
                    setData(res.data.user)
                }
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
            })
        }

        return () => {
            setIsLoading(false);
        }
    }, [authentication])

    const handleChange = ({ target: { name, value } }: any) => {
        setData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdateProfile = async () => {
        setIsLoading(true);
        await fetchData(`/user/${data?.id}`, { method: 'PATCH', data: data }).then((res) => {
            if (res?.status === 200) {
                toast.success('Cập nhật thành công');
            }
        }).then(() => {
            setIsLoading(false);
        }).catch((err) => {
            toast.error('Cập nhật thất bại');
            setIsLoading(false);
        }).finally(() => {
            setIsLoading(false);
        }
        )
    }

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        if (!fileList) return console.log('nulllllllllllllllll');
        setAvatar(fileList[0]);
    }

    const handleUpload = async () => {
        await fetchData('/auth/upload', { method: 'POST',data: avatar}).then((res) => {
            if (res?.status === 200) {
                setData(res.data.user)
                toast.success('Cập nhật ảnh thành công')
            }

        }).catch((err) => {
            toast.error('Cập nhật thất bại');

        })
    }

    const handelCheckAvatar = async () => {
        if(data?.avatar==='null'){
            data.avatar = 'avatar-default.jpg'
        }
        return data?.avatar
    }

    return (
        <>
            <div className='bg-gray-100 space-y-5'>
                <div className='shadow flex'>
                    <div className='relative px-10 py-5'>
                        <form onSubmit={handleUpdateProfile} className='space-y-2'>
                            <div className='flex justify-start items-center'>
                                {/* <form> */}
                                    <img src={`http://localhost:3030/api/auth/${data?.avatar}`} width={200} height={200} className="rounded-full m-5" />
                                    <div>
                                        <input
                                            type="file"
                                            name="avatar"
                                            id="avatar"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            // onChange={(e)=>{setAvatar("avatar", e.currentTarget.files[0]);}}
                                            // onChange={(e) => {
                                            //     const fileReader = new FileReader();
                                            //     fileReader.onload = () => {
                                            //       if (fileReader.readyState === 2) {
                                            //         setAvatar('avatar', fileReader.result);
                                            //         setAvatarPreview(fileReader.result);
                                            //       }
                                            //     };
                                            //     fileReader.readAsDataURL(e.target.files[0]);
                                            //   }}
                                        />
                                        <button
                                            onClick={()=>handleUpload()}
                                            className='text-sm border rounded relative inline-flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer text-gray-800 box-border select-none align-middle mt-10'>
                                            <span className='px-6'>Cập nhật ảnh</span>
                                        </button>
                                    </div>
                                {/* </form> */}
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type='text' name='email' disabled defaultValue={data?.email} />
                            </div>
                            <div>
                                <label>Họ và tên:</label>
                                <input type='text' name='name' defaultValue={data?.name} onChange={handleChange} onFocus={(e) => e.target.value = ''} />
                            </div>
                            <div>
                                <label>Số điện thoại:</label>
                                <input type='text' name='phone' defaultValue={data?.phone} onChange={handleChange} onFocus={(e) => e.target.value = ''} />
                            </div>
                            <div>
                                <button 
                                type='button'
                                onClick={handleUpdateProfile}
                                className='bg-primary text-sm float-right border rounded relative flex justify-center items-center h-10 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle'>
                                    <span className='text-white px-6'>Cập nhật</span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div >
            </div>
        </>
    )
}

export default EditProfile

EditProfile.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}