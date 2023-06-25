import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { Landing, Error, Register } from "./pages";
import {
  AllJobs,
  Stats,
  AddJob,
  Profile,
  SharedLayout,
} from "./pages/dashboard";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
