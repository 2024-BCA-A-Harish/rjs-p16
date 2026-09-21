import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/contactus">Contact Us</Link>
    </nav>
  );
}

export default Navigation;