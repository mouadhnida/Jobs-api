import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddJobForm from "../../components/AddJobForm";

export default function AddJob() {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    position: "",
    company: "",
    jobLocation: "",
    status: "interview",
    jobType: "full-time",
  });
  const [newJob, setNewJob] = useState();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    e.preventDefault();
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  const handleClear = (e) => {
    e.preventDefault();
    setJob({
      position: "",
      company: "",
      jobLocation: "",
      status: "interview",
      jobType: "full-time",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`https://jobhub-juyq.onrender.com/jobs`, job, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewJob(res.data);
      setTimeout(
        () =>
          toast.success("Job has been updated successfully.", {
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
  useEffect(() => {
    if (newJob) {
      setTimeout(() => navigate("/all-jobs"), 1000);
    }
  }, [newJob, navigate]);

  return (
    <div>
      <AddJobForm
        job={job}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
      {loading ? <p>loading...</p> : null}
    </div>
  );
}
