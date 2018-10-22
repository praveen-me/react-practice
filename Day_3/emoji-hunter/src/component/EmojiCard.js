import React, {Component} from 'react';

class EmojiCard extends Component {
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
      let matchString = new RegExp(query, 'i')

      filteredEmojiArray = emojiesArray.filter(emoji => matchString.test(emoji.title))
    } else {
      filteredEmojiArray = emojiesArray;
    }

    return (
      <div>
        <input type="text" onChange={(e) => this.updateQuery(e.target.value)}/>
        <div className="cards-container">
          {
            filteredEmojiArray.map(emoji => (
              <h1 key={emoji.title}>{emoji.title}</h1>
            ))
          }
        </div>
      </div>
    );
  }
}

export default EmojiCard;