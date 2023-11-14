import React from 'react';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {`${contact.nombre} ${contact.apellido} - ${contact.telefono}`}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
