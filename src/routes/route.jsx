import React from 'react'
import LoginPage from '../Pages/LoginPage';
import NotFound from '../component/ErrorPages/NotFound';
import Layout from '../component/AdminPanel/Layout';
import DashboardPage from '../Pages/Admin/DashboardPage';
import MarketingCoPage from '../Pages/Admin/MarketingCoPage';
import MarketingMaPage from '../Pages/Admin/MarketingMaPage';
import StudentPage from '../Pages/StudentPage';
import FacultyPage from '../Pages/Admin/FacultyPage';
import PrototypeTable from '../component/Prototype/PrototypeTable';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../component/Student/pages/Home/Home';
import Submit from '../component/Student/pages/Submit/Submit';
import StudentAdminPage from '../Pages/Admin/StudentAdminPage';

const route = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFound />,

  },
  {
    path: "/admin",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/admin",
        element: <DashboardPage />
      },
      { path: "/admin/marketing-manager", element: <MarketingMaPage /> },
      { path: "/admin/marketing_coordinator", element: <MarketingCoPage /> },
      { path: "/admin/student", element: <StudentAdminPage/> },
      { path: "/admin/faculty", element: <FacultyPage /> },
    ]
  },
  {
    path: "/prototype",
    element: <PrototypeTable />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <StudentPage />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/student",
        element: <StudentPage />
      },
      { path: "/student/home", element: <Home /> },
      { path: "/student/submit", element: <Submit /> },
    ]
  },

]);

export default route