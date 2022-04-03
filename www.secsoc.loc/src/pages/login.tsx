import { useAuth } from '@/hooks/auth'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectTo: '/dashboard'
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        login({ email, password, setErrors, setStatus })
    }

    return (
        <form onSubmit={submitForm}>

        </form>
    )
}

export default Login
