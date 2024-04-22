import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectContact, selectError, selectLoading } from "./redux/selectors";

function App() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="titleMain">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;
