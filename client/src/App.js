import { React, useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/v1/jobs", {headers: new Headers({
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdlMWQxZTg0ZTdlNTEwN2RjMjIwNjciLCJuYW1lIjoiaG5pZGEiLCJpYXQiOjE2ODU5ODY1OTUsImV4cCI6MTY4ODU3ODU5NX0.4V0V7jqHk5f5lhNJXHWyYHWgaRIKCR2YN8cxFoR62A8"}), 
  })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.job)});
  }, []);
  console.log(data[0]);
  return (
    <div className="text-3xl font-bold underline">
      hy
     {data[0].company}
    </div>
  );
}

export default App;
