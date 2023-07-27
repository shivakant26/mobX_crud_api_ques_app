import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
    const token = localStorage.getItem('token');
    const AdminToken = localStorage.getItem('adminToken');

    if (token || AdminToken) {
        return true
    } else {
        return false
    }
}

const ProtectedRoutes = ({ children }) => {
    const auth = useAuth()

    return auth ? children : <Navigate to="/" />
}
export default ProtectedRoutes;