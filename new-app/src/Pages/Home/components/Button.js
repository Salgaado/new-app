import React from  'react'
import { Button } from '../styled-home.js';
import Vetor from '../../../Images/Icons/Vector.png';



export default function HomeButton () {
  return (
    <Button> MARQUE UMA VISITA  <img src={Vetor} href='#contatos' alt="Vetor"/></Button>
  )
}