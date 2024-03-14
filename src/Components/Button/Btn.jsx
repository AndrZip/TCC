import React from 'react';
import './Btn.css'

const Btn = ({ type, size, text, onClick }) => {
  // Classes do Bootstrap para tamanho e cor do botão
  const classType = type ? `btn btn-${type}` : '';
  const classSize = size ? `btn-${size}` : '';

  return (
    <button type="button" className={`btn ${classType} ${classSize}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Btn;
