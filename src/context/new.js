import React, { createContext, useContext, useState } from "react";

// Create context
const authContext = createContext();

// Create provider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({ ...auth, user: parseData.user, token: parseData.token });
    }
  }, []);
  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
};

// Create custom hook to use the context
const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
