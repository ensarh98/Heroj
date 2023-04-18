import { useRef , useState} from 'react';

import NavBar from "./NavBar";
import LandingDiv from "./LandingDiv";
import ScrollDiv from "./ScrollDiv";
import Footer from "./Footer";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)

    const scrollRef = useRef(null);

    const handleArrowClick = () => {
        scrollRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div>
            <NavBar onClick={() => setIsOpen(true)} onClick2={() => setIsOpen2(true)}/>
            <LandingDiv onClick={handleArrowClick}/>
            <ScrollDiv onClick={() => setIsOpen(true)} ref={scrollRef}/>
            <SignUpForm onClose={() => setIsOpen(false)} open={isOpen}/>
            <LogInForm onClose={() => setIsOpen2(false)} open={isOpen2}/>
            <Footer/>
        </div>
    );
}


export default App;