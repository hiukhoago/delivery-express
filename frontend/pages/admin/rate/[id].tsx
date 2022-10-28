import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../../layouts/admin';
import useAxios from '../../../library/useAxios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { StarIcon } from '@heroicons/react/outline';
import ModalRate from '../../../components/supports/modal';
import Link from 'next/link';
import { Order } from '../../../shared/order.interface';

const AddRate = () => {
    
    const router = useRouter();
    const { id } = router.query

    const [rate, setRate] = useState("");
    const [star, setStar] = useState("5");
    const [formData, setFormData] = useState<any>()
    const [showModal, setShowModal] = useState(false);

    const { response, error, loading, fetchData } = useAxios();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const _ = await fetchData('rate', { method: 'POST', data: formData }).then((res: any) => {
            if (res?.status === 201) {
                toast.success('Đánh giá thành công')
            }
        }).catch(err => {
            console.log(err)
            toast.error(`Đánh giá thất bại,${err.message}`);
        })
        router.back()
    }

    useEffect(() => {
        setFormData({
            ...formData,
            commentUser: rate,
            rating: star,
            orderId: id
        });
    }, [rate,star])
    return (
        <>
            <div className='px-10 py-5 bg-white rounded-md space-y-5'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2>#{id}</h2>
                        <div>
                            <label>Đánh giá sản phẩm</label>
                            <textarea
                                cols={5}
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                            />
                        </div>
                        <div className='flex py-2 justify-between'>
                            <select
                                name="star"
                                value={star}
                                onChange={(e) => setStar(e.target.value)}
                                className='border rounded-sm w-1/4 mr-10 text-gray-700 pl-3'>
                                <option defaultValue={5}>5 sao ( Tuyệt vời )</option>
                                <option value={4}>4 sao ( Tốt )</option>
                                <option value={3}>3 sao ( Bình thường )</option>
                                <option value={2}>2 sao ( Không thích )</option>
                                <option value={1}>1 sao ( Chê )</option>
                            </select>
                            <div>
                                <button
                                    type='submit'
                                    className='text-sm h-10 w-20 bg-primary border rounded relative flex justify-center items-center leading-7 font-medium text-center whitespace-no-wrap cursor-pointer text-gray-800 box-border select-none align-middle'>
                                    <span className='mx-2 text-white'>Đánh giá</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <ModalRate
                    title='Đánh giá đơn hàng'
                    onClose={() => setShowModal(false)}
                    show={showModal}
                >
                    <div className='flex items-center gap-5 w-[600px] h-72'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Đánh giá sản phẩm</label>
                                <textarea
                                    cols={5}
                                    onChange={(e) => setRate(e.target.value)}
                                > </textarea>
                            </div>
                            <div className='flex py-2'>
                                <select
                                    name="star"
                                    value={star}
                                    onChange={(e) => setStar(e.target.value)}
                                    className='border rounded-sm w-1/4 mr-10 text-gray-700 pl-3'>
                                    {/* <option selected>Chọn số sao</option> */}
                                    <option value="5">5 sao ( Tuyệt vời )</option>
                                    <option value="4">4 sao ( Tốt )</option>
                                    <option value="3">3 sao ( Bình thường )</option>
                                    <option value="2">2 sao ( Không thích )</option>
                                    <option value="1">1 sao ( Chê )</option>
                                </select>
                                <div>
                                    <button
                                        type='submit'
                                        className='text-sm h-10 w-20 bg-primary border rounded relative flex justify-center items-center leading-7 font-medium text-center whitespace-no-wrap cursor-pointer text-gray-800 box-border select-none align-middle'>
                                        <span className='mx-2 text-white'>Đánh giá</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </ModalRate>
            </div>
        </>
    )
}

export default AddRate

AddRate.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}