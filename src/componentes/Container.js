import React from 'react';
import Caixa from './Caixa';
import settings from '../img/icone1.png'
import star from '../img/icone2.png';
import mundo from '../img/icone3.png';
import './Container.css';

const Container = () =>{
  return (
    <div className="Container">
      <Caixa titulo="Editable Theme" imagem={settings}/>
      <Caixa titulo="Flat Design" imagem={star}/>
      <Caixa titulo="Reach Your Audience" imagem={mundo}/>
    </div>
  );
}

export default Container;
