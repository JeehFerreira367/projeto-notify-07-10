import React from 'react';

import './Caixa.css'
const Caixa =({imagem, titulo})=> {
  return (
    <div className="Caixa ">
      <div>
        <img src={imagem} alt="" />
      </div>
      <h1>{titulo}</h1>
      <p>
          lorem ipsum, dolor sit amet consectur adipisicing elit. Atque labore, odit ad vel perferendis{" "}
      </p>
    </div>
  );
};

export default Caixa ;
