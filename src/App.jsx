import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { changeFilter, selectNameFilter } from './redux/filtersSlice';
import { selectContacts } from './redux/contactsSlice';
import './App.css'


export default function App() {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const handleAddContact = (newContact) =>{
    dispatch(addContact(newContact));
  };
  const handleDeleteContact = (id) => {
   dispatch(deleteContact(id));
  };
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox onChange={handleFilterChange } />
      <ContactList contacts={filterContacts} onDelete={handleDeleteContact} />
    </div>
  );
};


