import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserContext } from "../App";

function Register() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [inputs, setInputs] = useState({});
  const [isLogin, setLogin] = useState(true);
  const [user, setUser] = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = inputs;
    if (!email || !password || (!isLogin && !name)) {
      const notify = () => {
        toast.error("Please fill out all fields", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };
      notify();
      return;
    }

    try {
      setLoading(true);
      if (isLogin) {
        // Login
        const response = await axios.post("api/v1/auth/login", {
          email: inputs.email,
          password: inputs.password,
        });
        setUser(response.data.user);
        setCookie("token", response.data.user.token, {
          path: "/",
          secure: true,
          httpOnly: true,
        });
      } else {
        // Register
        const response = await axios.post("api/v1/auth/register", inputs);
        setUser(response.data.user);
        setCookie("token", response.data.user.token, {
          path: "/",
          secure: true,
          httpOnly: true,
        });
      }
      const notify = () => {
        toast.success("sucessful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };

      notify();
    } catch (err) {
      console.log(err.response?.data.msg);
      toast.error(err.response?.data.msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-100 px-5">
      <div
        className={`flex w-[400px] ${
          isLogin ? "h-[500px]" : "h-[550px]"
        } flex-col items-center rounded-[4px] border-t-[5px] border-t-main bg-white p-10 drop-shadow-md`}
      >
        <div className="col-span-10 flex items-center font-Inter text-2xl font-bold">
          <span className="w-12 rounded-lg bg-main text-center text-5xl text-white">
            J
          </span>
          <h1 className="pl-4 tracking-widest text-main">JobHub</h1>
        </div>
        <p className="py-7 text-3xl">{isLogin ? "Login" : "Register"}</p>
        <form className="w-full" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="flex w-full flex-col justify-between pb-5">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                className="h-8 w-full rounded-md border border-slate-300 bg-slate-100 pl-2"
              />
            </div>
          )}
          <div className="flex w-full flex-col justify-between pb-5">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              className="h-8 w-full rounded-md border border-slate-300 bg-slate-100 pl-2"
            />
          </div>
          <div className="flex w-full flex-col justify-between pb-7">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              className="h-8 w-full rounded-md border border-slate-300 bg-slate-100 pl-2"
            />
          </div>
          <button
            type="submit"
            className="flex h-10 w-full items-center justify-around rounded-md border bg-main text-xl text-white drop-shadow-md"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <ToastContainer />
        </form>
        <p className="pt-5">
          Not a member yet ?{" "}
          <button className="text-main" onClick={() => setLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
