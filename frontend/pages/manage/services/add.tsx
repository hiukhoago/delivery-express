import LayoutManage from '../../../layouts/manage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link'
import useAxios from '../../../library/useAxios';
import { useFormik } from 'formik';
import { ServiceSchema } from '../../../components/supports/Validation';

const AddTypeDelivery = () => {

    const [code, setCode] = useState<any>('');
    const [name, setName] = useState<any>('');
    const [description, setDescription] = useState<any>('');
    const [fee, setFee] = useState<any>('');
    const [status, setStatus] = useState(true);

    const formik = useFormik({
        initialValues: {
            code: "",
            name: "",
            fee: "",
            content: ""
        },
        validationSchema: ServiceSchema,
        onSubmit: (values) => {
            fetchData('services', { method: 'POST', data: values }).then((res: any) => {
                if (res?.status === 201) {
                    toast.success('Thêm thành công')
                    setName('');
                    setCode('');
                    setFee('');
                    setStatus(true);
                    setDescription('');
                }
            }).catch(err => {
                console.log(err)
            })
        }
    });

    const { response, error, loading, fetchData } = useAxios();

    const clearAll = () => {
        setName('');
        setCode('');
        setFee('');
        setStatus(true);
        setDescription('');
    }

    return (
        <div className='overflow-auto bg-gray-100 pl-4'>
            <form onSubmit={formik.handleSubmit}>
                <div className='bg-gray-100 space-y-5'>
                    <div className='px-10 py-5 bg-white rounded-md'>
                        <h4 className='text-gray-900 py-3 font-medium'>
                            Thêm tin dịch vụ vận chuyển mới
                        </h4>
                        <div className='grid grid-cols-2 gap-10 w-full'>
                            <div className='flex flex-col justify-start py-2'>
                                <span className='block text-sm font-bold text-gray-700 leading-6'>
                                    Mã dịch vụ
                                </span>
                                <span className='flex-grow flex flex-col justify-center'>
                                    <span className='rounded flex leading-none border'>
                                        <input
                                            placeholder='Nhập mã dịch vụ vận chuyển'
                                            type="text"
                                            name="code"
                                            onChange={formik.handleChange}
                                            value={formik.values.code}
                                        />
                                    </span>
                                    {formik.errors.code && (
                                        <p className='text-danger p-1'>{formik.errors.code}</p>
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-10 w-full py-2'>
                            <div className='flex flex-col justify-start'>
                                <span className='block text-sm font-bold text-gray-700 leading-6'>
                                    Tên dịch vụ
                                </span>
                                <span className='flex-grow flex flex-col justify-center'>
                                    <span className='rounded flex leading-none border'>
                                        <input
                                            placeholder='Nhập tên dịch vụ vận chuyển'
                                            type="text"
                                            name="name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                    </span>
                                    {formik.errors.name && (
                                        <p className='text-danger p-1'>{formik.errors.name}</p>
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-10 w-full py-2'>
                            <div className='flex flex-col justify-start'>
                                <span className='block text-sm font-bold text-gray-700 leading-6'>
                                    Đơn giá
                                </span>
                                <span className='flex-grow flex flex-col justify-center'>
                                    <span className='rounded flex leading-none border'>
                                        <input
                                            placeholder='Nhập đơn giá'
                                            name="fee"
                                            type='number'
                                            onChange={formik.handleChange}
                                            value={formik.values.fee}
                                        />
                                    </span>
                                    {formik.errors.fee && (
                                        <p className='text-danger p-1'>{formik.errors.fee}</p>
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-row py-2'>
                            <span className='flex'>
                                <input
                                    type='checkbox'
                                    className='w-5 h-5 relative rounded-full'
                                    checked
                                />
                            </span>
                            <span className='text-gray-600 leading-8 inline-block pl-3'>
                                Hoạt động
                            </span>
                        </div>
                        <div className='mt-3 mb-20'>
                            <label htmlFor="about" className="block text-sm font-bold text-gray-700 leading-6"> Mô tả </label>
                            <div className="mt-1">
                                <textarea
                                    placeholder="Nội dung tin tức"
                                    name="content"
                                    onChange={formik.handleChange}
                                    value={formik.values.content}
                                >
                                </textarea>
                                {formik.errors.content && (
                                    <p className='text-danger p-1'>{formik.errors.content}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                    <div className='mr-4'>
                        <Link href={`./`}>
                            <button className='bg-danger text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mx-5 px-10 py-5'>
                                Quay lại
                            </button>
                        </Link>
                    </div>
                    <div>
                        <button className=' bg-warning text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle px-10 py-5'
                            onClick={clearAll}>
                            Xóa toàn bộ
                        </button>
                    </div>
                    <div>
                        <button className='bg-blue-600 text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mx-5 px-10 py-5'>
                            Thêm và tiếp tục
                        </button>
                    </div>
                    <div>
                        <button
                            className='bg-primary text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mr-10 px-10 py-5'
                            type='submit'>
                            Thêm
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTypeDelivery

AddTypeDelivery.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}