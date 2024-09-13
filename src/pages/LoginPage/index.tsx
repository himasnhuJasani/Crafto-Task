import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (username: string, otp: string) => {
    try{
    const { data } = await axios.post(`${process.env.REACT_APP_CRAFTO_BASE_URL}/login`,{
       "username": username,
       "otp": otp
    })
    localStorage.setItem("LoginAuthToken", data.token)
    navigate('/quotes');
    
  }catch(e){
    setError(true)
    localStorage.removeItem("LoginAuthToken")
    navigate('/')
  }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        { error && <div className='pb-2 text-red-600'>Please enter 1234 as OTP</div>}
        <button
          onClick={()=>handleLogin(username,otp)}
          className="bg-blue-500 text-white rounded-lg py-2 w-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
