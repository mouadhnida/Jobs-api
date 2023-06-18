import { Routes, Route } from "react-router-dom";
import {Landing, Error, Register} from "./pages";
import {AllJobs, Stats, AddJob, Profile, SharedLayout} from "./pages/dashboard"

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Stats/>}/>
                <Route path="all-jobs" element={<AllJobs/>}/>
                <Route path="add-job" element={<AddJob/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Route>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </>
    )
}

export default App;
