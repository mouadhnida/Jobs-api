import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateJobForm from "../../components/UpdateJobForm";
import useAxios from "../../hooks/useAxios";

export default function UpdateJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({
    position: "",
    company: "",
    jobLocation: "",
    status: "interview",
    jobType: "full-time",
  });
  const [updatedJob, setUpdatedJob] = useState();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const [res] = useAxios({
    url: `https://jobhub-juyq.onrender.com/api/v1jobs/${id}`,
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    if (res && res.data) {
      setJob(res.data?.job);
    }
  }, [res]);

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
      const res = await axios.patch(`https://jobhub-juyq.onrender.com/api/v1jobs/${id}`, job, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUpdatedJob(res.data);
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
    if (updatedJob) {
      setTimeout(() => navigate("/all-jobs"), 1000);
    }
  }, [updatedJob, navigate]);

  return (
    <div>
      <UpdateJobForm
        job={job}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
      {loading ? <p>loading...</p> : null}
    </div>
  );
}
