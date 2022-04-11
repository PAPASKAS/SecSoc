import {useAuth} from "@/hooks/auth";
import {useRouter} from "next/router";


const index = () => {
    useAuth({
        middleware: 'auth',
        redirectTo: '/register'
    })




    return (
        <div>
            index
        </div>
    )
}

export default index;