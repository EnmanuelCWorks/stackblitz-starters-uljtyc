import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://www.raydelto.org/agenda.php')
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  const addContact = async (newContact) => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });

      const data = await response.json();

      if (data.success) {
        setContacts([...contacts, newContact]);
      } else {
        alert('Hubo un error al agregar el contacto.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Agenda de Contactos</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
