import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useWindowSize } from "./hooks";

import {
  Home,
  TermsAndConditions,
  Verification,
  Confirmation,
  Help,
  FaQ,
  Notice,
  Term,
} from "./page";

function App() {
  useWindowSize();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/faq" element={<FaQ />} />
        <Route path="/help/notice" element={<Notice />} />
        <Route path="/help/term" element={<Term />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
