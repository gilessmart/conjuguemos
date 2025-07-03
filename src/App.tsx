import { Routes, Route, Navigate } from "react-router-dom";
import VerbList from "./pages/VerbList";
import VerbDetail from "./pages/VerbDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/verbs" />} />
      <Route path="/verbs" element={<VerbList />} />
      <Route path="/verbs/:verb" element={<VerbDetail />} />
    </Routes>
  );
}

export default App;
