import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';

const ContactListComponent = () => {

    const defaultContact = new Contact('Yanira', 'Martín Cámara', 'yaniramartin@gmail.com', false);


    return (
        <div>
            <div>
                <h1>Contactos: </h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};



export default ContactListComponent;
