import axios from "@/lib/axios"
import {defaultCatch} from "@/lib/shared"
import ILocale from "@/interfaces/locale";


export default class Ajax {
    public static async csrf (): Promise<void> {
        await axios.get('/sanctum/csrf-cookie')
    }

    public static async getCurrentUser (login: string, locale: ILocale) {
        await this.csrf()

        return axios
            .post(`/users/${login}`)
            .then((res) => res.data)
            .catch((data) => {
                defaultCatch(data.response, locale)
            })
    }
}