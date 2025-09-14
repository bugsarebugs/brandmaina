"use client";

import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showMessage = (msg, timeout = 3000) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), timeout);
  };

  return (
    <MessageContext.Provider value={{ message, showMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
