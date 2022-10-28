import LayoutManage from '../../../layouts/manage'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useAxios from '../../../library/useAxios';
import { News } from '../../../shared/news.interface'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

const DetailNews = () => {
    const router = useRouter();
    const { id } = router.query;

    const [news, setNews] = useState<News>()
    
    const { response, error, loading, fetchData } = useAxios();

    const deleteNews = () => {
        let confirmDelete = confirm("Bạn có chắc muốn xóa?");
        if (confirmDelete) {
            fetchData(`/news/${id}`,{method: 'DELETE'}).then((res: any) => {
                if(res?.status < 300){
                    toast.success('Xóa thành công')
                }
            })
        } else return
    }

    useEffect(() => {
        fetchData(`news/${id}`).then(res => {
            if (res?.status === 200) {
                setNews(res.data);
            }
        })
    }, [id])

    return (
        <>
            <div className='overflow-auto bg-gray-100 pl-4'>
                <div className='bg-gray-100 space-y-5'>
                    <div className='px-10 py-5 bg-white rounded-md'>
                        <h4 className='text-gray-900 py-3 font-medium'>
                            Chi tiết tin tức
                        </h4>

                        <div className='overflow-auto py-5 max-w-xl mx-auto'>
                            <article className='float-left'>
                                <h1 className='font-bold text-5xl leading-12'>{news?.title}</h1>
                                <p className='text-gray-500 py-8'>{news?.createdAt.toString()}</p>
                                <section>
                                    <div>
                                       {news?.content}
                                    </div>
                                </section>
                                <div className='py-3'>
                                    <div className='text-gray-900 py-3 font-medium'>
                                        Ảnh minh họa:
                                    </div>
                                    <div className='border h-96 rounded-xl bg-blue-50'>
                                        <div className='text-gray-300 py-3 font-medium text-center mt-36'>
                                            Image not found
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                <button
                    type="button"
                    className='bg-danger text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle px-10 py-5'
                    onClick={() => deleteNews()}
                >
                    Xóa
                </button>
                <button
                    className='bg-blue-600 text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mx-10 px-5 py-5'
                    type="button"
                    onClick={() => router.push({ pathname: `./edit/${id}` })}
                >
                    <span className='mx-2'>Cập nhật</span>
                </button>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className='bg-warning text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center cursor-pointer box-border select-none align-middle mr-10 px-10 py-5'
                >
                    Trở lại
                </button>
            </div>
            </div>
        </>

    )
}

export default DetailNews

DetailNews.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}

