import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, redirectPath = '/' }) => {
  // If user is authenticated, render the child components; otherwise, redirect
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;