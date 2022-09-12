import React from "react";

import { ImagePlanta, ContentPlantas, PlantasTitle, PlantasBttn } from "./styled";

export default function HeaderPlantas() {
  return (
      <ContentPlantas>
        <ImagePlanta>
        {/* imagem da planta */}
        </ImagePlanta>
        <PlantasTitle>PLANTAS</PlantasTitle>
        <PlantasBttn>2 Quartos</PlantasBttn>
        <PlantasBttn>3 Quartos</PlantasBttn>
        <PlantasBttn>COBERTURA</PlantasBttn>
      </ContentPlantas>
  );
}
