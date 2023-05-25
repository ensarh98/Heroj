import { useRef , useState} from 'react';

import NavBar from "./NavBar";
import LandingDiv from "./LandingDiv";
import ScrollDiv from "./ScrollDiv";
import Footer from "./Footer";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../css/index.css"
import LogOutScreen from "./LogOutScreen";

function IndexApp() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)

    const scrollRef = useRef(null);

    const handleArrowClick = () => {
        scrollRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div>
            <NavBar onClick={() => setIsOpen(true)} onClick2={() => setIsOpen2(true)} onClick3={() => setIsOpen3(true)}/>
            <LandingDiv onClick={handleArrowClick}/>
            <ScrollDiv onClick={() => setIsOpen(true)} ref={scrollRef}/>
            <SignUpForm onClose={() => setIsOpen(false)} open={isOpen}/>
            <LogInForm onClose={() => setIsOpen2(false)} open={isOpen2}/>
            <LogOutScreen onClose={() => setIsOpen3(false)} open={isOpen3}/>
            <Footer/>
        </div>
    );
}


export default IndexApp;