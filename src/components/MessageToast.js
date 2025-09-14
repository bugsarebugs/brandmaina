"use client";

import { useMessage } from "../contexts/MessageContext";

export default function MessageToast() {
  const { message } = useMessage();

  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition">
      {message}
    </div>
  );
}
