import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import PrivatRoute from './UserMenu/PrivatRoute';
import PublicRoute from './UserMenu/PublicRoute';

const HomePage = lazy(() =>
  import('./Pages/HomePage/HomePage')
);
const LoginPage = lazy(() =>
  import('./Pages/LoginPage/LoginPage')
);
const RegisterPage = lazy(() =>
  import('./Pages/RegisterPage/RegisterPage')
);
const ContactsPage = lazy(() =>
  import('./ContactsList/ContactsPage')
);

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="contacts"
            element={
              <PrivatRoute>
                <ContactsPage />
              </PrivatRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}
