import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import VerbList from "./pages/VerbList";
import VerbDetail from "./pages/VerbDetail";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Game />} />
      <Route path="verbs">
        <Route index element={<VerbList />} />
        <Route path=":verb" element={<VerbDetail />} />
      </Route>
    </Routes>
  );
};
