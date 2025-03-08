import { useState } from "react";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ListEmployeeComponent />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
