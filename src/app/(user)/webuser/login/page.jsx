'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaLock } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import InputField from '@/Components/SharComponents/InputField';
import Link from 'next/link';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-lg w-full mx-auto my-10 px-5 py-4 bg-white rounded-md shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">Login</h2>

      {/* Mobile Input */}

      <InputField icon={<FaPhoneAlt className="text-[#666666] " />} type={"text"} placeholder={"Mobile"} />

      {/* Password Input */}

      <InputField icon={<FaLock className="text-[#666666]" />} type={"password"} placeholder={"Password"} />


      {/* Remember me + Forgot */}
      <div className="flex items-center justify-between my-4">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="accent-blue-500 w-5 h-5" />
          Remember me
        </label>
        <Link href={"/webuser/password-forgot"} className="text-sm text-orange-500 hover:underline">
          Forgot Password
        </Link>
      </div>

      {/* Login Button */}
      <Link href={"/webuser/dashboard"}>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded mb-4 cursor-pointer">
          Login
        </button>
      </Link>

      {/* Register Link */}
      <p className="text-center text-sm">
        Don&apos;t have an account?
        <Link href={"/webuser/register"} className="text-orange-500 font-medium hover:underline ml-2">
          Register
        </Link>
      </p>
    </div>
  );
}
