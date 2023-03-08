import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../../components/BlogPost/Header";
import { Posts } from "../../components/BlogPost/Posts";
import "./HomePage.css";

function HomePage() {
  return (
   
    <Routes>
      <Route index element={
        <div className="blog">
          <Header/>
          <Posts/>
        </div>
      }/>
    </Routes>

  
  );
}
export default HomePage;
