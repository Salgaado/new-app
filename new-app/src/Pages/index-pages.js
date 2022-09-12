import { PagesStyle } from './styled-pages.js';
import Home from './Home/index-home.js';
import Empreendimento from './Empreend/index-empreend.js';
import Contato from './Contato/index-contato';


export default function Pages(){
  return(
    <PagesStyle>
      <Home/>
      <Empreendimento/>
      <Contato/>
    </PagesStyle>
  );
}