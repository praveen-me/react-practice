import React from 'react';

function Header(props) {
  const {emojies} = props;
  const randomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
  };
  return (
    <header className="emoji-header">
        <div className="random-header inline">{emojies[randomIndex(emojies)].symbol}</div>
        <h1 className="logo inline">Emoji Hunter</h1>
        <div className="random-header inline">{emojies[randomIndex(emojies)].symbol}</div>
    </header>
  );
}


export default Header;