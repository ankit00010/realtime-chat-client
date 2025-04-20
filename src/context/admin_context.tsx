import React, { createContext, ReactNode, useCallback } from "react";

interface SocketProviderProps {
  children?: ReactNode;
}
export interface SocketContextType {
  sendMessage: (msg: string) => void;
}

export const SocketContext = createContext<SocketContextType | null>(null);

const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const sendMessage: SocketContextType["sendMessage"] = useCallback((msg) => {
    console.log("Send Message", msg);
  }, []);

  const socket_context_value = { sendMessage };

  return (
    <SocketContext.Provider value={socket_context_value}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
