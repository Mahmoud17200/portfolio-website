import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainSec from "./components/sections/Main-Sec";
import ContactPage from "./components/pages/ContactPage";
import ProjectsPage from "./components/pages/ProjectsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSec />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
};

export default App;
