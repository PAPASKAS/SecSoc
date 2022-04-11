import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import React, { useState } from 'react'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <>
            <div>
                <div className="mb-4 text-sm text-gray-600">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                {/* Session Status */}
                {/*<AuthSessionStatus className="mb-4" status={status} />*/}

                {/* Validation Errors */}
                {/*<AuthValidationErrors className="mb-4" errors={errors} />*/}

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        {/* <Label htmlFor="email">Email</Label> */}
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            className="block mt-1 w-full"
                            // onChange={(event: React.SyntheticEvent) => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <button>Email Password Reset Link</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword
