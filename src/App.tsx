import React from 'react';
import Menu from './components/Menu/index';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json'


function App() {
  return (
    <div style={{ background: '#414141' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Description"
      />
      {/* <Carousel
        ignor
      /> */}
    </div>
  );
}

export default App;
