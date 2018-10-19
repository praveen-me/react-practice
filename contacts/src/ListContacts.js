import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import SortBy from 'sort-by';

class ListContacts extends Component {
  static PropTypes = {
    contacts : PropTypes.array.isRequired,
    onDeleteContact : PropTypes.func.isRequired
  }

  state = {
    query : ''
  }

  updateQuery = (query) => {
    this.setState({
      query : query.trim()
    })
  }

  resetQuery = () => {
    this.setState({
      query : ''
    })
  }

  render() {
    const {query} = this.state;
    const {contacts, onDeleteContact} = this.props;

    let showingContacts;
    if(query) {
      let match = new RegExp(escapeRegExp(query), 'i');

      showingContacts = contacts.filter((contact) => match.test(contact.name));
    } else {
      showingContacts = contacts;
    }

    showingContacts.sort(SortBy('name'));

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input className="search-contacts" 
                type="text"
                placeholder="Search Contacts"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)} />
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.resetQuery}>Show All</button>
          </div>
        )}

        <ol className="contact-list">
        {
          showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className="contact-avatar" style={{
                backgroundImage : `url(${contact.avatarURL})`
              }} />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => onDeleteContact(contact)} className="contact-remove">Remove</button>
            </li>
          ))
        }
        </ol>
      </div>  
    );
  }
}


export default ListContacts;
