"use client";
import { axiosDiagon } from "@/axios";
import AuthContext from "@/store/auth-context";
import { useContext, useEffect } from "react";

const Login = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      window.location.href = "/";
    }
  }, [authCtx]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    try {
      const token = await axiosDiagon
        .post("/auth/login", {
          email: email,
          password: password,
        })
        .then((res) => res.data.token);
      authCtx.login(token);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full my-28">
      <form
        className="max-w-2xl mx-auto min-w-[500px] flex flex-col gap-6 bg-white shadow-xl drop-shadow-lg p-8  rounded-md"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="p-3 bg-gray-400 bg-opacity-20 rounded-sm"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="p-3 bg-gray-400 bg-opacity-20 rounded-sm"
            placeholder="********"
          />
        </div>
        <button
          className="bg-pink-500 text-white py-2 rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
