import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProfileForm from "../../components/ProfileForm";
import { useName } from "../../context/NameProvider";

function Profile() {
  // eslint-disable-next-line
  const [name, setName] = useName();
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://jobhub-juyq.onrender.com/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res && res.data) {
        setUser(res.data?.user);
      }
    };
    getUser();
  }, [token]);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.patch(`https://jobhub-juyq.onrender.com/api/v1/auth/updateUser`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
      localStorage.setItem("token", res.data?.user.token);
      localStorage.setItem("name", res.data?.user.name);
      setName(localStorage.getItem("name"));

      setTimeout(
        () =>
          toast.success("Profile has been updated successfully.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }),
        1000
      );
    } catch (error) {
      setTimeout(
        () =>
          toast.error(error?.response?.data.msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }),
        1000
      );
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <div>
      <ProfileForm
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {loading ? <p>loading...</p> : null}
    </div>
  );
}

export default Profile;
