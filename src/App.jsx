import Avatar from "./components/Avatar/Avatar";
import portrait from "./assets/panoramic_view.jpeg";
import Info_Card from "./components/Info_Card/Info_Card";
import Carousel from "./components/Tech_Carousel/Carousel";
import Loading from "./components/Loading/Loading";
import Devops from "./components/Devops_card/Devops";
import Backend from "./components/Backend_card/Backend";
import "./App.css";


function App() {
  return (
    <div className="container">
      <Avatar src={portrait} alt="My portrait" size={{width: 800, height: 400 }} />
      <Info_Card />
      <Carousel />
      <Loading />
      <div style={{ display: "flex", alignItems: "center" , maxWidth: "80%" }}>
        <Devops />
        <div className="vertical-divider" />
        <Backend />
      </div>

      
    </div>
  );
}
export default App;
