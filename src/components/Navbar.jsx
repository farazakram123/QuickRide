import image from "../images/navbarCar.png"
import "../styles/Navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="pic">
                    <img src={image} alt="Car" className="logo" />
                    <a href="/"><h3>QuickRide</h3></a>
                </div>
                <ul className="ul">
                    <li><a href="home-link">Home</a></li>
                    <li><a href="about-link">About</a></li>
                    <li><a href="models-link">Vehicle Models</a></li>
                    <li><a href="testimonials-link">Testimonials</a></li>
                    <li><a href="team-link">Our Team</a></li>
                    <li><a href="contact-link">Contact</a></li>
                </ul>
                <div className="navbar__buttons">
                    <a className="signup-btn" href="/">SignUp</a>
                    <a className="login-btn" href="/">Login</a>
                </div>
            </nav>
        </>
    )
}
export default Navbar;