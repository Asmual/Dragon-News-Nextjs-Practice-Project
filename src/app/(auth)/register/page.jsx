'use client';

import Link from 'next/link';
import { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-lg p-8 sm:p-14 shadow-sm border border-gray-100 my-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#403F3F]">
        Register your account
      </h1>

      <div className="border-t border-gray-200 my-8"></div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-[#403F3F] mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full bg-[#F3F3F3] text-[#403F3F] placeholder-[#9F9F9F] px-5 py-3.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#403F3F]/20 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#403F3F] mb-2">
            Photo URL
          </label>
          <input
            type="url"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
            placeholder="Enter your photo url"
            className="w-full bg-[#F3F3F3] text-[#403F3F] placeholder-[#9F9F9F] px-5 py-3.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#403F3F]/20 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#403F3F] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full bg-[#F3F3F3] text-[#403F3F] placeholder-[#9F9F9F] px-5 py-3.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#403F3F]/20 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#403F3F] mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full bg-[#F3F3F3] text-[#403F3F] placeholder-[#9F9F9F] px-5 py-3.5 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#403F3F]/20 transition"
          />
        </div>

        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            name="acceptedTerms"
            id="terms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
            className="checkbox checkbox-sm rounded border-gray-400"
          />
          <label htmlFor="terms" className="text-xs text-[#706F6F] cursor-pointer">
            Accept <span className="font-semibold text-[#403F3F]">Term & Conditions</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#403F3F] hover:bg-neutral-800 text-white font-semibold py-4 rounded-md text-base transition shadow-sm mt-3 cursor-pointer"
        >
          Register
        </button>

        <p className="text-center text-sm font-medium text-[#706F6F] pt-2">
          Already Have An Account ?{" "}
          <Link
            href="/login"
            className="text-[#FF3811] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
