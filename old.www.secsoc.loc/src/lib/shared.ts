import noty from "@/lib/noty";
import ILocale from "@/interfaces/locale";
import {AxiosError} from "axios";


export const defaultCatch = async (error: AxiosError, locale: ILocale) => {
    const status = error.response?.status;
    const data = error.response?.data;

    if(!status|| !data){
        console.log('asdadsadsdsa')
        noty(locale.notification.errors.serverError, 'error', true);
        return;
    } else if ( status === 419 || status >= 500 ) {
        if (process.env.NODE_ENV !== "production")
            console.error("Error message: \n" + data.message);

        noty(locale.notification.errors.serverError, 'error', true);
    } else {
        console.log("errors: "+ data.errors)
        // const errArr: string[] = Object.values(data.errors);
        // for (const datum of data.errors) {
        //     console.log(datum)
        // }
        // errArr.forEach((message) => {
        //     noty(message, 'error');
        // });
    }
};