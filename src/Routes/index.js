import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import NotFound from "../Components/NotFound";

export default function index()
{
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={Home} />
                <Route path="*" Component={NotFound} />
            </Routes>
        </BrowserRouter>
    )
}