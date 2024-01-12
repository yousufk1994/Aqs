import {Outlet} from 'react-router-dom';
import Navigation from './components/navbar/Navigation';


function Root() {
  return (
    <>
    <Navigation/>
    <Outlet/>
    
    </>
  )
}

export default Root