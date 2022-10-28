import { useLocation } from 'api/useLocation';
import React, { useState } from 'react'
import { useEffect } from 'react';

const Geolocation = (props: any) => {


    const {
        filteredProvinces, filteredDistricts, filteredWards,
        provinceListShown, districtListShown, wardListShown,
        selectProvince, selectDistrict, selectWard,
        selectedProvince, selectedDistrict, selectedWard,
        setSelectedProvince, setSelectedDistrict, setSelectedWard,
        startSearchingProvince, startSearchingDistrict, startSearchingWard,
        address
    } = useLocation();

    useEffect(() => {
        props.value(address);
    }, [address,props]);



    return (
        <>
            <div className='flex flex-col justify-start'>
                <label className='text-gray-600 leading-8 inline-block'>Tỉnh/Quận-Huyện/Phường-Xã</label>
                <span className='flex-grow flex flex-col justify-center'>
                    <span className='flex gap-3'>
                        <span className='relative rounded flex leading-none w-full' >
                            <input 
                                placeholder='Tỉnh...'
                                readOnly
                                type="text"
                                value={selectedProvince}
                                onFocus={() => startSearchingProvince()}
                            />
                            {provinceListShown && (
                                <div className='absolute z-10 max-h-48 top-9 w-full bg-gray-100 overflow-y-auto shadow '>
                                    <ul className='list-none'>
                                        {filteredProvinces && filteredProvinces.map((item, index) => (
                                            <li
                                                className='px-2 py-1 cursor-pointer bg-white hover:bg-blue-100'
                                                key={index}
                                                value={item.code}
                                                onClick={() => selectProvince(item)}
                                            >{item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </span>
                        <span className='relative rounded flex leading-none  w-full' >
                            <input 
                                placeholder='Huyện...'
                                readOnly
                                type="text"
                                value={selectedDistrict}
                                onFocus={() => startSearchingDistrict()}
                            />
                            {districtListShown && (
                                <div className='absolute z-10 max-h-48 top-9 w-full bg-gray-100 overflow-y-auto shadow'>
                                    <ul className='list-none'>
                                        {filteredDistricts && filteredDistricts.map((item, index) => (
                                            <li
                                                className='px-2 py-1 cursor-pointer bg-white hover:bg-blue-100'
                                                key={index}
                                                value={item.code}
                                                onClick={() => selectDistrict(item)}
                                            >{item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </span>
                        <span className='relative rounded flex leading-none  w-full' >
                            <input 
                                placeholder='Xã...'
                                readOnly
                                type="text"
                                value={selectedWard}
                                onFocus={() => startSearchingWard()}
                            />
                            {wardListShown && (
                                <div className='absolute z-10 max-h-48 top-9 w-full bg-gray-100 overflow-y-auto shadow'>
                                    <ul className='list-none'>
                                        {filteredWards && filteredWards.map((item, index) => (
                                            <li
                                                className='px-2 py-1 cursor-pointer bg-white hover:bg-blue-100'
                                                key={index}
                                                value={item.code}
                                                onClick={() => selectWard(item)}
                                            >{item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </span>
                    </span>
                </span>
            </div>
            <div className='flex flex-col justify-start'>
                <label htmlFor='address'>Địa chỉ</label>
                <input
                        placeholder='Vui lòng nhập thông tin'
                        defaultValue={address}
                        name='address'
                        type='text'
                        disabled
                    />
            </div>

        </>
    )
}

export default Geolocation