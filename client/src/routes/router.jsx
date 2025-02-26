import React from 'react';
import MainLayout from "../layouts/MainLayout.jsx"
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home.jsx';
import Login from '../pages/authentication/Login.jsx';
import Signup from '../pages/authentication/Signup.jsx';
import ResetPassword from '../pages/authentication/ResetPassword.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/resetpassword", element: <ResetPassword /> }
        ]
    }
])

export default router;