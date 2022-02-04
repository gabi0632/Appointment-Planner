import React from 'react';

export const ContactPicker = ({ contacts, contact, setContact }) => {
  return (
    <select
      value={contact}
      required
      onChange={(value) => {
        setContact(value);
      }}
    >
      <option key={-1} value='no contact'>
        no contact
      </option>
      {contacts.map((value, key) => {
        return (
          <option key={key} value={value.name}>
            {value.name}
          </option>
        );
      })}
    </select>
  );
};
