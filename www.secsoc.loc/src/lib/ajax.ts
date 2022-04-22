import axios from '@/lib/axios';
import Shared from '@/lib/shared';
import ILocale from '@/interfaces/locale';
import { AxiosError, AxiosResponse } from 'axios';
import ICurrentUser from '@/interfaces/currentUser';

export default class Ajax {
  private static async csrf(): Promise<void> {
    await axios.get('/sanctum/csrf-cookie');
  }

  private static async csrfAsText() {
    return axios.post('/csrf-token')
      .then((res) => res.data);
  }

  public static async userPage(login: string, locale: ILocale): Promise<ICurrentUser | void> {
    await this.csrf();

    axios
      .post(`/users/${login}`)
      .then((res: AxiosResponse<ICurrentUser>) => res.data)
      .catch((err: AxiosError) => {
        Shared.defaultCatch(err, locale);
      });
  }
}
