"use client";

import { useState } from "react";
import { FaSpinner, FaCheck } from "react-icons/fa"; // Spinner and checkmark icons

export default function AddToCartButton({ onAdd }) {
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handleClick = async () => {
    setStatus("loading");

    // Simulate async cart adding
    await new Promise((res) => setTimeout(res, 1000));

    // Add to cart logic
    if (onAdd) onAdd();

    setStatus("done");

    // Reset back to idle after 2 seconds (optional)
    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <button
      className="relative hover:bg-blue-800 bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2"
      onClick={handleClick}
      disabled={status === "loading"}
    >
      {status === "loading" && (
        <FaSpinner className="animate-spin h-4 w-4" />
      )}
      {status === "done" && (
        <FaCheck className="text-green-300 h-4 w-4" />
      )}
      {status === "idle" && "ADD TO CART"}
      {status === "loading" && "Processing..."}
      {status === "done" && "Added!"}
    </button>
  );
}
