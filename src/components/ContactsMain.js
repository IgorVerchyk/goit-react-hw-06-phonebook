import React, { Component } from 'react';

import Layout from './Layout';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './ContactFilter';

import WithContactCntx from './hoc/WithContactCntx';

class ContactMain extends Component {
  state = {
    contacts: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const incomeContacts = this.props.auth.contacts;
    this.setState({ contacts: incomeContacts });
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.props.auth.contacts) {
      localStorage.setItem(
        'contacts',
        JSON.stringify(this.props.auth.contacts),
        this.updateStateContacts(),
      );
    }
  }

  updateStateContacts() {
    const newContacts = this.props.auth.contacts;
    this.setState({ contacts: newContacts });
  }
  render() {
    return (
      <>
        <Layout title={'Phonebook'}>
          <ContactForm onAddContact={this.props.auth.onAddContact} />
        </Layout>
        <Layout title={'Contacts'}>
          <Filter onChange={this.props.auth.onChangeFilter} />
          <ContactList
            contacts={this.props.auth.onFilterContacts()}
            onDelete={this.props.auth.onDeleteContact}
          />
        </Layout>
      </>
    );
  }
}

export default WithContactCntx(ContactMain);
