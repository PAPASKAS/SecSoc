import { useAuth } from "@/hooks/auth";
import {useRouter} from "next/router";
import Ajax from "@/lib/ajax"
import * as en from "@/locales/en.json";
import * as ru from "@/locales/ru.json";
import ILocale from "@/interfaces/locale";
import ICurrentUser from "@/interfaces/currentUser";


const user = (props: any) => {
    useAuth({
        middleware: "auth",
        redirectTo: "/register"
    })

    const router = useRouter()
    const locale: ILocale = router.locale === "en" ? en : ru

    const currentUser: ICurrentUser = fetchData("papaska", locale)

    return (
        <div>
            asd
            user
        </div>
    )
}

const fetchData = async (login:string, locale: ILocale) => {
    return await Ajax.getCurrentUser(login, locale)
}

export default user;