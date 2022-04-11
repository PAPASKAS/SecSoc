import noty from "@/lib/noty";
import IAxiosResponse from "@/interfaces/axiosResponse";
import ILocale from "@/interfaces/locale";


export const defaultCatch = async (response: IAxiosResponse, locale: ILocale) => {
    if (
        response.status === 419 ||
        response.status >= 500
    ) {
        if (process.env.NODE_ENV !== "production")
            console.log("Error message: \n" + response.data.message);

        noty(locale.notification.errors.serverError, 'error', true);
    } else {
        const errArr: string[] = Object.values(response.data.errors);

        errArr.forEach((message) => {
            noty(message, 'error');
        });
    }
}