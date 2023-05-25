import { useRef , useState} from 'react';

import NavBar from "./NavBar";
import LandingDiv from "./LandingDiv";
import ScrollDiv from "./ScrollDiv";
import Footer from "./Footer";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import "../css/IndexApp.css";

function IndexApp() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)

    const scrollRef = useRef(null);

    const handleArrowClick = () => {
        scrollRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={"indexApp"}>
            <NavBar onClick={() => setIsOpen(true)} onClick2={() => setIsOpen2(true)} onClick3={() => setIsOpen3(true)}/>
            <LandingDiv onClick={handleArrowClick}/>
            <ScrollDiv onClick={() => setIsOpen(true)} ref={scrollRef}/>
            <SignUpForm onClose={() => setIsOpen(false)} open={isOpen}/>
            <LogInForm onClose={() => setIsOpen2(false)} open={isOpen2}/>
            <Footer/>
        </div>
    );
}


export default IndexApp;