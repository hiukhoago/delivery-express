
import { Authentication } from './client.type';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import { User } from '../shared/accounts.interface';

type Principal = {
    authentication?: Authentication
    principal?: User
    login?: (_: Pick<Authentication, 'principal' | 'jwt' | 'roles'>) => void,
    logout?: () => void,
    reset?: () => void,
}

function parseJwt(token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const usePrincipal = (): Principal => {

    const router = useRouter()
    const [authentication, setAuthentication] = useState<Authentication>()
    const [principal, setPrincipal] = useState<any>()
    const userInfo = getCookie('user-info', { path: '/' })

    useEffect(() => {
        const authenticationCookie = getCookie('authentication', { path: '/' })

        if (authenticationCookie){
            setAuthentication({ authenticated: true, jwt: authenticationCookie.toString(), roles: parseJwt(authenticationCookie)?.authorities, principal: parseJwt(authenticationCookie) })
            setPrincipal(parseJwt(authenticationCookie))
        }
        return () => {
            setPrincipal({})
            setAuthentication(undefined)
        }
    }, [])

    // console.log('authentication----------------->>>>>>', authentication)
    // console.log('principal----------------->>>>>>', principal)

    const logout = () => {
        removeCookies('authentication')
        removeCookies('user-info')
        router.replace('/authentication/in')
    }

    const reset = () => {
        setAuthentication({ authenticated: false })
        console.log('reset')
    }

    const login = (_authentication: Pick<Authentication, 'principal' | 'jwt'>) => {
        setCookies('authentication', _authentication.jwt)
        setCookies('user-info', _authentication.principal)

        setAuthentication({ jwt: _authentication.jwt, roles: _authentication.principal?.authorities, principal: _authentication.principal, authenticated: true })
        setPrincipal(_authentication.principal)
    }

    return { authentication, principal, login, logout, reset }
}
