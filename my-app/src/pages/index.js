import Home from './Home/index.js';
import Empreendimento from './Empreendimento/index.js';
import Local from './Local/index.js';
import Plantas from './Plantas/index.js';
import Contato from './Contato/index.js';
import { PagesContent } from './styled.js';


export default function Pages(){
  return(
    <PagesContent>
      <Home/>
      <Empreendimento/>
      <Plantas/>
      <Local/>
      <Contato/>
    </PagesContent>
  );
}