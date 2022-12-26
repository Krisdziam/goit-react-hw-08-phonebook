import ContactsList from './ContactsList/ContactsPage';
import Form from './Form/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form />
      <h2>Contacts:</h2>
      <ContactsList />
      <ToastContainer />
    </div>
  );
}