import React, { useState } from 'react'
import LayoutManage from '../../../layouts/manage'
import { toast } from 'react-toastify';
import Link from 'next/link'
import useAxios from '../../../library/useAxios';
import Axios from 'axios'
import { useFormik } from 'formik';
import { AccountSchema } from '../../../components/supports/Validation';
import { AuthorityRole } from '../../../shared/enum';

const AddAccount = () => {
    const { response, error, loading, fetchData } = useAxios();
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            email: "",
            phone: "",
            isAvaliable: false,
            authorities: [AuthorityRole.Driver],
        },
        validationSchema: AccountSchema,
        onSubmit: async (values) => {
            setIsLoading(true);
            await fetchData('/auth/up', { method: 'POST', data: formik.values }).then((res: any) => {
                if (res?.status === 201) {
                    toast.success('Thêm thành công')
                }
                formik.resetForm()
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                console.log(err)
            })
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='bg-gray-100 space-y-5'>
                <div className='px-10 py-5 space-y-5 bg-white rounded-md'>
                    <div className='grid grid-cols-2 gap-10 w-full'>
                        <div>
                            <label htmlFor='name'>Họ và tên
                            <input
                                type="text"
                                placeholder='Vui lòng nhập thông tin'
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.errors.name && (
                                <p className='text-danger py-2'>{formik.errors.name}</p>
                            )}
                            </label>
                        </div>
                        <div>
                            <label htmlFor='password'>Mật khẩu
                            <input
                                type="password"
                                placeholder='Vui lòng nhập thông tin'
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password && (
                                <p className='text-danger py-2'>{formik.errors.password}</p>
                            )}
                            </label>
                           
                        </div>
                        <div>
                            <label htmlFor='email'>Email
                            <input
                                type='email'
                                placeholder='Vui lòng nhập thông tin'
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email && (
                                <p className='text-danger py-2'>{formik.errors.email}</p>
                            )}</label>
                            
                        </div>
                        <div>
                            <label htmlFor='phone'>Điện thoại
                            <input
                                placeholder='Số điện thoại'
                                name="phone"
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            />
                            {formik.errors.phone && (
                                <p className='text-danger py-2'>{formik.errors.phone}</p>
                            )}</label>
                            
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <label className='!m-0' htmlFor='isAvaliable'>Roles</label>
                            <select 
                                onChange={(e) => {formik.handleChange}}
                                name="authorities"
                                className='border w-full text-left h-8 px-2 rounded'>
                                    <option value={[AuthorityRole.User]} >User</option>
                                    <option value={[AuthorityRole.Driver]}>Tài xế</option>
                                </select>
                        </div>
                        <div className='flex flex-row-reverse items-center justify-end gap-2'>
                            <label className='!m-0' htmlFor='isAvaliable'>Hoạt động
                            <input
                                type='checkbox'
                                name='isAvaliable'
                            /></label>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='bg-primary text-white text-sm border rounded flex justify-center items-center h-8  whitespace-no-wrap cursor-pointer px-10 py-5'>
                        Thêm
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddAccount

AddAccount.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}