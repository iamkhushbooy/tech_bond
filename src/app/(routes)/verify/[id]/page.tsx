
"use client";

import React, { useState } from "react";
import { verifyUser } from "./action";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const handleVerify = async () => {
    if (!id || Array.isArray(id)) {
      console.error("Invalid ID");
      return;
    }
    const res = await verifyUser(id);
    setMessage(res.message);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <button
        onClick={handleVerify}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Verify
      </button>
      {message && <p className="mt-4 text-gray-600">{message}</p>}
    </div>
  );
};

export default Page;




