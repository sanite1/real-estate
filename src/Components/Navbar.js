
import {FaHome} from "react-icons/fa"

const Navbar = () => {
    return (  
        <nav>
            <h1>BITVILLE <span>REALATORS</span></h1>
            <div className="">
                <FaHome className="nav-icon"/>
            </div>
        </nav>
    );
}
 
export default Navbar;