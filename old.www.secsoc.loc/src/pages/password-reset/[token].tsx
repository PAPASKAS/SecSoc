import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const PasswordReset = () => {
    const router = useRouter()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        // setEmail(router.query.email || '')
    }, [router.query.email])

    return (
        <>
            <div>
                {/* Session Status */}
                {/*<AuthSessionStatus className="mb-4" status={status} />*/}

                {/* Validation Errors */}
                {/*<AuthValidationErrors className="mb-4" errors={errors} />*/}

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            // onChange={(event: React.SyntheticEvent) => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            // onChange={(event: React.SyntheticEvent) => 
                            //     setPassword(event.target.value)
                            // }
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <label htmlFor="password_confirmation">
                            Confirm Password
                        </label>

                        <input
                            id="password_confirmation"
                            type="password"
                            value={password_confirmation}
                            className="block mt-1 w-full"
                            // onChange={(event: React.SyntheticEvent) =>
                            //     setPasswordConfirmation(event.target.value)
                            // }
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <button className='nothing'>Reset Password</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PasswordReset
