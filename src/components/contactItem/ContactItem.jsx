import PropTypes from 'prop-types';
import css from 'components/contactItem/ContactItem.module.css';
const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={css.listItem}>
    {contact.name} {contact.number}
    <button
      className={css.deleteBtn}
      type="button"
      onClick={() => onDeleteContact(contact.id)}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactItem;