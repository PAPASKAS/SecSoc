import React from 'react';
import noty from "~lib/noty";
import { useAuth } from '~hooks/auth';
import {
    TextField,
    Button
} from "@mui/material";
import PasswordInput from '~components/PasswordInput';
import * as en from "~locales/en.json";
import * as ru from "~locales/ru.json";
import ILocale from "~interfaces/locale";


const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
    })

    const locale: ILocale = ru;

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            login: { value: string };
            email: { value: string };
            password: { value: string };
            password_confirmation: { value: string };
        };

        const data = {
            login: target.login.value.trim(),
            email: target.email.value.trim(),
            password: target.password.value.trim(),
            password_confirmation: target.password_confirmation.value.trim(),
        };

        if (data.password !== data.password_confirmation)
            noty(locale.notification.errors.differentPassword, "error", true);


        register(data)
    };

    return (
        <>
            <form onSubmit={submitForm} className={'form-control gap-3 d-grid py-3 w-100 w-md-75'}>
                <legend>{locale.pages.register.title}</legend>
                <TextField
                    id={'login'}
                    fullWidth
                    inputProps={{ 'minLength': 5, 'maxLength': 32 }}
                    variant={'outlined'}
                    label={locale.inputs.login}
                    name={'login'}
                    required
                />
                <TextField
                    id={'email'}
                    fullWidth
                    variant={'outlined'}
                    inputProps={{ 'minLength': 5, 'maxLength': 50 }}
                    label={locale.inputs.email}
                    name={'email'}
                    type={'email'}
                    required
                />
                <PasswordInput
                    label={locale.inputs.password}
                    id={'password'}
                />
                <PasswordInput
                    label={locale.inputs.password_confirmation}
                    id={'password_confirmation'}
                />
                <div>
                    <Button type={'submit'} variant={'contained'}>{locale.pages.register.buttonSubmit}</Button>
                </div>
            </form>
        </>
    );
};

export default Register;
