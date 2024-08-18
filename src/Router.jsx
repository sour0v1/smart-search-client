import { createBrowserRouter } from 'react-router-dom'
import Root from './Root';
import Home from './pages/home/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/log-in',
        element : <LogIn></LogIn>
      }
    ]
  },
]);

export default router;