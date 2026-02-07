import { useLocation } from "react-router-dom";
import "./PageTransition.css";

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition enter">
      {children}
    </div>
  );
}

export default PageTransition;
