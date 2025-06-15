"use client";

import { usePrivy } from "@privy-io/react-auth";
import LoginComponent from "./components/LoginComponent";
import SendTransactionComponent from "./components/SendTransactionComponent";

export default function Home() {
  const { ready } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '30px' }}>Privy Demo</h1>
      
      <h2 style={{ marginBottom: '15px' }}>Login</h2>
      <LoginComponent />
      
      <h2 style={{ marginBottom: '15px' }}>Send Transaction</h2>
      <SendTransactionComponent />
    </div>
  );
}
