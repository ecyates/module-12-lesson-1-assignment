import React from 'react';

const ContactContext = React.createContext({
    contacts: [],
    setContacts: ()=>{},
    selectedContact: null,
    setSelectedContact:()=>{}
});

export default ContactContext;