import './App.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './Components/Homepage/Home';
import NotFoundImage from './Components/NotFound/NotFoundImage';
import FaqWithImage from './Components/FAQ/FaqWithImage';
import HeaderSimple from './Components/Header/HeaderSimple'; // Updated import for HeaderSimple
import About from './Components/AboutUs/About';
import Membership from './Components/Membership/Membership';
import Events from './Components/Events/Events';
import Layout from './Components/Layout';
import { AdminLayout } from './Components/AdminLayout';
import CardsCarousel from './Components/Events/CardsCarousel';
import Login from './Components/Admin/Login';

const theme = createTheme({
    fontFamily: 'Greycliff CF, sans-serif',
    colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    },
});

function App() {
    return (
        <MantineProvider forceColorScheme='dark'>
            <Router>
                {/*<HeaderSimple />  Render HeaderSimple outside of Routes */}
                <Routes>
                    <Route path="/" element={<Layout> <Home/> </Layout>} />
                    <Route path="/about" element={<Layout> <About /> </Layout>} />
                    <Route path="/faq" element={<Layout> <FaqWithImage /> </Layout>} />
                    <Route path="/events" element={<Layout> <Events /> </Layout>} />
                    <Route path="/membership" element={<Layout> <Membership /> </Layout>} />
                    <Route path="/admin" element={<Login />} />
                    <Route path="/admin/events" element={<AdminLayout> <Membership /> </AdminLayout>} />
                    <Route path="/admin/membership" element={<AdminLayout> <Membership /> </AdminLayout>} />
                    <Route path="*" element={<Layout> <NotFoundImage /> </Layout>} />
                </Routes>
            </Router>
            
        </MantineProvider>
    );
}

export default App;
