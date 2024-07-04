import './App.css';
import { useMantineColorScheme, MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './Components/Homepage/Home';
import NotFoundImage from './Components/NotFound/NotFoundImage';
import FaqWithImage from './Components/FAQ/FaqWithImage';
import HeaderSimple from './Components/Header/HeaderSimple'; // Updated import for HeaderSimple
import About from './Components/AboutUs/About';
import Membership from './Components/Membership/Membership';

const theme = createTheme({
    fontFamily: 'Greycliff CF, sans-serif',
    colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    },
});

function App() {
    const { setColorScheme, clearColorScheme } = useMantineColorScheme();
    setColorScheme('light')
    return (
        <MantineProvider>
            <Router>
                <HeaderSimple /> {/* Render HeaderSimple outside of Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FaqWithImage />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="*" element={<NotFoundImage />} />
                </Routes>
            </Router>
        </MantineProvider>
    );
}

export default App;
