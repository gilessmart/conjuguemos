import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import VerbList from "./pages/VerbList";
import VerbDetail from "./pages/VerbDetail";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Game />} />
      <Route path="settings" element={<Settings />} />
      <Route path="verbs">
        <Route index element={<VerbList />} />
        <Route path=":verb" element={<VerbDetail />} />
      </Route>
    </Routes>
  );
};
