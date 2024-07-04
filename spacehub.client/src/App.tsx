import './App.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './Components/Homepage/Home';
import NotFoundImage from './Components/NotFound/NotFoundImage';
import FaqWithImage from './Components/FAQ/FaqWithImage';
import HeaderSimple from './Components/Header/HeaderSimple'; // Updated import for HeaderSimple

function App() {
    return (
        <MantineProvider>
            <Router>
                <HeaderSimple /> {/* Render HeaderSimple outside of Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faq" element={<FaqWithImage />} />
                    {/* Add more routes */}
                    <Route path="*" element={<NotFoundImage />} />
                </Routes>
            </Router>
        </MantineProvider>
    );
}

export default App;
