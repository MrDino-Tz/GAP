import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PDFExtractor from "./pages/PDFExtractor";
import GpaTools from "./pages/GpaTools";
import WhatIfSimulator from "./pages/WhatIfSimulator";
import TargetGpaCalculator from "./pages/TargetGpaCalculator";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/extract" element={<PDFExtractor />} />
      <Route path="/tools" element={<GpaTools />} />
      <Route path="/tools/what-if" element={<WhatIfSimulator />} />
      <Route path="/tools/target-gpa" element={<TargetGpaCalculator />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
