import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Landing, Error, Register, ProtectedRoute } from "./pages";
import {
  AllJobs,
  Stats,
  AddJob,
  Profile,
  SharedLayout,
  UpdateJob,
} from "./pages/dashboard";

axios.defaults.baseURL = "api/v1";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Stats />} />
        <Route path="all-jobs" element={<AllJobs />} />
        <Route path="all-jobs/:id" element={<UpdateJob />} />
        <Route path="add-job" element={<AddJob />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="landing" element={<Landing />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
