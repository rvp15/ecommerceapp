import "./App.css";
import React,{Suspense} from "react";
import { Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import ErrorPage from "./components/ErrorPage";
//import TodaysDealPage from "./components/TodaysDealPage";
import CartPage from "./components/CartPage";
//import Registry from "./components/Registry";

//Lazy load component
const TodaysDealPage = React.lazy(() => import('./components/TodaysDealPage'));
const Registry = React.lazy(() => import('./components/Registry'));

function App() {
  return (
   
      <div className="App">
        <NavbarComponent/>
        <Suspense fallback={<div>Loading ...</div>}>
         <Routes>
          <Route path="/ecommerceapp" element={<HomePage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/todaysdeal" element={<TodaysDealPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/registry" element={<Registry/>}/>
          </Routes>
          </Suspense>
      </div>
  );
}

export default App;
