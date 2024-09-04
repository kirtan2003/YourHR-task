import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [upLoading, setUpLoading] = useState(false);
  const toast = useToast();

  const handleClick = () => {
    navigate('/login');
  }

  const handleFileUpload = async (resume) => {
    if (!resume) {
      toast({
        title: 'Please Select Resume!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${userInfo.token}`, // Include token here
        },
      };

      const res = await axios.post(
        'http://localhost:5000/api/user/resume',
        formData,
        config
      );

      // setFileUrl(res.data.url);
      setUpLoading(true);
      // toast({
      //   title: 'File uploaded successfully!',
      //   status: 'success',
      //   duration: 5000,
      //   isClosable: true,
      // });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: 'Error uploading file',
        description: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setUpLoading(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!name || !email || !password) {
      toast({
        title: 'Please Fill all the Fields',
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
      }
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/signup",
        // This ensures that requests made to /api/auth/signup from the frontend will be forwarded to http://localhost:5000/api/auth/signup. added a proxy on port5000
        { name, email, password },
        config
      );
      toast({
        title: 'Registration Successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
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
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Resume</label>
          <input
            type="file"
            name="resume"
            onChange={(e) => handleFileUpload(e.target.files[0])}
            accept=".pdf,.doc,.docx"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
          <div className="flex items-center justify-center">
    
            { !upLoading ? 
             (
              <>
                <div className='flex justify-center items-center gap-2'>
                  <WarningIcon color={'#eab308'}/>
                  <p className='text-yellow-500'>File not Uploaded</p>
                </div>
              </>
             ): (
                <>
                  <div className='flex justify-center items-center gap-2'>
                    <CheckCircleIcon color={'teal'}/>
                    <p className='text-teal-7 00'>File Uploaded</p>
                  </div>
                </>
             )
            }
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <p className='text-center mt-2'>Already have an account? <span onClick={handleClick} className='text-blue-400 hover:text-teal-400 cursor-pointer underline underline-offset-4'>Login</span></p>
      </form>
    </div>
  );
};

export default SignUp;
