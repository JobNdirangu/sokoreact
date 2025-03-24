import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const Pagenotfound=()=> {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-dark">404</h1>
      <p className="fs-4 text-muted">Oops! Page not found.</p>
      <p className="text-secondary">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      
      <Link to="/" className="btn btn-primary mt-3">
        Go Home
      </Link>
    </div>
  );
    
}
export default Pagenotfound