import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../../layouts/admin';
import Geolocation from '../../../components/supports/geolocation';
import { OrderStatus, ServiceType } from '../../../shared/enum';
import useAxios from '../../../library/useAxios';
import { toast } from 'react-toastify';
import { formatVND } from '../../../library/utility';
import { boolean } from 'yup';
import { usePrincipal } from '../../../library/usePrincipal';


const CreateOrder = () => {

    const { authentication, principal, login, logout, reset } = usePrincipal()

    const [formData, setFormData] = useState<any>()

    const [address1, setAddress1] = useState<any>('')
    const [address2, setAddress2] = useState<any>('')

    const [info1, setInfo1] = useState<any>({ name: '', phone: '', address: '', note: '', addressDetail: '' })
    const [info2, setInfo2] = useState<any>({ name: '', phone: '', address: '', note: '', addressDetail: '' })


    const [items, setItems] = useState<any>(
        {
            name: '',
            volume: '',
            quantity: 0,
        }
    )

    const [note, setNote] = useState<any>({
        isChecked: 0,
        payShippingFee: 0,  // 0: nguoi gui tra~, 1: nguoi nhan tra~
        productValue: 0,
        code: 0,
        codValue: 0,
        pickUpAtPlace: boolean
    })

    const { response, error, loading, fetchData } = useAxios();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
       
                const _ = await fetchData('order', { method: 'POST', data: formData }).then((res: any) => {
                    if (res?.status === 201) {
                        toast.success('Thêm thành công')
                    }
                }).catch(err => {
                    console.log(err)
                    toast.error(`Thêm thất bại,${err.message}`);
                })
    }

    const handleValidate = async (v: any) => {
        if (principal?.wallet) {
            console.log('v', v)
            if (v == 0 && formData?.total) {
                if (formData?.total > principal?.wallet?.balance) {
                    toast.error('Số dư ví không đủ');
                }
            }
            setNote({...note, payShippingFee: v})
        }}

        useEffect(() => {
            if (formData?.product?.quantity, formData?.product?.volume, formData?.serviceId) {
                const data = {
                    quantity: formData?.product?.quantity,
                    volume: formData?.product?.volume,
                }
                if (formData?.serviceId) {
                    fetchData(`/service/calculate-fee/${formData?.serviceId}`, { method: 'POST', data: data }).then((res: any) => {
                        console.log('res?.status', res?.status)
                        if (res?.status < 300) {
                            setFormData({ ...formData, fee: res?.data, total: res?.data + (+note?.cod === 0 ? note?.codValue * 5 / 100 : 0) })
                        }
                    }).catch((err) => {
                        throw new Error(err)
                    })
                }
            }
            setFormData({
                ...formData,
                product: items,
                information: [
                    {
                        ...info1,
                        address: address1,
                    },
                    {
                        ...info2,
                        address: address2,
                    }
                ],
                note: note,
                status: OrderStatus.IDLE
            });


        }, [address1, address2, info1, info2, items, note, formData?.serviceId,note?.payShippingFee])

        console.log('note?.payShippingFee', note?.payShippingFee)

        return (
            <>
                <div className='overflow-auto bg-gray-100 pl-4'>
                    <form onSubmit={handleSubmit} >
                        <div className='bg-gray-100 space-y-5'>
                            <div className='px-10 py-5 bg-white rounded-md'>
                                <h4 className='text-gray-900 py-3 font-medium'>Địa chỉ lấy hàng</h4>
                                <div>
                                    <div className='relative flex justify-between'>
                                        <div className='grid grid-cols-2 gap-10 w-full'>
                                            <div className='flex flex-col justify-start'>
                                                <label htmlFor='name1'>Tên</label>
                                                <input
                                                    placeholder='Vui lòng nhập thông tin'
                                                    type='text'
                                                    onChange={(e) => { setInfo1({ ...info1, name: e.target.value }) }}
                                                    name="name1"
                                                    required
                                                />
                                            </div>
                                            <div className='flex flex-col justify-start'>
                                                <label htmlFor='phone1'>Điện thoại</label>
                                                <input
                                                    name='phone1'
                                                    type='text'
                                                    placeholder='Vui lòng nhập thông tin'
                                                    required
                                                    onChange={(e) => { setInfo1({ ...info1, phone: e.target.value }) }}
                                                />
                                            </div>
                                            <Geolocation value={setAddress1} />
                                            <div className='flex flex-col '>
                                                <label htmlFor='addressDetail1'>Địa chỉ cụ thể</label>
                                                <input
                                                    name='addressDetail1'
                                                    placeholder='Vui lòng nhập thông tin'
                                                    required
                                                    type='text'
                                                    onChange={(e) => { setInfo1({ ...info1, addressDetail: e.target.value }) }}

                                                />
                                            </div>
                                            <div className='flex flex-col justify-start w-full'>
                                                <label htmlFor='note1' >Hướng dẫn giao nhanh</label>
                                                <textarea
                                                    name='note1'
                                                    placeholder='Vui lòng nhập thông tin'
                                                    rows={1}
                                                    onChange={(e) => { setInfo1({ ...info1, note: e.target.value }) }}
                                                >
                                                </textarea>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-10 py-5 bg-white rounded-md'>
                                <h4 className='text-gray-900 py-3'>
                                    Địa chỉ người nhận
                                </h4>
                                <div className='relative flex justify-between'>
                                    <div className='grid grid-cols-2 gap-10 w-full'>
                                        <div className='flex flex-col justify-start'>
                                            <label htmlFor='name2'>Tên</label>
                                            <input
                                                name='name2'
                                                className='border rounded text-sm text-gray-800 h-8 w-full px-3'
                                                placeholder='Vui lòng nhập thông tin'
                                                required
                                                onChange={(e) => { setInfo2({ ...info2, name: e.target.value }) }}
                                            />

                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor='phone2'>Điện thoại</label>
                                            <input
                                                name='phone2'
                                                placeholder='Vui lòng nhập thông tin'
                                                required
                                                type='text'
                                                onChange={(e) => { setInfo2({ ...info2, phone: e.target.value }) }}

                                            />
                                        </div>
                                        <Geolocation value={setAddress2} />

                                        <div className='flex flex-col '>
                                            <label htmlFor='addressDetail2'>Địa chỉ cụ thể</label>
                                            <input
                                                name='addressDetail2'
                                                placeholder='Vui lòng nhập thông tin'
                                                required
                                                type='text'
                                                onChange={(e) => { setInfo2({ ...info2, addressDetail: e.target.value }) }}

                                            />
                                        </div>

                                        <div className='flex flex-col '>
                                            <label htmlFor='note2'>Hướng dẫn giao nhanh</label>
                                            <textarea
                                                name='note2'
                                                placeholder='Vui lòng nhập thông tin'
                                                rows={1}
                                                onChange={(e) => { setInfo2({ ...info2, note: e.target.value }) }}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='px-10 py-5 bg-white rounded-md space-y-5'>
                                <h4 className='text-gray-900 py-3 font-medium'>
                                    Thông tin kiện hàng
                                </h4>
                                <div className='relative flex justify-between'>
                                    <div>
                                        <div className='space-y-5'>
                                            <div className='grid grid-cols-2 gap-10 items-center'>
                                                <div className='flex flex-col justify-start'>
                                                    <label htmlFor='name-product'>Tên sản phẩm</label>
                                                    <input
                                                        name='name-product'
                                                        type='text'
                                                        placeholder='Vui lòng nhập thông tin'
                                                        onChange={(e) => { setItems({ ...items, name: e.target.value }) }}
                                                        required
                                                    />
                                                </div>
                                                <div className='flex gap-3 items-center w-full'>
                                                    <div className='flex flex-col'>
                                                        <label htmlFor='volume'>Tổng khối lượng (KG)</label>
                                                        <input
                                                            placeholder='Nhập khối lượng sản phẩm '
                                                            onChange={(e) => { setItems({ ...items, volume: e.target.value }) }}
                                                            name='volume'
                                                            type='number'
                                                            required
                                                            min={1}
                                                        />
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <label htmlFor='quantity'> Số lượng sản phẩm</label>
                                                        <input
                                                            type="number"
                                                            onChange={(e) => { setItems({ ...items, quantity: e.target.value }) }}
                                                            name='quantity'
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className='space-y-3'>
                                            <div>
                                                <div className='bg-gray-100 rounded-sm border pl-2 py-1'>Thông tin dịch vụ</div>
                                            </div>
                                            <div>
                                                <label htmlFor='cod'>Tiền Thu hộ</label>
                                                <div className='flex items-center gap-5'>
                                                    <label className='w-[150px]'>
                                                        <input
                                                            type="radio"
                                                            name="cod"
                                                            value={0}
                                                            required
                                                            onChange={(e) => { setNote({ ...note, cod: e.target.value }) }}
                                                        />
                                                        <span className='pr-6 pl-2'>Có</span>
                                                    </label>
                                                    <label className='w-[150px]'>
                                                        <input
                                                            type="radio"
                                                            required
                                                            value={1}
                                                            name="cod"
                                                            onChange={(e) => { setNote({ ...note, cod: e.target.value }) }}
                                                        />
                                                        <span className='pr-6 pl-2'>Không</span>
                                                    </label>
                                                    {+note.cod === 0 && (
                                                        <div>
                                                            <label>
                                                                <input
                                                                    type="number"
                                                                    name="codValue"
                                                                    required
                                                                    onChange={(e) => { setNote({ ...note, codValue: e.target.value }) }}
                                                                />
                                                            </label>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                            <div>
                                                <label htmlFor='pickUpAtPlace'>Loại hình gửi hàng</label>
                                                <div className='flex items-center'>
                                                    <label className='w-[200px]'>
                                                        <input
                                                            type="checkbox"
                                                            name="pickUpAtPlace"
                                                            onChange={(e) => { setNote({ ...note, pickUpAtPlace: e.target.checked }) }}
                                                        />
                                                        <span className=' pl-2'>lấy hàng tận nơi</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor='payShippingFee'>Thanh toán cước phí vận chuyển</label>
                                                <div className='flex items-center gap-5'>
                                                    <label className='w-[200px]'>
                                                        <input
                                                            type="radio"
                                                            name="payShippingFee"
                                                            value={0}
                                                            required
                                                            onChange={(e) => {handleValidate(e.target.value)}}
                                                        />
                                                        <span className='pr-6 pl-2'>Người gửi trả phí</span>
                                                    </label>
                                                    <label className='w-[200px]'>
                                                        <input
                                                            type="radio"
                                                            required
                                                            value={1}
                                                            name="payShippingFee"
                                                            onChange={(e) => {handleValidate(e.target.value)}}
                                                        />
                                                        <span className='pr-6 pl-2'>Người nhận trả phí</span>
                                                    </label>
                                                </div>

                                            </div>
                                            <div>
                                                <label className='w-[150px]' htmlFor='isChecked'>Cho kiểm tra hàng</label>
                                                <div className='flex items-center gap-5'>
                                                    <label className='w-[200px]'>
                                                        <input
                                                            name='isChecked'
                                                            type="radio"
                                                            value={0}
                                                            required
                                                            onChange={(e) => { setNote({ ...note, isChecked: e.target.value }) }}
                                                        />
                                                        <span className='pl-2'>Không</span>
                                                    </label>
                                                    <label className='w-[200px]'>
                                                        <input
                                                            name='isChecked'
                                                            type="radio"
                                                            value={1}
                                                            required
                                                            onChange={(e) => { setNote({ ...note, isChecked: e.target.value }) }}
                                                        />
                                                        <span className='pl-2'>Có</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor='productValue'>Giá trị bưu kiện</label>
                                                <input
                                                    placeholder='Vui lòng nhập thông tin'
                                                    type='text'
                                                    value={note.productValue ?? 0}
                                                    onChange={(e) => { setNote({ ...note, productValue: e.target.value }) }}
                                                    onFocus={(e) => { e.target.value = '' }}
                                                    name='parcelValue'
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-10 py-5 mb-5 bg-white rounded-md'>
                                <div className='mb-2 bg-white rounded-sm'>
                                    <h4 className='mb-6 font-medium text-xl leading-6 text-gray-900'>
                                        Phí vận chuyển
                                    </h4>
                                    <div>
                                        <div className='flex gap-10'>
                                            <div className='border'>
                                                <label>
                                                    <div className='flex items-center gap-3 w-[270px] p-3'>
                                                        <input
                                                            type="radio"
                                                            value={'dss'}
                                                            onChange={(e) => { setFormData({ ...formData, serviceId: e.target.value }) }}
                                                            required
                                                            name='serviceId'
                                                        />
                                                        <div>
                                                            <div className='text-primary text-2xl font-medium whitespace-nowrap'>Dịch vụ Tiêu Chuẩn</div>
                                                            <div className='text-gray-700'>DSS(VND)</div>
                                                            <p className='text-gray-700'>Giao trong vòng:<span className='text-black'>3-4 Ngày</span></p>
                                                        </div>
                                                    </div>
                                                </label>

                                            </div>
                                            <div className='border'>
                                                <label>
                                                    <div className='flex items-center gap-3 w-[270px] p-3'>
                                                        <input
                                                            type="radio"
                                                            value={'dfs'}
                                                            onChange={(e) => { setFormData({ ...formData, serviceId: e.target.value }) }}
                                                            required
                                                            name='serviceId'
                                                        />
                                                        <div>
                                                            <div className='text-primary text-2xl font-medium whitespace-nowrap '>Dịch vụ Hỏa Tốc</div>
                                                            <div className='text-gray-700'>DFS(VND)</div>
                                                            <p className='text-gray-700'>Giao trong vòng:<span className='text-black'>1-2 Hours</span></p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-10'>
                                        <div>
                                            <div className='bg-gray-100 rounded-sm border pl-2 py-1'>Phí vân chuyển </div>
                                        </div>
                                        <div className='text-sm leading-4 text-black mt-6 pb-1'>
                                            <p className='mb-3 text-lg'>
                                                Phí vận chuyển(VND):
                                                <span className='ml-1 font-semibold text-primary'>
                                                    {formData?.fee}
                                                </span>
                                            </p>
                                            <p className='mb-3 text-lg'>
                                                Phí thu hộ COD(Vat 5%):
                                                <span className='ml-1 font-semibold text-primary'>
                                                    {(+note?.cod === 0 ? (note?.codValue * 5) / 100 : 0)}
                                                </span>
                                            </p>
                                            <p className='mb-3 text-lg'>
                                                Tổng tiền (VND):
                                                <span className='ml-1 font-semibold text-primary'>
                                                    {formData?.total}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                            <div className='mr-4'>
                                <div>
                                    <button
                                        className='text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer text-gray-800 box-border select-none align-middle'>
                                        <span className='mx-2'>Nhập lại</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='bg-primary text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mx-5'>
                                    <span className='mx-2'>Tạo đơn</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    export default CreateOrder

    CreateOrder.getLayout = function getLayout(page: any) {
        return (
            <LayoutAdmin >{page}</LayoutAdmin>
        )
    }