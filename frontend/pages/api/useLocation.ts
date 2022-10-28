import { useEffect, useState } from "react";
import { District, Province, Ward } from "../../shared/location.interface";
import  axios  from 'axios';

    

    export const useLocation = () => {
        const [provinceListShown, setProvinceListShown] = useState(false);
        const [selectedProvince, setSelectedProvince] = useState<any>('');
    
        const [districtListShown, setDistrictListShown] = useState(false);
        const [selectedDistrict, setSelectedDistrict] = useState<any>('');
    
        const [wardListShown, setWardListShown] = useState(false);
        const [selectedWard, setSelectedWard] = useState<any>('');
    
        const [filteredProvinces, setFilteredProvinces] = useState<Province[]>([]);
        const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
        const [filteredWards, setFilteredWards] = useState<Ward[]>([]);

        const [address,setAddress] = useState<string>('');
    
        const resetProvince = () => {
            setSelectedProvince('')
            setFilteredProvinces([])
            setProvinceListShown(false)
        }
        const resetDistrict = () => {
            setSelectedDistrict('')
            setFilteredDistricts([])
            setDistrictListShown(false)
        }
    
        const resetWard = () => {
            setSelectedWard('')
            setFilteredWards([])
            setWardListShown(false)
        }
    
        const baseUrl = 'https://provinces.open-api.vn/api'
    
        const fetchProvinces = async () => {
            setProvinceListShown(true)
            await axios.get(`${baseUrl}/p`)
                .then(res => {
                    setFilteredProvinces(res.data);
                })
                .catch(error => console.log(error));
        }
    
        const fetchDistricts = async (provinceCode: number) => {
            await axios.get(`${baseUrl}/p/${provinceCode}`, { params: { depth: 3 } })
                .then(res => {
                    setFilteredDistricts(res.data.districts);
                })
                .catch(error => console.log(error));
        }
    
        const fetchWards = async (districtCode: number) => {
            await axios.get(`${baseUrl}/d/${districtCode}`, { params: { depth: 2 } })
                .then(res => {
                    setFilteredWards(res.data.wards);
                })
                .catch(error => console.log(error));
        }
    
        const startSearchingProvince = async () => {
            setAddress('')
            console.log('start searching province')
            setProvinceListShown(true)
            if (!filteredProvinces.length) {
              await fetchProvinces()
            }
          }
    
          const  startSearchingDistrict = async () =>  {
            setDistrictListShown(true)
            if (filteredDistricts.length || !selectedProvince) {
              return
            }
            const _ = await fetchDistricts(selectedProvince.code)
            console.log('fetchDistricts:::', _)
          }
    
          const startSearchingWard = async () => {
            setWardListShown(true)
            if (filteredWards.length || !selectedDistrict) {
              return
            }
            await fetchWards(selectedDistrict.code)
          }
    
        const selectProvince = async (province : Province) => {
            setProvinceListShown(false);
            setSelectedProvince(province.name);
            setAddress(address.concat(province.name))
            resetDistrict()
            resetWard()
            await fetchDistricts(province.code);
            
        }
    
        const selectDistrict = async (district : any) => {
            setDistrictListShown(false)
            setAddress(address.concat(' / ',district.name))
            resetWard()
            setSelectedDistrict(district.name)
            await fetchWards(district.code);
        }
    
        const selectWard = async (ward : any) => {
            setWardListShown(false)
            setAddress(address.concat(' / ',ward.name))
            setSelectedWard(ward.name)
        }
    
        // useEffect(() => {
        //     fetchProvinces()
        // },[])
        
        return {
            provinceListShown,districtListShown,wardListShown,
            setProvinceListShown,setDistrictListShown,setWardListShown,
            selectedProvince,selectedDistrict,selectedWard,
            filteredProvinces,filteredDistricts,filteredWards,
            resetProvince,resetDistrict,resetWard,
            selectProvince,selectDistrict,selectWard,
            startSearchingProvince,startSearchingDistrict,startSearchingWard,
            setSelectedProvince,setSelectedDistrict,setSelectedWard,

            address,setAddress
        }
    
        // console.log('fetchProvinces',filteredProvinces)
        // console.log('filteredDistricts',filteredDistricts)
        // console.log('filteredWards',filteredWards)


    }