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
      setCookie("jwt", data?.data.token, "/");
      setUser(data?.data);
      return data;
    } catch (error) {
      setUser(null);
      return error;
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    const payload = { email, password };
    const url = `${API_URL}/auth/login`;
    try {
      const { data } = await axiosReq(url, "post", payload);

      // Set the cookie jwt
      setCookie("jwt", data.data.token, "/");
      setUser(data.data.data);
      return data;
    } catch (error) {
      setUser(null);
      return error;
    }
  };

  // Log user out
  const logout = async () => {
    removeCookie("jwt", "/");
    setUser(null);
  };

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    const jwt = getCookie("jwt");

    const url = `${API_URL}/auth/me`;
    const payload = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    if (jwt) {
      const { data } = await axiosReq(url, "get", payload);

      try {
        setUser(data.data.data);
      } catch (error) {
        setUser(null);
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
