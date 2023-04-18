import ForumButton from "./ForumButton";

function ScrollDivInformation(props) {
    return (
        <div id={props.id} className={"d-flex flex-wrap justify-content-center"}>
            <h1 className={"text-center"}>
                Treba nam heroja!
            </h1>
            <p className={"text-center "}>
                Jeste li znali da u Americi samo 10% populacije zna da uradi CPR?
                Da u Ujedinjenom Kraljevstvu samo 5% stanovništva ima znanje i samouvjerenost za prvu pomoć?
                U Kanadi samo 18% osjeća da može pružiti prvu pomoć?
                Možete da zamislite kakva je tek situacija sa Bosnom i Hercegovinom bez bilo kakvih istraživanja.
                Zato Vas molimo da se edukujete koliko možete, ne samo radi samih Vas nego svih u potrebi! Više informacija na:
            </p>
            <ForumButton className={props.className}/>
        </div>
    );
}

export default ScrollDivInformation;