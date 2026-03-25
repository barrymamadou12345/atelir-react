/**
 * App.jsx - Point d'entrée principal de l'application
 * Configure React Router DOM pour la navigation entre les pages
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Settings from "./pages/Settings";

function App() {
  return (
    // BrowserRouter active le routing dans l'application
    <BrowserRouter>
      {/* Routes contient toutes les routes de l'application */}
      <Routes>
        {/* Route parent avec le Layout */}
        <Route path="/" element={<Layout />}>
          {/* Route index = page par défaut (/) */}
          <Route index element={<Home />} />

          {/* Routes pour chaque page */}
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
