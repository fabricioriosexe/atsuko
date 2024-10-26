import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import ReelPage from './components/ReelPage';
import DirectoresPages from './components/DirectoresPages';
import StaffPage from './components/StaffPage';
import ContactPage from "./components/ContactPage";


function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/reel" element={<ReelPage />} />
            <Route path="/directores" element={<DirectoresPages />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </Router>
    );
}

export default App;
