import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../store/slice/AuthSlice";
import { showToast } from "../store/store.hooks";

const API_ENDPOINT = "https://birthday-mate-api.herokuapp.com/api/v1/";

const baseQuery = fetchBaseQuery({
  baseUrl: API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // logout
    showToast(
      "Looks like your session has expired, please login again.",
      "error"
    );
    setTimeout(() => {
      api.dispatch(logOut());
    }, 1000);
  }
  return result;
};

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "authApi",
  tagTypes: ["user"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
export const { useLoginMutation, useSignupMutation } = authApi;
