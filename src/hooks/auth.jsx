import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem("@desafiozukk-frontend:logged");
    return !!isLogged;
  });

  const singIn = (user, pass) => {
    if (user === "admin" && pass === "1234") {
      localStorage.setItem("@desafiozukk-frontend:logged", "true");
      setLogged(true);
    } else {
      alert(`Usuário ou senha inválidos!`);
    }
  };

  const signOut = () => {
    localStorage.removeItem("@desafiozukk-frontend:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, singIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export { AuthProvider, useAuth };
