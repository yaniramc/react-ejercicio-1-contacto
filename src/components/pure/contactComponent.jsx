import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h1>
                Nombre: { contact.name }
            </h1>
            <h2>
                Apellidos: {contact.lastName }
            </h2>
            <h2>
                Email: { contact.email }
            </h2>
            <h2>
                Este contacto está: { contact.connected ? 'Contacto En Línea':'Contacto No Disponible' }
            </h2>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
