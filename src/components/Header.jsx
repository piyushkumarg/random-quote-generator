import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const homeClass = location.pathname === "/" ? "menu active" : "menu";
  const bookmarkClass =
    location.pathname === "/bookmark" ? "menu active" : "menu";

  return (
    <div className="header">
      <Link className={homeClass} to="/">
        Home
      </Link>
      <Link className={bookmarkClass} to="/bookmark">
        Bookmark
      </Link>
    </div>
  );
};

export default Header;
