"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';



const LoginPage = () => {

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const convertedData = Object.fromEntries(formData.entries());
    console.log(convertedData);
    const { email, password } = convertedData;

    // signup method;
    const { error } = await authClient.signIn.email({

      email: email,
      password: password,
      callbackURL: '/'

    }, {
      onSuccess: () => {
        alert('Login successful')
      }
    })
    if (error) {
      alert(error.message)
    }
  };


  // sign up with Google;
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };


  return (
    <div className='my-15'>
      <h1 className='text-4xl font-semibold text-center mb-5'>Login your account</h1>
      <Card className='max-w-md mx-auto p-5 rounded-xl border'>
        <Form onSubmit={handleLogin}
          className="flex flex-col gap-4 ">

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="write your email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div>
            <Button type="submit" className={'w-full rounded-xl bg-cyan-600 text-base'}>
              Login
            </Button>

            <div className='flex items-center gap-3 justify-center my-4'>
              <div className='bg-gray-300 h-0.5 w-full'></div>
              <span className=''>Or</span>
              <div className='bg-gray-300 h-0.5 w-full'></div>
            </div>

            <Button onClick={handleGoogleLogin}
              className="w-full rounded-xl py-6 text-base" variant="tertiary">
              <FcGoogle className='size-5' />
              Login with Google
            </Button>

          </div>
        </Form>

        <p className='text-center text-sm'>Dont have an account?
          <Link className='font-medium text-cyan-600'
            href="/signup"> Sign up</Link></p>
      </Card>
    </div>
  );
};

export default LoginPage;