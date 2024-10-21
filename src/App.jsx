import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './assets/css/styles.css'
import Watched from './pages/Watched'
import ToSee from "./pages/ToSee";
import Layout from "./pages/Layout";

function App() {
  // Titre de la page
  document.title = "AnimeList";

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="tosee" element={<ToSee />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
