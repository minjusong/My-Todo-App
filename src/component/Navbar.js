import { Link } from "react-router-dom";
import { FaEquals } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <FaEquals />
                <div className="links">
                    <Link to="/create">작성</Link></div>
            </div>
        </nav>
    )
}

export default Navbar;