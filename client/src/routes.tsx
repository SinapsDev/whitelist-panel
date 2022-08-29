import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home/Home";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
        </Routes>
    )
}

export default Routers;