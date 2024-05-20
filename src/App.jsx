import "./App.css";
import { Routes, Route } from "react-router-dom";
import GenaralForm from "./companents/GenaralForm";
import PortalForm from "./companents/PortalForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GenaralForm />} />
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
    </div>
  );
}

export default App;
