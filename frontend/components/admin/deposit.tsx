import React, { useEffect, useState } from 'react'
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/outline';
import useAxios from '../../library/useAxios';
import { toast } from 'react-toastify';

const Deposit = () => {
    const buttons: number[] = [100000, 200000, 300000, 400000, 500000, 600000];
    const [selectInput,setSelectInput] = useState<number>()
    const formatVND = (n: any) => {
        return parseFloat(n).toLocaleString('it-IT');
    }
    const [amount, setAmount] = useState(0)

    const handleSetAmount = (a: number,i:number) => {
        setSelectInput(i)
        if (a == 0) setAmount(0);
        else setAmount(amount + a)
    };

    const { response, error, loading, fetchData } = useAxios()

    const handleDeposit = (a : any ,t : any ) => {
        fetchData('/activity', { method: 'POST', data: {
            amount : a,
            activityType :t
        } }).then((res:any) => {
            if(res.status === 201){
                toast.success('Nạp tiền thành công')
            }
        }).catch((err:any) => {
            toast.error('Nạp tiền thất bại')
        })
    }



    return (
        <>
            <div>
                <div className='p-4 pb-10 space-y-3'>
                    <form>
                        <label>Nhập vào số tiền
                            <input type='text' disabled name='amount' value={formatVND(amount)} className='w-full h-14' />
                        </label>
                        <p>Nhập số tiền tối thiểu đ10,000</p>
                        <p>Hoặc chọn giá trị top up</p>
                        <ul className='grid grid-cols-3 items-center justify-between w-full flex-wrap gap-2 cursor-pointer my-5'>
                            {buttons && buttons.map((b, i) => (
                                <li key={i}
                                    onClick={() => handleSetAmount(b,i)}
                                    className='relative text-primary font-bold hover:bg-primary hover:text-white whitespace-nowrap w-24 border border-gray-300 py-3 px-2 flex justify-center rounded'>
                                    <span>{formatVND(b)}</span>
                                    <span className={selectInput === i ? 'absolute top-1 right-1' : 'hidden'}>
                                        <CheckCircleIcon className='w-3 h-3 text-white rounded-full'  />
                                    </span>
                                </li>
                            ))}
                            <li>
                                <button type='button' className='button_primary w-24' onClick={() => setAmount(0)}>Clear</button>
                            </li>
                        </ul>
                        <div className='flex items-center w-full'>
                            <button type='button' onClick={() => handleDeposit(amount,'d')} className='button_primary w-full' >Tiếp tục</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Deposit