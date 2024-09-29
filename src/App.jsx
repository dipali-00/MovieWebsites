import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AppLayout } from "./Components/layout/AppLayout";
import { Home } from './Components/pages/Home';
import { About } from './Components/pages/About';
import { Movie } from './Components/pages/Movie';
import { Contact, contactData } from './Components/pages/Contact';
import { ErrorPage } from './Components/pages/ErrorPage';
import { getMoviesData } from './API/GetAPIData';
import { MovieDetails } from './Components/layout/UI/MovieDetails';
import { getMovieDetails } from './API/GetMovieDetails';



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path : "/",
          element :<Home/>,
        },
        {
          path : "/about",
          element :<About/>,
        },
        {
          path : "/movie",
          element :<Movie/>,
          loader: getMoviesData,
         },
         {
          path : "/movie/:movieID",
          element :<MovieDetails/>,
          loader: getMovieDetails,
        
         },
         {
          path : "/contact",
          element :<Contact/>,
          action : contactData,
         },
         
        ]
      }])      

     return(<RouterProvider router={router}></RouterProvider>);
};
  

export default App;
