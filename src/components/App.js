import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const LoginPage = lazy(() =>
  import('./Pages/LoginPage/LoginPage')
);
const RegisterPage = lazy(() =>
  import('./Pages/RegisterPage/RegisterPage')
);
const AddContactPage = lazy(() =>
  import('./Pages/AddContactPage/AddContactPage')
);
const ContactsPage = lazy(() =>
  import('./ContactsList/ContactsPage')
);

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
console.log(isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AddContactPage />} />
          <Route
            path="contacts"
            element={<ContactsPage />}
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
