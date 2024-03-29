"use client"
import React, { useCallback, useState } from 'react'
import Input from '../Input/Input';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AuthInputs = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
                {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
                {variant === 'register' && (
                    <Input
                        id='username'
                        onChange={(ev: any) => setUsername(ev.target.value)}
                        value={username}
                        label='Username'
                        type='text'
                    />
                )}
                <Input
                    id='email'
                    onChange={(ev: any) => setEmail(ev.target.value)}
                    value={email}
                    label='Email'
                    type='email'
                />
                <Input
                    id='password'
                    onChange={(ev: any) => setPassword(ev.target.value)}
                    value={password}
                    label='Password'
                    type='password'
                />
                <Link href='/Profiles'>
                    <button
                        className='
                        bg-red-600 
                        py-3 
                        text-white 
                        rounded-md 
                        w-full 
                        mt-10 
                        hover:bg-red-700 
                        transition
                    '>
                        {variant === 'login' ? 'Login' : 'Sign up'}
                    </button>
                </Link>
                <p className='text-neutral-500 mt-12'>
                    {variant === 'login' ? 'First time using Netflix?' : 'Already have an acount?'}
                    <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                        {variant === 'login' ? 'Create an acount' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default AuthInputs
