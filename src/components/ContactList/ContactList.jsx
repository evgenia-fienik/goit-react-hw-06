import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { resetFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();
   

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
        dispatch(resetFilter());
    }

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <ul className={css.ul}>
            
            {filteredContacts.map(({id, name, number}) => (
                <Contact key={id} name={name} number={number} id={id} onDelete={handleDeleteContact} />
            ))}
        </ul>
    );
}
