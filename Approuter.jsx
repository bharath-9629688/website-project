import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/ABOUT/About";
import Blog from "../components/BLOG/blog";
import Main from "../components/MAIN/Main";
import Contact from "../components/CONTACT/Contact";

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="About" element={<About />} />
           <Route path="Contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
