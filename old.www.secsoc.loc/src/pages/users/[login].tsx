import { useAuth } from "@/hooks/auth";
import {NextRouter, useRouter} from "next/router";
import Ajax from "@/lib/ajax"
import * as en from "@/locales/en.json";
import * as ru from "@/locales/ru.json";
import ILocale from "@/interfaces/locale";
import ICurrentUser from "@/interfaces/currentUser";


export default function ()  {
    useAuth({
        middleware: "auth",
        redirectTo: "/register"
    })

    const router: NextRouter = useRouter()
    const locale: ILocale = router.locale === "en" ? en : ru
    const { login } = router.query

    const currentUser = fetchUser(login as string, locale)
    console.log(currentUser)


    return (
        <div>
            asd
            user
        </div>
    )
}


const fetchUser = (login: string, locale: ILocale) => {
    return Ajax.userPage(login, locale);
}