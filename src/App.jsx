// import { useEffect, useState } from 'react'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { changeFilter, selectNameFilter } from './redux/filtersSlice';
import './App.css'
import { selectContacts } from './redux/contactsSlice';

function App() {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
 

  // const initialContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];
  
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  // return savedContacts ?
  //   JSON.parse(savedContacts) : initialContacts;
  // });

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const [filter, setFilter] = useState('');


  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const onAddContact = (newContact) =>{
    dispatch(addContact(newContact));
  };
  const onDeleteContact = (id) => {
   dispatch(deleteContact(id));
  };
  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm addContact={onAddContact} />
      <SearchBox filter={filter} onChange={onFilterChange}/>
      <ContactList contacts={filterContacts} onDelete={onDeleteContact} />
    </div>
  );
};

export default App
