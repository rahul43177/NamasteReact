import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/HeaderComponent";
import {BodyComponent} from './components/BodyComponent'
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ErrorComponent from "./components/ErrorComponent";
import ContactUsComponent from "./components/ContactUsComponent";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path : "/" , 
    element : <AppLayout/> , 
    errorElement : <ErrorComponent/>
  } , 
  {
    path : "/about" , 
    element : <AboutUs/>
  } , 
  {
    path : "/contactus" , 
    element : <ContactUsComponent/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {AppRouter}/>);