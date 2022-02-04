import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
          placeholder='title Name'
        />
        <input
          type='date'
          value={date}
          min={getTodayString()}
          required
          onChange={({ target }) => setDate(target.value)}
        />
        <input
          type='time'
          value={time}
          required
          onChange={({ target }) => setTime(target.value)}
        />
        <ContactPicker
          contacts={contacts}
          contact={contact}
          setContact={setContact}
        />
        <input className='submit' type='submit' value='Add Contact' />
      </form>
    </div>
  );
};
