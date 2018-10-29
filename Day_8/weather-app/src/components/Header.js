import React from 'react';

function Header(props) {
  const {onSubmit, onChange, value, onClick} = props;
  console.log(value);
  return (
    <header>
      <div className="logo-container center">
        <h1 className="logo">Weather Search</h1>
      </div>
      <form className="search-form center" onSubmit={onSubmit}>
        <input type="text" 
        onChange={onChange}
        value={value}
        className="search-value"
        />
        <button onClick={onClick} className="btn">Submit</button>
      </form>
    </header>
  )
}

export default Header;