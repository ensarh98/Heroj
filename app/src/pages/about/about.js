import "./about.css"
import LogoComponent from "../../shared_components/LogoComponent";
import Footer from "./footer";
import AboutWindow from "./aboutwindow";
import {useRef} from "react";
import Sidebar from "../../shared_components/Sidebar";
import ShowSidebar from "../../shared_components/ShowSidebarButton";

export default function About() {
    const sidebarRef = useRef(null);
    const openNav = () => {
        sidebarRef.current.style.left = "0";
    };

    const closeNav = () => {
        sidebarRef.current.style.left = "-400px";
    };
  return (
      <div className={"AboutMainDiv"}>
          <Sidebar innerRef={sidebarRef} closeNav={closeNav} />
          <ShowSidebar onClick={openNav} />
        <LogoComponent/>
          <div className={"AboutMainSection"}>
              <AboutWindow title={"O Prvoj Pomoći"}>
                  <p>Jeste li znali da u Americi samo 10% populacije zna kako uraditi CPR? Da u Ujedinjenom Kraljevstvu samo 5% stanovništva ima znanje i samopouzdanje za prvu pomoć? U Kanadi samo 18% osjeća da može pružiti prvu pomoć. Nažalost, tačne informacije o situaciji u BiH su trenutačno nedostupne, no malo je razloga za optimizam. Zato Vas molimo da se edukujete koliko možete, ne samo radi samih Vas nego za sve kojima bude potrebna prva pomoć, koristeći našu aplikaciju.</p>
              </AboutWindow>
              <AboutWindow title={"O Nama "}>
                  <p className={"ONamaWindowText"}>
                      <div className={"ONamaDiv"}><span className={"ONamaSpan"}>Projekat:</span>Heroj</div>
                      <div className={"ONamaDiv"}><span className={"ONamaSpan"}>Predmet:</span>Web Programiranje II</div>
                      <div className={"ONamaDiv"}><span className={"ONamaSpan"}>Predmetni profesor:</span>Sead Delalić</div>
                      <div className={"ONamaDiv"}><span className={"ONamaSpan"}>Studenti:</span>
                          <ul>
                              <li>Harun Hadžić - <a href={"https://github.com/hare2049"} target={"_blank"}>https://github.com/hare2049</a></li>
                              <li>Ensar Horozović - <a href={"https://github.com/Ensarh98"} target={"_blank"}>https://github.com/Ensarh98 </a></li>
                              <li>Edim Omerhožić - <a href={"https://github.com/edi18"} target={"_blank"}>https://github.com/edi18 </a></li>
                              <li>Davud Duranović - <a href={"https://github.com/Davud24"} target={"_blank"}>https://github.com/Davud24 </a></li>
                              <li>Alma Bašić - <a href={"https://github.com/AlmaBasic"} target={"_blank"}>https://github.com/AlmaBasic"</a></li>
                          </ul>
                      </div>
                  </p>
              </AboutWindow>
          </div>
        <Footer/>
      </div>
  )
}