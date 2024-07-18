import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Rental from "../Pages/Rental";
import NotFound from "../Components/NotFound";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default function index()
{
    return (
        <BrowserRouter>
            {/* Navbar on all pages */}
            <Navbar />
            {/* Route to display right components */}
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/rental/:id" Component={Rental} />
                {/* if not routes before, display 404 error */}
                <Route path="*" Component={NotFound} />
            </Routes>
            {/* Footer on all pages */}
            <Footer />
        </BrowserRouter>
    )
}