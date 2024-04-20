import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manage from "./components/Manage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Manage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
