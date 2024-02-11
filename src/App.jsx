import './App.css';
import { Offline } from "react-detect-offline";
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home';
import Movie from './Component/Movie/Movie';
import People from './Component/People/People';
import Tv from './Component/Tv/Tv';
import UserLayout from './Layouts/UserLayout';
import Notfound from './Component/Notfound/Notfound';
import ItemDetails from './Component/ItemDetails/ItemDetails';
import SystemLayout from './Layouts/SystemLayout';
import Disconnected from './Component/Disconnected/Disconnected';

import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';


function App() {

  let routes = createHashRouter([
    {
      path: '/', element: <UserLayout />, children: [
        { index: true, element: <Home /> },
        { path: 'Home', element: <Home /> },
        { path: 'Movie', element: <Movie /> },
        { path: 'People', element: <People /> },
        { path: 'TvShowes', element: <Tv /> },
        { path: 'details/:id/:media', element: <ItemDetails /> },
        { path: '*', element: <Notfound /> }
      ]
    },
    {
      path: '/', element: <SystemLayout />, children: [
        { index: true, element: <SignIn /> },
        { path: 'signin', element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
      ]
    }

  ])


  return (
    <>
      <online><RouterProvider router={routes}></RouterProvider></online>
      <Offline><Disconnected /></Offline>

    </>
  );
}

export default App;
