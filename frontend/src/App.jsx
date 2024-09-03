import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AllBooks from "./pages/AllBooks";  
import { Routes, Route } from "react-router-dom";
import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails";
import Chatbot from "./components/chat/Chatbot";
import StreetView from "./pages/StreetView";

function App() {
  return (
    <div>  
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/herb-catalog" element={<AllBooks />} />
           <Route path="/street-view" element={<StreetView />} />
           <Route path="/get-herb-by-id/:id" element={<ViewBookDetails/>}/>
           {/* Handle unknown routes */}
           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
