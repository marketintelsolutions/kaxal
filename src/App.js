import SharedLayout from "./components/SharedLayout";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
