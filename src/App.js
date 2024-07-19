import "./App.css";
import { Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import ErrorPage from "./components/ErrorPage";
import TodaysDealPage from "./components/TodaysDealPage";
import CartPage from "./components/CartPage";

function App() {
  return (
   
      <div className="App">
        <NavbarComponent/>
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/todaysdeal" element={<TodaysDealPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          </Routes>
      </div>
  );
}

export default App;
