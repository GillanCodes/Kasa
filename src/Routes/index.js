import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar";
import NotFound from "../Components/NotFound";
import Footer from "../Components/Footer";
import About from "../Components/About/About";
import Rental from "../Components/Rental/Rental";

export default function index()
{
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/rental/:id" Component={Rental} />
                <Route path="*" Component={NotFound} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}