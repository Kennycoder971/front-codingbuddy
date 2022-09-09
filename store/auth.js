import { createContext, useState, useEffect } from "react";
import { getCookie, setCookie, removeCookie } from "@/utils/cookieHelpers";
import axiosReq from "@/utils/axiosReq";

const AuthContext = createContext({
  user: {},
  register: () => {},
  login: () => {},
  logout: () => {},
});
const API_URL = process.env.API_URL;

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Register user
  const register = async ({ username, email, password }) => {
    const url = `${API_URL}/auth/register`;
    const payload = {
      username,
      email,
      password,
    };

    try {
      const { data, error } = await axiosReq(url, "post", payload);

      if (error) throw error;
      // Set the cookie jwt
      setCookie("jwt", data?.token, "/");
      setUser(data?.data);

      return data;
    } catch (error) {
      setUser(null);
      throw error;
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    const payload = { email, password };
    const url = `${API_URL}/auth/login`;
    try {
      const { data, error } = await axiosReq(url, "post", payload);

      if (error) throw error;

      // Set the cookie jwt
      setCookie("jwt", data?.token, "/");
      setUser(data?.data);
      return data;
    } catch (error) {
      setUser(null);
      throw error;
    }
  };

  // Log user out
  const logout = async () => {
    removeCookie("jwt", "/");
    setUser(null);
    location.assign("/login");
  };

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    const jwt = getCookie("jwt");

    const url = `${API_URL}/auth/me`;
    if (jwt) {
      const { data, error } = await axiosReq(url, "get");

      if (error) throw error;

      try {
        setUser(data?.data);
      } catch (error) {
        console.log(error);
        setUser(null);
        throw error;
      }
    }
  };

  const context = {
    user,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
