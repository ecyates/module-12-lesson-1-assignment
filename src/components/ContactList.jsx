import { useContext } from "react";
import ContactContext from "../context/ContactContext";
import { Container, ListGroup } from 'react-bootstrap';

const ContactList = () => {
    const { contacts, selectedContact, setSelectedContact } = useContext(ContactContext);
    
    return (
        <Container>
            <h1>Contact List</h1>
            <ListGroup>
                {contacts.map(contact=>(
                    <ListGroup.Item action variant="info"
                    key={contact.id} 
                    onClick={()=>setSelectedContact(contact.id)} 
                    className={contact.id===selectedContact?'bg-info':''}>
                        {contact.name}</ListGroup.Item>))}
            </ListGroup>
        </Container>
    )

};

export default ContactList;