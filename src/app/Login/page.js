'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { users } from '../Database/db';
import jwt from 'jsonwebtoken'; // Make sure to install: npm install jsonwebtoken
import { generateAccessAndRefreshTokens } from '../utils/generateToken';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const foundUser = users.find(
      user => user.email === email && user.password === password
    );

    if (!foundUser) {
      alert('Invalid credentials. Please try again.');
      return;
    }
console.log("found user",foundUser)
  // const tokens =   generateAccessAndRefreshTokens(foundUser._id)

// console.log("tokens",tokens);
    // ✅ Generate a JWT
    // const token = jwt.sign(
    //   {
    //     _id: foundUser._id,
    //     email: foundUser.email,
    //     role: foundUser.role
    //   },
    //   'fake_secret_key', // ⚠️ Replace this with a real secret only on backend in production
    //   { expiresIn: '1h' }
    // );

    // ✅ Store in both sessionStorage and localStorage
    sessionStorage.setItem('token', foundUser.refreshTokken);
    localStorage.setItem('token', foundUser.refreshTokken);

    // ✅ Redirect
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg space-y-5">
      <h2 className="text-2xl font-semibold text-center text-indigo-600">Login</h2>

      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
      >
        Login
      </button>
    </div>
  );
}
