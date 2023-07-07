import React from "react";

function LogoutButton({ onClick }) {
  return (
    <button
      className="absolute mt-2 h-10 w-44 bg-[#caf6fc] text-main"
      onClick={onClick}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
