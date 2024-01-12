import Root from './Root';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';


const router = createBrowserRouter([
    {
       path: '/',element: <Root/>, 
       errorElement: <h1>Page Didn't Found</h1>,
       children: [
        {path: '/home',element: <Home/>},
        {path: '/aboutus',element: <AboutUs/>},
        {path: '/products', element: <Products/>},
        {path: '/services',element: <Services/>},
        {path: '/portfolio', element: <Portfolio/>},
        {path: '/contactus', element: <ContactUs/>},
       ]
    },
    {
        
    }
])

function Routes(){
    return(
        <RouterProvider router={router}/>
    );
}

export default Routes;