import React, { Component } from 'react';

import ContactsMain from './ContactsMain';

import ContactCntx from '../contexts/contacts';

export default class App extends Component {
  render() {
    return (
      //using context in this homework only for get some practice
      <ContactCntx>
        <ContactsMain />
      </ContactCntx>
    );
  }
}
