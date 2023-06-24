import React from "react";

function Register() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-100 px-5">
      <div className="flex h-[500px] w-[400px] flex-col items-center rounded-[4px] border-t-[5px] border-t-main bg-white p-10 drop-shadow-md">
        <div className="col-span-10 flex items-center font-Inter text-2xl font-bold">
          <span className="w-12 rounded-lg bg-main text-center text-5xl text-white">
            J
          </span>
          <h1 className="pl-4 tracking-widest text-main">JobHub</h1>
        </div>
        <p className="py-7 text-3xl">Login</p>
        <div className="flex w-full flex-col justify-between pb-5">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="h-8 w-full rounded-md border border-slate-300 bg-slate-100 pl-2"
          />
        </div>
        <div className="flex w-full flex-col justify-between pb-7">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            className="h-8 w-full rounded-md border border-slate-300 bg-slate-100 pl-2"
          />
        </div>
        <button
          type="submit"
          className="flex h-10 w-full items-center justify-around rounded-md border bg-main text-xl text-white drop-shadow-md"
        >
          Submit
        </button>
        <p className="pt-5">
          Not a member yet ? <button className="text-main">Register</button>
        </p>
      </div>
    </div>
  );
}

export default Register;
