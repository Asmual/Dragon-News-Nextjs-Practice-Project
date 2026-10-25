'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

// Preset curated modern avatar options
const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
];

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(PRESET_AVATARS[0]);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedAvatar(previewUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', {
      name,
      email,
      password,
      avatar: selectedAvatar,
      acceptedTerms,
    });
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-lg shadow-slate-200/50 transition-all">
      {/* Header with Switch Tabs */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Create Account
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Join the Dragon News community
          </p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <Link
            href="/login"
            className="text-slate-500 hover:text-slate-800 px-3 py-1 rounded-lg transition"
          >
            Sign In
          </Link>
          <span className="bg-white text-rose-600 px-3 py-1 rounded-lg shadow-xs">
            Register
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 mt-3">
        {/* Modern Interactive Avatar Selector (Replaces outdated Photo URL text input) */}
        <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedAvatar}
                alt="Selected avatar"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-rose-500 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-rose-600 rounded-full flex items-center justify-center text-white ring-1 ring-white">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Your Avatar</p>
              <p className="text-[10px] text-slate-400">Pick or upload photo</p>
            </div>
          </div>

          {/* Quick preset avatar pills */}
          <div className="flex items-center gap-1.5">
            {PRESET_AVATARS.map((avatar, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedAvatar(avatar)}
                className={`w-7 h-7 rounded-full overflow-hidden transition-all ${
                  selectedAvatar === avatar
                    ? 'ring-2 ring-rose-600 scale-110 shadow-xs'
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={avatar} alt={`Avatar option ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Asmual Obaidul"
              required
              className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white text-slate-800 placeholder-slate-400 pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15 transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white text-slate-800 placeholder-slate-400 pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15 transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 6 characters"
              required
              minLength={6}
              className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white text-slate-800 placeholder-slate-400 pl-9 pr-9 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition"
              aria-label="Toggle password"
            >
              {showPassword ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 pt-0.5">
          <input
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
            className="checkbox checkbox-xs rounded border-slate-300 text-rose-600 focus:ring-rose-500"
          />
          <label htmlFor="terms" className="text-[11px] text-slate-500 cursor-pointer">
            I agree to the <span className="font-semibold text-slate-800 hover:underline">Terms & Conditions</span>
          </label>
        </div>

        {/* Submit Button with Curve & Subtle Glow */}
        <button
          type="submit"
          className="btn min-h-0 h-10 w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-semibold rounded-xl text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-rose-500/25 border-none transition-all duration-200 active:scale-98 cursor-pointer mt-1"
        >
          Create Account
        </button>

        <p className="text-center text-xs text-slate-500 font-medium pt-1">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-rose-600 font-bold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
