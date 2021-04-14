import "./App.css";
import Main from "./bt_Component/Main";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ProductList from "./component/ProductList";
import DemoDataBinding from "./data-binding/DemoDataBinding";
import Parent from "./props/Parent";
import RenderWithMap from "./render-with-map/RenderWithMap";
import ShowRoomCar from "./show-room-car/ShowRoomCar";


function App() {
  return (
    <div className="App">
      {/* <Header />
      <Carousel />
      <ProductList />
      <Footer /> */}

      {/* <DemoDataBinding /> */}
      {/* <ShowRoomCar /> */}

      {/* <RenderWithMap /> */}
      <Main/>
      {/* <Parent /> */}
    </div>
  );
}

export default App;
