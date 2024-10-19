import ContactItem from "./ContactItem.jsx"

function ContactList({ contacts }) {
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} />
          ))}
        </ul>
      ) : (
        <p>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
