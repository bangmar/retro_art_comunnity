import React from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
	const { user, pending } = AppContext();

	if (pending) {
		return null;
	} else {
		if (!user) {
			return <Navigate to='/' />;
		}
	}
	return children;
};

export default ProtectedRoute;
