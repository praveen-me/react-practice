import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactAPI from './utils/ContactsAPI.js'

export default class App extends Component {
  state = {
    contacts : []
  }

  componentDidMount() {
    ContactAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  deleteContact = (contact) => {
    this.setState((state) => ({
      contacts : state.contacts.filter((c) => c.id !== contact.id)
    }));

    ContactAPI.remove(contact);
  }

  render() {
    return (
       <div>
         <ListContacts onDeleteContact={this.deleteContact} contacts={this.state.contacts}/>
       </div>
    );
  }
}