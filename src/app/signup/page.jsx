"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';


const SignUpPage = () => {

  const router = useRouter()
  const handleSignUp = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const convertedData = Object.fromEntries(formData.entries());
    

    const { name, email, image, password } = convertedData;

    // signup with email and password;
    const { error } = await authClient.signUp.email({
      name: name,
      email: email,
      image: image,
      password: password

    }, {
      onSuccess: () => {
        router.push('/login')

      }
    });


    if (error) {
      alert(error.message)
    }
  }


  // sign up with Google;
  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className='my-15 space-y-5'>
      {/* heading content */}
      <div className='text-center'>
        <h1 className='text-4xl font-semibold mb-1'>Create Account</h1>
        <p className='text-[#6C696D] text-xl'>Start your adventure with Wanderlust</p>
      </div>

      {/* form */}
      <Card className='max-w-md mx-auto p-5 rounded-xl border '>
        <Form onSubmit={handleSignUp}
          className="flex flex-col gap-4 ">

          <TextField
            isRequired
            name="name"
            type="text"

          >
            <Label>Name</Label>
            <Input placeholder="write your name" />
            <FieldError />

          </TextField>
          <TextField
            name="image"
            type="url">

            <Label>Photo Url</Label>
            <Input placeholder="Enter your photo url" />
            <FieldError />
          </TextField>
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

          <Button type="submit" className={'w-full bg-cyan-600 rounded-xl text-base'}>
            Create Account
          </Button>

          <div className='flex items-center gap-3 justify-center'>
            <div className='bg-gray-300 h-0.5 w-full'></div>
            <span className=''>Or</span>
            <div className='bg-gray-300 h-0.5 w-full'></div>
          </div>

          <Button onClick={handleGoogleSignUp}
            className="w-full rounded-xl py-6 text-base" variant="tertiary">
            <FcGoogle className='size-5' />
            Sign up with Google
          </Button>
        </Form>
        <p className='text-center text-sm'>Already have an account?
          <Link className='font-medium text-cyan-600'
            href="/login"> Login</Link></p>
      </Card>
    </div>
  );
};

export default SignUpPage;