import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const ProtectedRoutes = ({ children }) => {
    const { isAuthenticated, loading } = useSelector(state => state.user)
    const navigate = useNavigate();
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate("/login")
        }
    }, [isAuthenticated, loading])

    return (
        children
    );
};

export default ProtectedRoutes;