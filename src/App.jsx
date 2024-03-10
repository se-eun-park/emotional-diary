import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteTest from "./components/RouteTest";

import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import DiaryPage from "./pages/DiaryPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
      <RouteTest />
    </BrowserRouter>
  );
}

export default App;
