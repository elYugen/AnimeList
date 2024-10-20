import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Watched from './pages/Watched'
import './assets/css/styles.css'

function App() {
  // Titre de la page
  document.title = "Mon nouveau titre";

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
