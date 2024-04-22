import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={css.container}>
      <div>
        <b>
          <p>{contact.name}</p>
        </b>
        <p>{contact.number}</p>
      </div>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
