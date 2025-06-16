"use client";

import { useLogin, usePrivy, useLogout } from "@privy-io/react-auth";

export default function LoginComponent() {
  const { ready, authenticated, user } = usePrivy();
  const { login } = useLogin();
  const { logout } = useLogout();

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (authenticated) {
    return (
      <div className="mb-5">
        <p className="mb-2.5">Logged in: {user?.wallet?.address}</p>
        <button 
          onClick={logout}
          className="px-4 py-2 border border-gray-300 rounded bg-gray-100 cursor-pointer hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <button 
        onClick={() => login()}
        className="px-4 py-2 border border-gray-300 rounded bg-gray-100 cursor-pointer hover:bg-gray-200"
      >
        Login
      </button>
    </div>
  );
} 