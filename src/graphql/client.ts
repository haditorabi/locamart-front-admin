const API_URL = import.meta.env.VITE_GRAPHQL_API || "";
const tokenKey = import.meta.env.VITE_ACCESS_TOKEN_KEY;
import { Client, fetchExchange, OperationResult } from "@urql/core";

export const client = new Client({
  url: API_URL,
  exchanges: [fetchExchange],
  fetchOptions: () => {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
      },
    };
  },
});
