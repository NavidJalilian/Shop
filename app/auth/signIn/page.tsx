"use client";
import InputLabel from "@/components/InputLabel";
import Login from "@/components/login";
import PasswordInput from "@/components/passwordInput";
import React from "react";

export default function SignIn() {
  return (
    <Login imgUrl='/signIn.webp'>
      <form
        action=''
        className='flex flex-col gap-2'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputLabel name='Email' />
        <PasswordInput />
      </form>
    </Login>
  );
}
