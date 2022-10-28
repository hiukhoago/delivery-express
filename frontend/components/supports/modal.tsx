import React, { useEffect, useState } from 'react'
import { XIcon } from '@heroicons/react/outline'

interface propsModal {
    show: boolean,
    onClose: any,
    children: any,
    title: string,
    confirm?: any,
}

const Modal = (props: propsModal) => {

    const handleCloseClick = (e: any) => {
        e.preventDefault();
        props.onClose();
    };

    return (
        <>
            {props.show && (
                <div className="m-0 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 justify-center items-center h-full backdrop-blur-md transition-all flex">
                    <div className="relative max-w-2xl h-full md:h-auto">
                        <div className="relative max-h-screen bg-white rounded-lg shadow dark:shadow-neutral-900 dark:bg-neutral-700">
                            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-neutral-600">
                                {props.title && (<h3 className="text-xl font-semibold text-neutral-900 lg:text-2xl dark:text-white">{props.title}</h3>)}
                                <button className="text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white">
                                    <XIcon className="h-5 w-5" onClick={handleCloseClick} />
                                </button>
                            </div>
                            {props.children}
                            {props.confirm && (
                                <div className="p-5 flex justify-end">
                                    <button className="bg-primary text-white font-semibold py-2 px-4 rounded-full w-20" onClick={props.confirm}>Ok</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Modal