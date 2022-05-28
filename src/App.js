import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignSystem from "./DesignSystem";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="design" element={<DesignSystem />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
