import './App.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './Components/Homepage/Home';
import NotFoundImage from './Components/NotFound/NotFoundImage';
import FaqWithImage from './Components/FAQ/FaqWithImage';
import About from './Components/AboutUs/About';
import Membership from './Components/Membership/Membership';
import Events from './Components/Events/Events';
import Layout from './Components/Layout';
import { AdminLayout } from './Components/Admin/AdminLayout';
import Login from './Components/Admin/Login';


const theme = createTheme({
    fontFamily: 'Greycliff CF, sans-serif',
    colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    },
});

//const router = createBrowserRouter([
//    {
//        path: "*",
//        element: <NotFoundImage />,
//    },
//    {
//        path: "/admin",
//        element: <Login />,
//    },
//    {
//        path: "/admin/portal",
//        element: <AdminLayout />,
//        children: [
//            {
//                path: "/admin/portal",
//                element: <Home />, // Admin home page
//            },
//            {
//                path: "/admin/portal/events",
//                element: <Events />,
//            },
//            {
//                path: "/admin/portal/members",
//                element: <Membership />,
//            },
//        ],
//    },
//    {
//        path: "/",
//        element: <Layout />,
//        children: [
//            {
//                path: "",
//                element: <Home />,
//            },
//            {
//                path: "about",
//                element: <About />,
//            },
//            {
//                path: "faq",
//                element: <FaqWithImage />,
//            },
//            {
//                path: "events",
//                element: <Events />,
//            },
//            {
//                path: "membership",
//                element: <Membership />,
//            },
//        ],
//    },
//]);


const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFoundImage />,
    },
    {
        path: "/admin",
        element: <Login />,
    },
    {
        path: "/admin/portal",
        element: <AdminLayout><Home></Home></AdminLayout>,
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
