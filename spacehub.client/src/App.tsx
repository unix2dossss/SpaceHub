import './App.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Homepage/Home';
import NotFoundImage from './Components/NotFound/NotFoundImage';
import FaqWithImage from './Components/FAQ/FaqWithImage';
import About from './Components/AboutUs/About';
import Membership from './Components/Membership/Membership';
import Events from './Components/Events/Events';
import Layout from './Components/Layout';
import LoginV3 from './Components/Admin/LoginV3';
import Register from './Components/Admin/Register';
import Portal from './Components/Admin/Portal';
import ManageMembers from './Components/Admin/ManageMembers/ManageMembers';
import ManageEvents from './Components/Admin/ManageEvents/ManageEvents';


const theme = createTheme({
    fontFamily: 'Greycliff CF, sans-serif',
    colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    },
});


const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFoundImage />,
    },
    {
        path: "/admin",
        element: <LoginV3 />,
    },
    {
        path: "/admin/register",
        element: <Register />,
    },
    {
        path: "/admin/portal",
        element: <Portal></Portal>,
    },
    {
        path: "/admin/events",
        element: <ManageEvents/>,
    },
    {
        path: "/admin/members",
        element: <ManageMembers/>,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "faq",
                element: <FaqWithImage />,
            },
            {
                path: "events",
                element: <Events />,
            },
            {
                path: "membership",
                element: <Membership />,
            },
        ],
    },
]);


function App() {
    return (
        <MantineProvider forceColorScheme='dark'>
            <RouterProvider router={router} />
        </MantineProvider>
    );
}

export default App;