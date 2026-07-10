import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PDFExtractor from "./pages/PDFExtractor";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/extract" element={<PDFExtractor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
