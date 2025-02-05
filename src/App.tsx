import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Summary from './pages/Summary';
import Compare from './pages/Compare';
import Landing from './pages/Landing';
import DocumentComparison from './pages/DocumentComparison';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Index />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/doc-comparison" element={<DocumentComparison />} />
      </Routes>
    </Router>
  );
}

export default App;