"use client";

import { usePrivy, useSendTransaction } from "@privy-io/react-auth";
import { useState } from "react";

export default function SendTransactionComponent() {
  const { authenticated } = usePrivy();
  const { sendTransaction } = useSendTransaction();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendTransaction = async () => {
    if (!authenticated) return;
    
    setIsLoading(true);
    try {
      const result = await sendTransaction({
        to: '0xCDE9B19Ce3Fa9aB540713A48225DE3DEd4D75903',
        value: 100000 // 0.0001 ETH in wei
      });
      
      console.log('Transaction sent!', result);
      alert(`Transaction sent! Hash: ${result.hash}`);
    } catch (error) {
      console.error('Transaction failed:', error);
      alert(`Transaction failed: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!authenticated) {
    return <div className="mb-5">Please log in first</div>;
  }

  return (
    <div className="mb-5">
      <button 
        onClick={handleSendTransaction} 
        disabled={isLoading}
        className={`px-4 py-2 border border-gray-300 rounded transition-all duration-200 ${
          isLoading 
            ? 'bg-gray-200 cursor-not-allowed opacity-60' 
            : 'bg-gray-100 hover:bg-gray-200 cursor-pointer'
        }`}
      >
        {isLoading ? "Sending..." : "Send 0.0001 MON"}
      </button>
    </div>
  );
} 