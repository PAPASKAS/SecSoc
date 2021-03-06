import React from 'react';
import useAuth from '@/hooks/auth';
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import PasswordInput from '@/components/PasswordInput';
import * as en from '@/locales/en.json';
import * as ru from '@/locales/ru.json';
import ILocale from '@/interfaces/locale';

function Login() {
  const { login } = useAuth({
    middleware: 'guest',
    redirectTo: '/',
  });

  const locale: ILocale = ru;

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      remember: { value: boolean };
    };

    const data = {
      email: target.email.value.trim(),
      password: target.password.value.trim(),
      remember: target.remember.value,
    };

    login(data);
  };

  return (
    <form onSubmit={submitForm} className="form-control gap-3 d-grid py-3">
      <legend>{locale.pages.login.title}</legend>
      <TextField
        id="email"
        fullWidth
        type="email"
        inputProps={{ minLength: 5, maxLength: 32 }}
        variant="outlined"
        label={locale.inputs.email}
        name="email"
        required
      />
      <PasswordInput
        label={locale.inputs.password}
        id="password"
      />
      <FormControlLabel control={<Checkbox name="remember" defaultChecked />} label={locale.inputs.rememberMe} />
      <div>
        <Button type="submit" variant="contained">{locale.pages.login.buttonSubmit}</Button>
      </div>
    </form>
  );
}

export default Login;
