import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

function App() {
    const [page, setPage] = useState("home");
    return (
        <div className={"page " + page}>
            <BrowserRouter>
                <Navigation setPage={setPage} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
