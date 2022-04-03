import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import {
    TextField,
    Button
} from "@mui/material"
import PasswordInput from '@/components/PasswordInput'
import * as en from "@/locales/en.json"
import * as ru from "@/locales/ru.json"


const Register = () => {
    const router = useRouter()
    const locale = router.locale === "en" ? en : ru

    const { register } = useAuth({
        middleware: 'guest',
        redirectTo: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()

        register({ name, email, password, password_confirmation, setErrors })
    }

    return (
        <>
            {errors}
            <form onSubmit={submitForm} className={'form-control gap-3 d-grid py-3'}>
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
                    label={locale.inputs.confirmPassword}
                    id={'confirmPassword'}
                />
                <div>
                    <Button type={'submit'} variant={'contained'}>{locale.pages.register.buttonSubmit}</Button>
                </div>
            </form>
        </>
    )
}

export default Register
