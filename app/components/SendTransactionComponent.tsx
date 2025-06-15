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
    return <div style={{ marginBottom: '20px' }}>Please log in first</div>;
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <button 
        onClick={handleSendTransaction} 
        disabled={isLoading}
        style={{ 
          padding: '8px 16px', 
          border: '1px solid #ccc', 
          borderRadius: '4px', 
          backgroundColor: isLoading ? '#e0e0e0' : '#f5f5f5',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.6 : 1
        }}
      >
        {isLoading ? "Sending..." : "Send 0.0001 ETH"}
      </button>
    </div>
  );
} 