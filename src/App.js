import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { ContactForm } from './components/contactForm/ContactForm';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';
function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };

  const addContact = (name, phoneNumber, email) => {
    setContacts((prev) => [
      ...prev,
      {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
      },
    ]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => [
      ...prev,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  return (
    <>
      <Router>
        <nav>
          <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
          <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
        </nav>
        <Routes>
          <Route
            path={ROUTES.CONTACTS}
            element={
              <ContactsPage addContact={addContact} contacts={contacts} />
            }
          />
          <Route
            path={ROUTES.CONTACTS + '/contactForm'}
            element={<ContactForm />}
          />
          <Route
            path={ROUTES.APPOINTMENTS}
            element={
              <AppointmentsPage
                contacts={contacts}
                appointments={appointments}
                addAppointment={addAppointment}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
