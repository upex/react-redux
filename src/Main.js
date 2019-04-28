import React, { useState } from 'react';

function Main(props) {
  const [name, setName] = useState('');
  const handleOnchange = (e) => {
    const maintext = e.target.value ? `From main ${e.target.value}` : ''
    setName(e.target.value);
    props.changeUserName(maintext);
  }
  return (
    <div>
      <h2>I am in main</h2>
      <h1>Try Main input</h1>
      <input type="text" onChange={handleOnchange} value={name} />
      <h2>Change user name</h2>
      <button onClick={(e) => props.changeUserName('Upen is from store', e)}>Reset</button>
      <button onClick={(e) => props.changeOtherName('Other name', e)}>Other button</button>
    </div>
  );
}

export default Main;
