import React from 'react';
import { useNavigate } from 'react-router-dom';

function InputPage() {

    let navigate = useNavigate();

    const [inputValue, setInputValue] = React.useState('');
    const [placeholder, setPlaceholder] = React.useState('Type here...');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        //update placeholder based on logic, resetting it when the input is not empty:
        if (e.target.value) {
            setPlaceholder('');// Hides the placeholder text when the user starts typing
        } else {
            setPlaceholder('Type here...');// Resets the placeholder when the input is cleared
        }
    };

  return (
    <div className="input-button-parent">
      <div className="input-button-container">
        <h1 className="input-item">I'm Feeling...</h1>
        <div className="input-item input-buttons">
          <button className="input-button">Excited <span role="img" aria-label="Search">🥳</span></button>
          <button className="input-button">Confused <span role="img" aria-label="Search">🥹</span></button>
          <button className="input-button">Sluggish <span role="img" aria-label="Search">🪱</span></button>
          <button className="input-button">Depressed <span role="img" aria-label="Search">😭</span></button>
          <button className="input-button">Inquisitive <span role="img" aria-label="Search">🤔</span></button>
          <button className="input-button">Funky <span role="img" aria-label="Search">💃</span></button>
        </div>
        <div className="input-item">
          <input className="type-inputs"
            type="text" 
            placeholder="Type here..." 
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button className="input-item general-button" onClick={() => navigate('/quote')}>Submit</button>
      </div>
    </div>
  );
}

export default InputPage;
