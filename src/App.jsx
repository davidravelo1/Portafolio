import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Index from "./pages/index";
import Proyects from "./pages/proyects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/proyects" element={<Proyects/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
