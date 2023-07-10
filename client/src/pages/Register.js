import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useName } from "../context/NameProvider"

function Register() {
  const [name, setName] = useName()
  const [inputs, setInputs] = useState({});
  const [isLogin, setLogin] = useState(true);
  const [user, setUser] = useState(null);
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
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      if (isLogin) {
        // Login
        const response = await axios.post("https://jobhubapi/v1/auth/login", {
          email: inputs.email,
          password: inputs.password,
        });
        setUser(response.data.user);
        const token = response.data?.user.token;
        const name = response.data?.user.name;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        setName(localStorage.getItem("name"))
      } else {
        // Register
        const response = await axios.post("https://jobhub-juyq.onrender.com/api/v1auth/register", inputs);
        setUser(response.data.user);
        const token = response.data?.user.token;
        const name = response.data?.user.name;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        setName(localStorage.getItem("name"))
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
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(true);
      setTimeout(() => {
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
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } // eslint-disable-next-line
  }, [user]);

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-5 bg-slate-100">
      <div
        className={`flex w-[400px] ${
          isLogin ? "h-[500px]" : "h-[550px]"
        } flex-col items-center rounded-[4px] border-t-[5px] border-t-main bg-white p-10 drop-shadow-md`}
      >
        <div className="flex items-center col-span-10 text-2xl font-bold font-Inter">
          <span className="w-12 text-5xl text-center text-white rounded-lg bg-main">
            J
          </span>
          <h1 className="pl-4 tracking-widest text-main">JobHub</h1>
        </div>
        <p className="text-3xl py-7">{isLogin ? "Login" : "Register"}</p>
        <form className="w-full" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="flex flex-col justify-between w-full pb-5">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                className="w-full h-8 pl-2 border rounded-md border-slate-300 bg-slate-100"
                maxLength={15}
              />
            </div>
          )}
          <div className="flex flex-col justify-between w-full pb-5">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              className="w-full h-8 pl-2 border rounded-md border-slate-300 bg-slate-100"
            />
          </div>
          <div className="flex flex-col justify-between w-full pb-7">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              className="w-full h-8 pl-2 border rounded-md border-slate-300 bg-slate-100"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-around w-full h-10 text-xl text-white border rounded-md bg-main drop-shadow-md hover:bg-main2"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <ToastContainer />
        </form>
        <p className="pt-5">
          Not a member yet ?{" "}
          <button
            className="text-main hover:text-main2"
            onClick={() => setLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
