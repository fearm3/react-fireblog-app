import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "../components/Navbar";
import About from "../pages/About";
import Details from "../pages/Details";
import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";

const PrivateRouter = ({ isUserSignedIn }) => {
  return (
    <>
      {!isUserSignedIn ? (
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateBlog" element={<UpdateBlog />} />
        </Routes>
      )}
    </>
  );
};

export default PrivateRouter;
