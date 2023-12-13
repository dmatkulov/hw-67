import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {checkPassword, clearInput, pressKey, removeLastChar} from './keyboardSlice';
import '../Keyboard/Keyboard.css';
const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const Keyboard: React.FC = () => {
  const dispatch = useDispatch();
  const {input, success, error, warning} = useSelector((state: RootState) => state.keyboard);
  
  return (
    <>
      <div className="alert">
        {error && (<h2 className="error">Access denied</h2>)}
        {warning && (<h2 className="warning">Limit exceeded</h2>)}
        {success && (<h2 className="success">Access granted</h2>)}
      </div>
      <div className="keyboard-app">
        <div className="input">
          {input ? input : '****'}
        </div>
        <div className="keyboard">
          {numbers.map((num) => (
            <button
              className="keyboard-btn"
              onClick={() => dispatch(pressKey(`${num}`))}
            >
              {num}
            </button>
          ))}
          <button
            className="removeLastChar"
            onClick={() => dispatch(removeLastChar())}
          >
            {`<`}
          </button>
          <button
            className="clearInput"
            onClick={() => dispatch(clearInput())}
          >
            Clear
          </button>
        </div>
        <button
          className="checkPassword"
          onClick={() => dispatch(checkPassword())}
        >
          Enter
        </button>
      </div>
    </>
  );
};

export default Keyboard;