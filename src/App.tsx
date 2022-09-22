import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Results } from "./Components/Results";

const App = () => {
  return (
    <div className="mainBody">
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="image" element={<Results />} />
          <Route path="news" element={<Results />} />
          <Route path="video" element={<Results />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
};

export default App;
