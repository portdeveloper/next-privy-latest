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
    <div className="p-5 font-sans">
      <h1 className="mb-8">Privy Demo</h1>
      
      <h2 className="mb-4">Login</h2>
      <LoginComponent />
      
      <h2 className="mb-4">Send Transaction</h2>
      <SendTransactionComponent />
    </div>
  );
}
