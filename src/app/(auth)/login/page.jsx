'use client';

import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-lg p-8 sm:p-14 shadow-sm border border-gray-100 my-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#403F3F]">
        Login your account
      </h1>

      <div className="border-t border-gray-200 my-8"></div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-[#403F3F] mb-2">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full bg-[#F3F3F3] text-[#403F3F] placeholder-[#9F9F9F] px-5 py-4 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#403F3F]/20 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#403F3F] mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full bg-[#F3F3F3] text-[#403F3F] placeholder-[#9F9F9F] px-5 py-4 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#403F3F]/20 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#403F3F] hover:bg-neutral-800 text-white font-semibold py-4 rounded-md text-base transition shadow-sm mt-4 cursor-pointer"
        >
          Login
        </button>

        <p className="text-center text-sm font-medium text-[#706F6F] pt-2">
          Dont’t Have An Account ?{" "}
          <Link
            href="/register"
            className="text-[#FF3811] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
