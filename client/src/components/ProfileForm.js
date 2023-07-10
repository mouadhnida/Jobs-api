import React from "react";

export default function ProfileForm({ user, handleChange, handleSubmit }) {
  return (
    <form
      className="my-12 flex flex-col items-center gap-16"
      onSubmit={handleSubmit}
    >
      <div className="flex min-h-[18rem] w-11/12 flex-col gap-8 rounded bg-white p-9 shadow-md">
        <div className="text-3xl">Profile</div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 m-md:flex m-md:flex-col m-lg:grid-cols-2">
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="h-9 rounded border border-slate-300 bg-slate-100 pl-2"
              value={user?.name}
              onChange={handleChange}
              maxLength={15}
            />
          </div>
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="h-9 rounded border border-slate-300 bg-slate-100 pl-2"
              value={user?.lastName}
              onChange={handleChange}
              maxLength={20}
            />
          </div>
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="h-9 rounded border border-slate-300 bg-slate-100 pl-2"
              value={user?.email}
              onChange={handleChange}
            />
          </div>
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              className="h-9 rounded border border-slate-300 bg-slate-100 pl-2"
              value={user?.location}
              onChange={handleChange}
              maxLength={20}
            />
          </div>
          <div className="h-18 flex w-full items-end justify-center">
            <button
              type="submit"
              className="h-9 w-full rounded bg-main text-white shadow drop-shadow transition-all duration-300 hover:bg-main2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
