import { Outlet, Link } from "react-router-dom";
import '../styles/NavBar.css';
const Layout = () => {
  return (
    <>
      <nav className="navigation-menu">
        <ul className="navigation-menu ul">
          <li className="navigation-menu li">
            <Link className="navigation-menu li a" to="/">Start</Link>
          </li>
          <li className="navigation-menu li">
            <Link className="navigation-menu li a" to="/dogopedia">Dogopedia</Link>
          </li>
          <li className="navigation-menu li">
            <Link className="navigation-menu li a" to="/element">Element</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
