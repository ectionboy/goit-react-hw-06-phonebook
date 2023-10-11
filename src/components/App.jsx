import ContactsList from "./ContactsList/ContactsList";
import Form from "./Form/Form";

export const App = () => {
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <ContactsList />
    </div>
  );
};
