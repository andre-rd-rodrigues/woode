import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const mapStateToProps = ({ entities }) => {
  return {
    isAuthenticated: entities.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
