import "./App.css";
import Message from "./Components/Message";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Story from "./Pages/Story";
import Catigories from "./Pages/Catigories";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Search from "./Components/Search";
function App() {
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/our-story" element={<Story />} />
    <Route path="/categories" element={<Catigories />} />
    <Route path="/shop" element ={ <Shop/> }/>
    <Route path="/contact-us" element={<Contact />} />
  </Routes>;
  return (
    <>
      <Message />
      <NavBar />
      <Search/>
    </>
  );
}

export default App;
