import { Link } from "react-router-dom";
import { navSvg } from "../../svg/navSvg";
import { changeClass } from "../../scripts/scripts";

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <div className="nav-wrapper">
      <Link to="/" className="nav-logo">
        Logo
      </Link>
      <div className="nav-links">
        <Link>Link</Link>
        <Link>Link</Link>
        <div className="nav-basket">Basket</div>
      </div>
      </div>
    </nav>
  );
}
