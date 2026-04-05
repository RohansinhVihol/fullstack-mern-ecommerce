import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/orders";
import Login from "./components/Login";
import { ToastContainer, toast } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const getTokenWithExpiry = () => {
  const itemStr = localStorage.getItem("token");

  if (!itemStr) return "";

  const item = JSON.parse(itemStr);
  const now = new Date().getTime();

  if (now > item.expiry) {
    localStorage.removeItem("token");
    return "";
  }

  return item.value;
};

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {

    if (token) {
      localStorage.setItem("token", token);

      const timer = setTimeout(() => {
        localStorage.removeItem("token");
        setToken("");
      }, 3600000); // 10 seconds

      return () => clearTimeout(timer);
    }

  }, [token]);

 //expre ke bad bhi direct page open hota he 
  return (
    <div className="bg-gray-50 min-h-screen">
       <ToastContainer />
      {token == "" ? (
        <Login setToken={setToken}/>
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml[5vw,25px] my-8 text-gray-600 text=base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
