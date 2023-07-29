"use client";
import InputLabel from "@/components/InputLabel";
import Login from "@/components/login";
import PasswordInput from "@/components/passwordInput";
import React from "react";
import Checkbox from "@/components/checkbox";
import Button from "@/components/button";

export default function SignIn() {
    return (
        <Login imgUrl='/signIn.webp'>
            <aside className='flex w-full flex-col gap-2 px-20 py-12 text-32'
            >

                <form
                    action=''
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <h3 className='capitalize'>sign up</h3>

                    <InputLabel name='Email' placeholder='navidj234@gmail.com'/>
                    <PasswordInput/>
                    <Checkbox label={'Agree to our Terms of use and Privacy Policy '}/>
                    <Checkbox label={'email resive '}/>
                    <Button className='py-2'>Sign Up</Button>
                </form>
            </aside>

        </Login>
    );
}
