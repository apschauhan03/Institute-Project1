import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Courses from './pages/Courses/Courses';
import Layout from './pages/Layout';
import HomePage from './pages/Blog/HomePage'
import { LoginPage } from './pages/Blog/LoginPage';
import { RegisterPage } from './pages/Blog/RegisterPage';
import { CreatePost } from './pages/Blog/CreatePost';
import { PostPage } from './pages/Blog/PostPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blogs' element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>
      </Route>
      
    </Routes>
  </BrowserRouter>
);
