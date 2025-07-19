import { Routes, Route, Navigate } from "react-router-dom";
import VerbList from "./pages/VerbList";
import VerbDetail from "./pages/VerbDetail";
import "./app.css"

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="verbs" />} />
      <Route path="verbs">
        <Route index element={<VerbList />} />
        <Route path=":verb" element={<VerbDetail />} />
      </Route>
    </Routes>
  );
};
