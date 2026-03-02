import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import CoreCourses from './pages/CoreCourses';
import Tradecourses from './pages/Tradecourses';
import SingleCourse from './pages/SingleCourse';
import Courseplay from './pages/Courseplay';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';

/* Layouts */
import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import { UserProvider } from './context/UserContext';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
  // Standalone route — user arrives here directly from the verification email link
  { path: '/verify-email', element: <VerifyEmail /> },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'core-courses', element: <CoreCourses /> },
      { path: 'trade-courses', element: <Tradecourses /> },
      { path: 'course/:id', element: <SingleCourse /> },
      { path: 'playcourse', element: <Courseplay /> },
    ],
  },
]);

export default function App() {
  return (
    <MantineProvider>
      <Notifications position="top-right" />
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </MantineProvider>
  );
}
