"use client"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearUser, setUser} from '@/redux/store';
import LoginForm from '../Login';
import SignupForm from '../SignUp';
import LogoutButton from '../Logout';
import auth from '@/firebase/firebase.config';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  // const [users, setUsers] = useState([])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        // setUsers(user)
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {!user ? (
          <div className="space-y-6">
            {/* <LoginForm /> */}
            <SignupForm />
          </div>
        ) : (
          <LogoutButton />
        )}

        {/* {
          users?.map((userData, index)=>{
            return <div key={index}>
              <h2>{userData?.email}</h2>
              <p>{userData?.password}</p>
            </div>
          })
        } */}
      </div>
  );
};

export default HomePage;
