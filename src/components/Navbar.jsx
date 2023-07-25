import { Link } from "react-router-dom";
import image from "../images/navbarCar.png"
import "../styles/Navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="pic">
                    <img src={image} alt="Car" className="logo" />
                    <Link to="/"><h3>QuickRide</h3></Link>
                </div>
                <ul className="ul">
                    <li><Link to="home-link">Home</Link></li>
                    <li><Link to="about-link">About</Link></li>
                    <li><Link to="models-link">Vehicle Models</Link></li>
                    <li><Link to="testimonials-link">Testimonials</Link></li>
                    <li><Link to="team-link">Our Team</Link></li>
                    <li><Link to="contact-link">Contact</Link></li>
                </ul>
                <div className="navbar__buttons">
                    <Link className="signup-btn" to="/register">SignUp</Link>
                    <Link className="login-btn" to="/login">Login</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;