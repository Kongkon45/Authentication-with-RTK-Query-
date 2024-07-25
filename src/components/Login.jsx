"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/redux/features/api/auth';
import { setUser } from '@/redux/store';
import Link from 'next/link';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const result = await login(data);
    if (!result.error) {
      dispatch(setUser(result.data));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        <p className="text-center font-normal text-base">Don't have an Account? <span className='text-red-900 hover:underline'><Link href='/sign-up'>SignUp</Link> </span></p>
        {isError && <p className="text-red-600 mt-4">{error.message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
