import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../layouts/admin'
import { TypeDelivery } from '../../shared/type.delivery.interface';
import useAxios from '../../library/useAxios';
import { formatVND } from '../../library/utility';

const Help = () => {
    const [formData, setFormData] = useState<any>({
        quantity:0,
        volume:0,
        serviceId:'',
    })

    const [total, setTotal] = useState<number>()
    const [serviceType, setServiceType] = useState<TypeDelivery[]>([])
    const { response, error, loading, fetchData } = useAxios()
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);
        if(formData.serviceId){
            fetchData(`/service/calculate-fee/${formData.serviceId}`,{method: 'POST', data:formData}).then(res => {
                console.log('res-------------->', res)
                setTotal(res?.data)
            }).catch(err => {
                console.log('err-------------->', err)
                throw err;
            })
        }
    }

    const handleChange = ({ target: { name, value } }: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };
   

    useEffect(() => {
        fetchData('/services', {})
            .then((res) => {
                if (res?.status === 200) {
                    console.log('rés', res?.data)
                    setServiceType(res.data)
                }
            })
    }, [])

   

    return (
        <>
            <div className='overflow-auto shadow h-full mx-auto max-w-6xl z-10'>
                <div className='bg-gray-100 space-y-5'>
                    <div className='px-10 py-5 bg-white rounded-md grid grid-cols-2 gap-10'>
                        <div>
                            <h2 className='text-gray-900 py-3'>Tính Phí Giao Hàng</h2>
                            <form onSubmit={handleSubmit} >
                                <div className='py-5 space-y-3'>
                                    <div className='relative flex justify-between items-center'>
                                        <label className='whitespace-nowrap font-bold '>Số lượng: </label>
                                        <input
                                            className='max-w-[400px]'
                                            placeholder='Nhập số lượng sản phẩm'
                                            type="number"
                                            name="quantity"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='relative flex justify-between items-center'>
                                        <label className='whitespace-nowrap font-bold'>Khối lượng: </label>
                                        <input
                                            className='max-w-[400px]'
                                            placeholder='Nhập khối lượng sản phẩm (KG)'
                                            type="number"
                                            name="volume"
                                            min={0}
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='relative flex justify-between gap-5 items-center'>
                                        <span className='whitespace-nowrap font-bold'>Dịch vụ</span>
                                        <div className='flex items-center max-w-[400px] w-full gap-3'>
                                            <input
                                                placeholder='Dich vu'
                                                readOnly
                                                type="text"
                                                value={serviceType.filter(item => item.id === formData?.serviceId)[0]?.name ?? ''}
                                                onClick={() => document.getElementById('dropDown')?.classList.toggle('hidden')}
                                            />
                                            <div className='hidden z-10 max-w-[400px] top-9 absolute w-full bg-gray-100 overflow-y-auto shadow' id='dropDown'>
                                                <ul className='list-none'>
                                                    {serviceType && serviceType.map((item, index) => (
                                                        <li
                                                            className='px-2 py-1 cursor-pointer bg-white hover:bg-blue-100'
                                                            key={index}
                                                            value={item?.id}
                                                            onClick={() => {
                                                                setFormData((prev: any) => ({...prev, serviceId: item?.id}))
                                                                document.getElementById('dropDown')?.classList.toggle('hidden')
                                                            }}
                                                        >{item.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='relative flex justify-between items-center'>
                                        <label className='whitespace-nowrap font-bold text-primary'>Tổng tiền: </label>
                                        <div className='flex items-center max-w-[400px] w-full gap-3'>
                                            <input
                                                className='max-w-[400px]'
                                                disabled
                                                type="text"
                                                value={formatVND(+(total ?? 0))}
                                            />
                                            <div>
                                                <button
                                                    type='submit'
                                                    className='text-sm h-8 w-20 bg-primary border rounded relative flex justify-center items-center whitespace-no-wrap cursor-pointer text-gray-800 '>
                                                    <span className='mx-2 text-white'>Tính</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <h2 className='text-gray-900 py-3'>Bảng Giá Dịch Vụ</h2>
                            <table className='w-full rounded border-collapse border mt-4'>
                                <thead className='text-gray-700 font-bold leading-4'>
                                    <tr>
                                        <th className='p-3  bg-gray-100 text-left'>Tên dịch vụ</th>
                                        <th className='p-3  bg-gray-100 text-left'>Đơn giá</th>
                                        <th className='p-3  bg-gray-100 text-left'>Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {serviceType && serviceType.map((item, index) => (
                                        <tr key={index}>
                                            <td className='px-3 py-2 '>{item?.name}</td>
                                            <td className='px-3 py-2 '>{formatVND(item?.fee)}/KG</td>
                                            <td className='px-3 py-2 '>{item?.description}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help

Help.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin>{page}</LayoutAdmin>
    )
}
