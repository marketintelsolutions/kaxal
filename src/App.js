import SharedLayout from "./components/SharedLayout";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import News from "./pages/News";
import { useEffect } from "react";

function App() {

  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
