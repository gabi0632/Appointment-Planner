import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';
export const AppointmentsPage = ({
  contacts,
  appointments,
  addAppointment,
}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('no contact');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, data, time);
    setTitle('');
    setContact('');
    setData('');
    setTime('');
  };
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={data}
          setDate={setData}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {appointments && <TileList tiles={appointments} />}
      </section>
    </div>
  );
};
