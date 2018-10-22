import React, {Component} from 'react';
import EmojiCard from './EmojiCard';

class EmojiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query : ''
    }
  }

  updateQuery = (query) => {
    this.setState({
      query : query.trim()
    })
  }

  render() {
    const {emojiesArray} = this.props;
    const {query} = this.state;

    let filteredEmojiArray;

    if(query) {
      let matchString = new RegExp(query, 'i');

      filteredEmojiArray = emojiesArray.filter(emoji => matchString.test(emoji.title))
    } else {
      filteredEmojiArray = emojiesArray;
    }

    return (
      <main className="EmojiContainer">
        <div className="search-container">
          <input type="text" className="search-bar" onChange={(e) => this.updateQuery(e.target.value)}/>
        </div>
        <div className="cards-container">
          {
            filteredEmojiArray.map((emoji, index) => (
              <EmojiCard emoji={emoji} key={emoji.title}/>
            ))
          }
        </div>
      </main>
    );
  }
}

export default EmojiContainer;