import Navigation from "../components/layouts/manage/navigation";
import { usePrincipal } from "../library/usePrincipal";
import { useEffect } from 'react';
import { AuthorityRole } from "../shared/enum";
import { useRouter } from "next/router";

export default function LayoutManage({ children }: any) {

    const {login,authentication} = usePrincipal()
    const router = useRouter();

    useEffect(() => {
        if (authentication) {
            if(authentication.roles?.includes(AuthorityRole.Admin)){
                router.push('/manage')
            }else if(authentication.roles?.includes(AuthorityRole.User)){
                router.push('/admin')
            }else{
                router.push('/')
            }
        }
    }, []);

    return (
        <>
            <div className="flex w-full">
                <Navigation />
                <main className="bg-gray-100 mt-0" >
                    <div className="container mx-auto max-w-6xl px-32 py-8">{children}</div>
                </main>
            </div>
        </>
    );
}
