"use client";

import { useState } from "react";

enum Staus {
  idle,
  loading,
  success,
  error,
}

export default function Home() {
  const [status, setStatus] = useState<Staus>(Staus.idle);
  const [secret, setSecret] = useState("");

  const updateWebsite = async () => {
    setStatus(Staus.loading);
    try {
      const response = await fetch("/api/updatewebsite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ secret }),
      });
      const data = await response.json();

      if (response.status !== 200) {
        console.error(data);
        setStatus(Staus.error);
        return;
      }
      console.log(data);
      setStatus(Staus.success);
    } catch (error) {
      console.error(error);
      setStatus(Staus.error);
      return;
    }
  };

  return (
    <main className="flex min-h-screen flex-col text-gray-800 bg-gray-100">
      <div className="p-10 w-full flex justify-center">
        {status === Staus.loading && <p>Updating website...</p>}
        {status === Staus.success && (
          <p>Website updated! Wait for 5 min to Reflect</p>
        )}
        {status === Staus.error && <p>Failed to update website</p>}
        {status === Staus.idle && (
          <div className="flex space-x-5">
            <input
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter Secret"
              className="p-2 border border-gray-300 rounded"
            />
            <button
              onClick={updateWebsite}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Website
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
