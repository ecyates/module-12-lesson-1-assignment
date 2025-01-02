import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactContext from "./context/ContactContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products";

function App() {
  const [contacts] = useState([
    {id: 1, name: 'Amber', bg:'bg-dark'}, 
    {id: 2, name: 'Beverly', bg:'bg-light'}, 
    {id: 3, name: 'Clara', bg:'bg-light'}, 
    {id: 4, name: 'Daniela', bg:'bg-light'}, 
    {id: 5, name: 'Elsbeth', bg:'bg-light'}, 
    {id: 6, name: 'Flora', bg:'bg-light'}, 
    {id: 7, name: 'Gabby', bg:'bg-light'}, 
    {id: 8, name: 'Hannah', bg:'bg-light'}, 
    {id: 9, name: 'Izzy', bg:'bg-light'}, 
    {id: 10, name: 'Jasmine', bg:'bg-light'}, 
  ]);
  const [ selectedContact, setSelectedContact] = useState(contacts[0].id);

  return (
    <>
    <ContactContext.Provider value={{contacts, selectedContact, setSelectedContact}}>
      <ContactList />
    </ContactContext.Provider>
      <Products/>
    </>
  )
};

export default App;
