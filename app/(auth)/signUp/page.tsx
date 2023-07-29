"use client";
import Login from "@/components/login";
import React from "react";
import StyledLink from "../../../components/link";

export default function SignUp() {
    return (
        <Login>
            <div className='w-full rounded-lg bg-white p-5 lg:w-7/12 lg:rounded-l-none'>
                <h3 className='ml-7 pt-4 text-left text-2xl'>Sign Up</h3>
                <form className='mb-4 rounded bg-white px-8 pt-6 pb-8'>
                    <div className='mb-4 md:flex md:justify-between'>
                        <div className='mb-4 md:mr-2 md:mb-0'>
                            <label
                                className='mb-2 block text-sm font-bold text-gray-700'
                                htmlFor='firstName'
                            >
                                First Name
                            </label>
                            <input
                                className='w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:shadow-lg focus:outline-none'
                                id='firstName'
                                type='text'
                                placeholder='First Name'
                            />
                        </div>
                        <div className='md:ml-2'>
                            <label
                                className='mb-2 block text-sm font-bold text-gray-700'
                                htmlFor='lastName'
                            >
                                Last Name
                            </label>
                            <input
                                className='w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:shadow-lg focus:outline-none'
                                id='lastName'
                                type='text'
                                placeholder='Last Name'
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label
                            className='mb-2 block text-sm font-bold text-gray-700'
                            htmlFor='email'
                        >
                            Email
                        </label>
                        <input
                            className='mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:shadow-lg focus:outline-none'
                            id='email'
                            type='email'
                            placeholder='Email'
                        />
                    </div>
                    <div className='mb-4 md:flex md:justify-between'>
                        <div className='mb-4 md:mr-2 md:mb-0'>
                            <label
                                className='mb-2 block text-sm font-bold text-gray-700'
                                htmlFor='password'
                            >
                                Password
                            </label>
                            <input
                                className='mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:shadow-lg focus:outline-none'
                                id='password'
                                type='password'
                                placeholder='******************'
                            />
                            <p className='text-xs italic text-red-500'>
                                Please choose a password.
                            </p>
                        </div>
                        <div className='md:ml-2'>
                            <label
                                className='mb-2 block text-sm font-bold text-gray-700'
                                htmlFor='c_password'
                            >
                                Confirm Password
                            </label>
                            <input
                                className='mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:shadow-lg focus:outline-none'
                                id='c_password'
                                type='password'
                                placeholder='******************'
                            />
                        </div>
                    </div>
                    <div className='mb-6 text-center'>
                        <StyledLink href='/signup'>Sign Up</StyledLink>
                    </div>
                    <hr className='mb-6 border-t'/>
                    <div className='text-center'>
                        <a
                            className='inline-block align-baseline text-sm text-blue-500 hover:text-blue-800'
                            href='#'
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className='text-center'>
                        <a
                            className='inline-block align-baseline text-sm text-blue-500 hover:text-blue-800'
                            href='./index.html'
                        >
                            Already have an account? Login!
                        </a>
                    </div>
                </form>
            </div>
        </Login>
    );
}
