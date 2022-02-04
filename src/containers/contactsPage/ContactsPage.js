import React, { useEffect, useState } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';
export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [Duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Duplicate) {
      addContact(name, phoneNumber, email);
      setName('');
      setPhoneNumber('');
      setEmail('');
    }
  };

  useEffect(() => {
    const isDuplicateName = () => {
      const find = contacts.find((contact) => contact.name === name);
      if (find) return true;
      return false;
    };
    if (isDuplicateName()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, email, phoneNumber]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phoneNumber}
          setPhone={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts && <TileList tiles={contacts} />}
      </section>
    </div>
  );
};
