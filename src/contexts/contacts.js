import React, { Component, createContext } from 'react';

const Context = createContext();

export default class ContactsCntx extends Component {
  static Consumer = Context.Consumer;

  addContact = propContact => {
    const item = propContact.name;
    const items = this.state.contacts.map(contact =>
      contact.name.toLowerCase(),
    );
    if (items.includes(item.toLowerCase().trim())) {
      alert(`${item} is already in contacts`);
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, propContact],
      }));
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContactsArr = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContactsArr });
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    onAddContact: this.addContact,
    onChangeFilter: this.changeFilter,
    onFilterContacts: this.filterContacts,
    onDeleteContact: this.deleteContact,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
