import { lazy, Suspense, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const ListEmployeeComponent = lazy(
  () => import("./components/ListEmployeeComponent")
);

const AddEmployee = lazy(() => import("./components/AddEmployee"));

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/About"));
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employee" element={<ListEmployeeComponent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<AddEmployee />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
