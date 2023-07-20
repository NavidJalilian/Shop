"use client";
import Button from "@/components/button";
import Login from "@/components/login";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <Login>
      <div className='w-full lg:w-7/12  bg-white p-5 rounded-lg lg:rounded-l-none'>
        <h3 className='pt-4 text-2xl text-left ml-7'>Sign Up</h3>
        <form className='px-8 pt-6 pb-8 mb-4 bg-white rounded'>
          <div className='mb-4 md:flex md:justify-between'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700'
                htmlFor='firstName'
              >
                First Name
              </label>
              <input
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-lg'
                id='firstName'
                type='text'
                placeholder='First Name'
              />
            </div>
            <div className='md:ml-2'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700'
                htmlFor='lastName'
              >
                Last Name
              </label>
              <input
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-lg'
                id='lastName'
                type='text'
                placeholder='Last Name'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-lg'
              id='email'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='mb-4 md:flex md:justify-between'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-lg'
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
                className='block mb-2 text-sm font-bold text-gray-700'
                htmlFor='c_password'
              >
                Confirm Password
              </label>
              <input
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-lg'
                id='c_password'
                type='password'
                placeholder='******************'
              />
            </div>
          </div>
          <div className='mb-6 text-center'>
            <Button className='py-2'>
              <Link href='/login'>Sign Up</Link>
            </Button>
          </div>
          <hr className='mb-6 border-t' />
          <div className='text-center'>
            <a
              className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
              href='#'
            >
              Forgot Password?
            </a>
          </div>
          <div className='text-center'>
            <a
              className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
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
