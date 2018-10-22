import React, { Component } from 'react';
class EmojiCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverId : 0
    }
  }

  takeCopy = (e) => {
    e.preventDefault();
    const elm = e.target.firstChild;
    navigator.clipboard.writeText(elm.innerHTML);
  }

  render() {
    const {emoji} = this.props;
    return (
      <div className="EmojiCard" onClick={this.takeCopy}>
        <div className="emoji-symbol inline">{emoji.symbol}</div>
        <h2 className="emoji-title inline">{emoji.title}</h2>
      </div>
    );
  }
}

export default EmojiCard;