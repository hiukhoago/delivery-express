// useAxios.js
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { Query } from '../shared/interface';
import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';
import { usePrincipal } from './usePrincipal';
import { serialize } from './utility';
import { useRouter } from 'next/router';

axios.defaults.baseURL = 'http://localhost:3030/api';

export const useAxios = () => {

  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const { authentication } = usePrincipal()


  const fetchData = async (url: string, options?: any, query?: Query) => {
    const opts = {
      baseURL: "http://localhost:3030/api",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'source': router.pathname,
      },
      ...options,
    }

    if (authentication) {
      opts.headers['Authorization'] = `Bearer ${authentication?.jwt}`
    }

    const urlWithQuery = query ? `${url}?${serialize(query)} ` : url
    try {
      setLoading(true)
      const result = await axios.request({
        url: urlWithQuery,
        ...opts,
        withCredentials: true,
      });
      setResponse(result.data)
      // console.log(result.data);
      return result
    } catch (err: any) {
      console.log(err.message)
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useAxios;


// function get<T>(input: Request | string, init?): Promise<Partial<T>> { // so the return is defined here
//   const token = localStorage.getItem(localStorageKey);

//   const requestInit = {
//     method: "GET",
//     ...init
//   };

//   if (token) {
//     requestInit.headers = {
//       Authorization: `Bearer ${token}`,
//       ...requestInit.headers
//     };
//   }

//   return fetch(apiUrl + input, requestInit)
//     .then(handleResponse)
//     .then((res) => res.json())
//     .then((data) => data as T);
// }