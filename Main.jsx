import { Outlet } from "react-router-dom";
import Footer from "../../FOOTER/Footer";
import Header from "../../HEADER/header";


export default function Main() {
  return (
    <div>
      <Header/>
      <main>
       <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
