"use client"
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '@/redux/features/api/auth';
import { clearUser } from '@/redux/store';

const LogoutButton = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const result = await logout();
    if (!result.error) {
      dispatch(clearUser());
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
      disabled={isLoading}
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
};

export default LogoutButton;
