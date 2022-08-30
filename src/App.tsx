import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, TermsAndConditions, Certification } from "./page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/certification" element={<Certification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
