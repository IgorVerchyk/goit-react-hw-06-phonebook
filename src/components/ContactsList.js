import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

import styles from './Contacts.module.css';
import fade from './fade.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id, ...contact }) => (
        <CSSTransition key={id} timeout={250} classNames={fade}>
          <ContactItem id={id} {...contact} onDelete={() => onDelete(id)} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.array,
  ]),
  onDelete: PropTypes.func.isRequired,
};
