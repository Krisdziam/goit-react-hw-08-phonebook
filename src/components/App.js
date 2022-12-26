import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import Loader from './Loader/Loader';


const Form = lazy(() => import('./HomePage/HomePage'));
const ContactsList = lazy(() =>
  import('./ContactsList/ContactsPage')
);

export function App() {
  return (
    <Suspense fallback={<Loader/>}>
      {/* <Routes> */}
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form />
      <ContactsList />
      <ToastContainer />
    </div>
    {/* </Routes> */}
    </Suspense>
  );
}
