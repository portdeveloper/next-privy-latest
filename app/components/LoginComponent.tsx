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
      <div style={{ marginBottom: '20px' }}>
        <p style={{ marginBottom: '10px' }}>Logged in: {user?.wallet?.address}</p>
        <button 
          onClick={logout}
          style={{ 
            padding: '8px 16px', 
            border: '1px solid #ccc', 
            borderRadius: '4px', 
            backgroundColor: '#f5f5f5',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <button 
        onClick={() => login()}
        style={{ 
          padding: '8px 16px', 
          border: '1px solid #ccc', 
          borderRadius: '4px', 
          backgroundColor: '#f5f5f5',
          cursor: 'pointer'
        }}
      >
        Login
      </button>
    </div>
  );
} 