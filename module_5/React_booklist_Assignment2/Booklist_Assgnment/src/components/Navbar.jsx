import "./style.css";
import { Link } from "react-router-dom";

function Navbar(){
  return (
    <div className="nav-bar">
      <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/Browsebooks"><li>Browse Books</li></Link>
      <Link to="/Addbookpage"><li>Add Book Page</li></Link>
      </ul>
    </div>
  )
};

export default Navbar;