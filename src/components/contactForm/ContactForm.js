import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
          placeholder='Contact Name'
        />
        <input
          type='tel'
          value={phone}
          // pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}'
          placeholder='Contact Phone (###-###-####)'
          required
          onChange={({ target }) => setPhone(target.value)}
        />
        <input
          type='email'
          value={email}
          placeholder='Email (username@mail.com)'
          required
          onChange={({ target }) => setEmail(target.value)}
        />
        <input className='submit' type='submit' value='Add Contact' />
      </form>
    </div>
  );
};
