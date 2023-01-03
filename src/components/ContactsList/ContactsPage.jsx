import Loader from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getContactFilter } from 'redux/contactsSlice';
import { ContactList } from './ContactList';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  const { data: contacts, isLoading } =
    useFetchContactsQuery();
  const filterContact = useSelector(getContactFilter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContact)
    );
  };

  const filteredContacts =
    filterContact === '' ? contacts : filterContacts();

  return (
    <>
      {contacts !== undefined && contacts.length > 0 && (
        <Filter />
      )}
      {isLoading && <Loader />}
      {filteredContacts && (
        <ContactList contacts={filteredContacts} />
      )}
    </>
  );
};

export default ContactsPage;
