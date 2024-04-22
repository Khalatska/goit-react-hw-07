import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContact } from "../../redux/selectors";

const ContactList = () => {
  const selectContacts = useSelector(selectContact);
  const selectNameFilter = useSelector((state) => state.filter.filters.name);

  const filteredContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
