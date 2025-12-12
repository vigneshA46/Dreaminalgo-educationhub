import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import CoreCourses from './pages/CoreCourses';
import Tradecourses from './pages/Tradecourses';
import SingleCourse from './pages/SingleCourse';
import Signup from './pages/Signup';
import Courseplay from './pages/Courseplay';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/core-courses", element: <CoreCourses /> },
  { path: "/trade-courses", element: <Tradecourses /> },
  { path: "/course", element: <SingleCourse /> },
  { path: "/signup", element: <Signup />},
  { path: "/playcourse", element: <Courseplay/>}
]);

export default function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
