import Link from "next/link";

import PageLink from "../page-link/page-link";

export default function LoginForm() {
  return (
    <div className="w-full mt-8 max-w-md mx-auto bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Welcome!</h2>
      <p className="text-center text-gray-600 mb-6">
        Please log in to your account
      </p>
      <form action="#" method="POST">
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Enter your email.
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <PageLink href="#">Forgot Password</PageLink>
          <button
            type="submit"
            className="bg-black text-white px-20 py-2 rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
