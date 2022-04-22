import noty from '@/lib/noty';
import ILocale from '@/interfaces/locale';
import { AxiosError } from 'axios';

export default class Shared{
  public static defaultCatch(error: AxiosError, locale: ILocale): void {
    const status = error.response?.status;
    const data = error.response?.data;

    if (!status || !data) {
      noty(locale.notification.errors.serverError, 'error', true);
    } else if (status === 419 || status >= 500) {
      if (process.env.NODE_ENV !== 'production') { console.error(`Error message: \n${data.message}`); }

      noty(locale.notification.errors.serverError, 'error', true);
    } else {
      // const errArr: string[] = Object.values(data.errors);
      // for (const datum of data.errors) {
      //     console.log(datum)
      // }
      // errArr.forEach((message) => {
      //     noty(message, 'error');
      // });
    }
  }
}
