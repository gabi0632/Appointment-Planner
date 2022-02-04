import React from 'react';

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <select onChange={({ target }) => setContact(target.value)}>
      {contacts.map((value, key) => {
        return (
          <option key={key} value={value.name}>
            {value.name}
          </option>
        );
      })}
      <option value='no value'>no value</option>;
    </select>
  );
};
