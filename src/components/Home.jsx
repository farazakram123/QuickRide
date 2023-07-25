import Navbar from "./Navbar.jsx"
import BookACar from "./BookACar.jsx"
import Car from "./Car.jsx"
import Description from "./Description.jsx"
import MidDescription from "./MidDescription.jsx"
import DisplayCar from "./DisplayCar.jsx"
import Footer from "./Footer.jsx"

function Home() {
    return (
        <>
            <Navbar />
            <Car />
            <BookACar />
            <Description />
            <MidDescription />
            <DisplayCar />
            <Footer />
        </>
    )
}

export default Home
