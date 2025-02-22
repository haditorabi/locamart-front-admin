import { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
  check: async () => {
    const tokenKey = import.meta.env.VITE_ACCESS_TOKEN_KEY;
    let token = null;
    if (tokenKey) {
      token = localStorage.getItem(tokenKey);
    } else {
      console.error("ACCESS_TOKEN_KEY is not defined");
    }
    return { authenticated: Boolean(token) };
  },
  login: async ({ email, password }) => {
    const API_URL = import.meta.env.VITE_API || "";
    const response = await fetch(API_URL + "/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.token) {
      const tokenKey = import.meta.env.VITE_ACCESS_TOKEN_KEY;
      if (tokenKey) {
        localStorage.setItem(tokenKey, data.token);
      } else {
        console.error("ACCESS_TOKEN_KEY is not defined");
      }
      return { success: true };
    }

    return { success: false };
  },
  logout: async () => {
    const tokenKey = import.meta.env.VITE_ACCESS_TOKEN_KEY;
    if (tokenKey) {
      localStorage.removeItem(tokenKey);
    } else {
      console.error("ACCESS_TOKEN_KEY is not defined");
    }
    // We're returning success: true to indicate that the logout operation was successful.
    return { success: true };
  },
  onError: async (error) => {
    console.log(error);
    throw new Error("Not implemented");
  },
  // ...
};
