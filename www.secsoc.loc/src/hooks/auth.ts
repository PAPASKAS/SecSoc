import useSWR from 'swr';
import axios from '@/lib/axios';
import { useEffect } from 'react';
import Shared from '@/lib/shared';
import * as en from '@/locales/en.json';
import * as ru from '@/locales/ru.json';
import ILocale from '@/interfaces/locale';
import { AxiosError } from 'axios';

interface IProps {
  middleware?: 'guest' | 'auth' | 'verified' | 'none';
  redirectTo?: string;
}
interface IRegister {
  login: string;
  email: string;
  password: string;
  password_confirmation: string;
}
interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}

const useAuth = ({ middleware = 'none', redirectTo = '/' }: IProps) => {
  const locale: ILocale = ru;

  const { data: user, error } = useSWR('/api/user', () => {
    axios
      .get('/api/user')
      .then((res) => res.data)
      .catch((err: AxiosError) => {
        if (err.response?.status !== 409) throw err;
        // router.push('/verify-email')
      });
  });

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const register = async (props: IRegister) => {
    await csrf();

    axios
      .post('/register', props)
    // .then(() => revalidate())
      .catch((err: AxiosError) => {
        Shared.defaultCatch(err, locale);
      });
  };

  const login = async (props: ILogin) => {
    await csrf();

    axios
      .post('/login', props)
    // .then(() => revalidate())
      .catch((err: AxiosError) => {
        Shared.defaultCatch(err, locale);
      });
  };

  const forgotPassword = async ({ setErrors, setStatus, email }: any) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/forgot-password', { email })
      .then((response) => setStatus(response.data.status))
      .catch((err: AxiosError) => {
        if (err.response?.status !== 422) throw error;

        setErrors(Object.values(err.response?.data.errors).flat());
      });
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }: any) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    // axios
    //     // .post('/reset-password', { token: router.query.token, ...props })
    //     // .then(response => router.push('/login?reset=' + btoa(response.data.status)))
    //     .catch(error => {
    //         if (error.response.status != 422) throw error
    //
    //         setErrors(Object.values(error.response.data.errors).flat())
    //     })
  };

  const resendEmailVerification = ({ setStatus }: any) => {
    axios
      .post('/email/verification-notification')
      .then((response) => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axios.post('/logout');

      // await revalidate()
    }

    // await router.push('/login')
  };

  useEffect(() => {
    // if (middleware === 'guest' && user) router.push(redirectTo)
    // if (middleware === 'auth' && error) logout()
    // if (middleware === "verified" && user.email_verified_at === null) router.push(redirectTo)
  }, [user, error]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};

export default useAuth;
