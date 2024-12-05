import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Gallerry from "./pages/gallery";
import Divisions from "./pages/divisions";
import Events from "./pages/events";

const App = function () {
  return (
    <div className="w-full overflow-x-hidden bg-tertiary   h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/gallerry" element={<Gallerry />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
