import React, { useState } from 'react';
import {useToast} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginBg from './loginBg';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successfull",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate('/home');

    } catch (error) {
      toast({
        title: 'Error Occured!',
        description: error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen relative flex items-center justify-center gap-4 bg-gray-200 overflow-hidden">
      <div className='absolute h-screen w-full text-3xl p-5  text-gray-300 flex items-center  gap-7'>
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
          <LoginBg />
      </div>
      
      <div className='max-w-md w-full rounded-md z-50'>
        <img src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI=" className='rounded-md' alt="" />
      </div>

      
        <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full z-50">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
    </div>
  );
};

export default Login;
