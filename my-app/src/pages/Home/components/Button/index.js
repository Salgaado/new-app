import React from  'react'
import { Button } from './styled'

import Vetor from "../../../../images/Vector.png";

export default function HomeButton () {
  return (
    <Button> MARQUE UMA VISITA  <img src={Vetor} alt="Vetor"/></Button>
  )
}