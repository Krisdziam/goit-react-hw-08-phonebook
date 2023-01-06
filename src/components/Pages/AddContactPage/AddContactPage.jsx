import { useState } from 'react';
import styles from './AddContactPage.module.css';
import { nanoid } from 'nanoid';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddContactMutation } from 'redux/contactsApi';
import { useFetchContactsQuery } from 'redux/contactsApi';
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import { height } from '@mui/system';

export default function AddContactPage() {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    setId(nanoid());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const isDuplicate = contacts.find(
      contact => contact.name === name
    );
    if (isDuplicate === undefined) {
      addContact({ name, number, id });
      toast.success(`Contact ${name} has been added`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    } else {
      toast.error(`${name} already exist`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <>
      <Card
        sx={{
          width: 500,
          margin: '0 auto',
          padding: '30px',
          borderRadius: '10px',
          color: 'rgb(0, 0, 0)',
          backgroundColor: 'rgba(244, 244, 246, 0.4)',
          boxShadow: 'rgb(0 0 0 / 20%) 5px 5px 23px 9px',
        }}
        variant="outlined"
      >
        <CardContent
          sx={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">
            Add new contact
          </Typography>
          <form
            className={styles.form}
            onSubmit={handleSubmitForm}
          >
            <div className={styles.formContainer}>
              <div className={styles.inputPadding}>
                <TextField
                  id="outlined-basic"
                  label="Enter name"
                  variant="outlined"
                  size="small"
                  className={styles.input}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[A-Za-zА-Яа-яЁёІіЇїЄє]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  required
                />
              </div>
              <div className={styles.phoneContainer}>
                <PhoneInput
                  className={styles.inputPhone}
                  country={'ua'}
                  excludeCountries={'ru'}
                  onChange={number => {
                    setNumber(number);
                  }}
                  type="tel"
                  name="number"
                  value={number}
                  autocompleteSearch="false"
                />
              </div>
            </div>
          </form>
          <Button
            sx={{
              margin: '20px 0',
            }}
            variant="contained"
            type="submit"
          >
            Add Contact
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
