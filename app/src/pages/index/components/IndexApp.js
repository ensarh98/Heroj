import "../css/IndexApp.css";
import Button1 from "../../../shared_components/Button1";
import LogoComponent from "../../../shared_components/LogoComponent";
import SearchField1 from "../../../shared_components/Searchfield1";

function IndexApp() {
  return (
    <>
      <Button1 text={"Testiranje"} fontSize={"30px"} />
      <LogoComponent />
      <SearchField1 placeholder={"Unesite simptom"} />
    </>
  );
}

export default IndexApp;
