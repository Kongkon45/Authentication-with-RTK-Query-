"use client"
import { useSignupMutation } from '@/redux/features/api/auth';
import { setUser } from '@/redux/store';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Swal from 'sweetalert2';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signup, { isLoading, isError, error }] = useSignupMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const result = await signup(data);

    if (!result.error) {
      dispatch(setUser(result.data));
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your account is created.",
        showConfirmButton: false,
        timer: 1500
      });
      
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        title : "This email is alreasy used."
      });
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 border-2 rounded-[10px] shadow-lg">
        <h2 className="text-3xl mb-4 text-center font-bold">Sign Up Form</h2>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-base">Email <sup className='text-red-700'>*</sup></label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            placeholder='Enter your email....'
            className="w-full p-2 border-2 rounded-lg"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>
        <div className="mb-4 relative">
          <label className="block mb-2 text-base font-bold">Password <sup className='text-red-700'>*</sup></label>
          <input
            {...register('password', { required: 'Password is required' })}
            type = {showPassword ? "text" : "password"}
            placeholder='Enter your password....'
            className="w-full p-2 border-2 rounded-lg"
          />
          <button type='button' className='absolute top-12 right-3' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}</button>

          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 text-lg font-bold"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Sign Up'}
        </button>
        
        <p className="text-center font-normal text-base">Already have an Acount? <span className="text-red-900 hover:underline font-bold"><Link href='/signin'>Login</Link> </span></p>
        {/* {isError && <p className="text-red-600 mt-4">{error.message}</p>} */}
      </form>
    </div>
  );
};

export default SignupForm;
