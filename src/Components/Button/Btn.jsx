import React from 'react';
import './Btn.css'

const Btn = ({ tamanho, cor, texto, onClick }) => {
  // Classes do Bootstrap para tamanho e cor do botão
  const tamanhoClasse = tamanho ? `btn-${tamanho}` : '';
  const corClasse = cor ? `btn-${cor}` : '';

  return (
    <button
      type="button"
      className={`btn ${tamanhoClasse} ${corClasse}`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Btn;
