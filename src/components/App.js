import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';


const LoginPage = lazy(() =>
  import('./Pages/LoginPage/LoginPage')
);
const RegisterPage = lazy(() =>
  import('./Pages/RegisterPage/RegisterPage')
);
const HomePage = lazy(() =>
  import('./Pages/HomePage/HomePage')
);
const ContactsList = lazy(() =>
  import('./ContactsList/ContactsPage')
);

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={<ContactsList />}
          />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="register"
            element={<RegisterPage />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}
