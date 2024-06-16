import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortener from './URLShortener';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shorten" element={<URLShortener/>} />
      </Routes>
    </Router>
  );
}

export default App;
