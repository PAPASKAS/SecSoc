import React from "react";
import {NextPage} from "next";
import {useRouter} from "next/router";
import PasswordInput from "../components/PasswordInput";
import {
    TextField,
    Button,
    Alert
} from "@mui/material";
import * as en from "../locales/en.json";
import * as ru from "../locales/ru.json";
import {useAppDispatch, useAppSelector} from "../lib/hooks/redux";
import {errorSlice} from "../lib/store/reducers/errorSlice";
import axios from "axios";
import PasswordValidate from "../lib/passwordValidate";


const Register: NextPage = () => {
    const router = useRouter();
    const locale = router.locale === "en" ? en : ru;

    const {errors} = useAppSelector(state => state.errorReducer);
    const {add, remove} = errorSlice.actions;
    const dispatch = useAppDispatch();

    const formRegister = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            login: { value: string };
            email: { value: string };
            password: { value: string };
            confirmPassword: { value: string };
        };
        const data = {
            login: target.login.value.trim(),
            email: target.email.value.trim(),
            password: target.password.value.trim(),
            confirmPassword: target.confirmPassword.value.trim(),
        };

        if (data.password !== data.confirmPassword) {
            console.log("password !==");
            return;
        }

        const errors: {[index: string]:any} = PasswordValidate(data.password);
        for (const error in errors) {
            if (errors[error])
                dispatch(add(error));
        }

        // PasswordValidate(e.target.PasswordInputOne.value.trim());

        // axios({
        //     method: "POST",
        //     url: "http://server.secsoc.loc/api/register",
        //     withCredentials: true,
        //     data: {
        //         login: "papaska",
        //         email: "pavel.glugxix@gmai.com",
        //         password: "qwerty123"
        //     }
        // })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err.response.message)
        //     })
    };

    const changeValueState = (event: React.SyntheticEvent): void => {
        const {target} = event;
        const name = (target as HTMLInputElement).name;
        const value = (target as HTMLInputElement).value;

        setState({[name]: value});
    };


    return (
        <>
            {errors.map((error) =>
                <Alert severity="warning" key={error}>{error}</Alert>
            )}
            <form onSubmit={formRegister} className={'form-control gap-3 d-grid'}>
                <legend>{locale.pages.register.title}</legend>
                <TextField
                    id={'login'}
                    fullWidth
                    variant={'outlined'}
                    label={locale.inputs.login}
                    name={'login'}
                    required
                  />
                  <TextField
                      id={'email'}
                      fullWidth
                      variant={'outlined'}
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
                      label={locale.inputs.confirmPassword}
                      id={'confirmPassword'}
                  />
                  <div>
                      <Button type={'submit'} variant={'contained'}>{locale.pages.register.buttonSubmit}</Button>
                  </div>
            </form>
        </>
    );
};

export default Register;