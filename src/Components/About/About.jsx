import React from 'react';
import Banner from './Banner'
import Dropdown from "../../Modules/Dropdown";

export default function About() {
  return (
    <div className='about'>

        <Banner /> 
        
        <div className="content">
          <Dropdown type={"string"} title="Fiabilité" data={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."} />
          <Dropdown type={"string"} title="Respect" data={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />
          <Dropdown type={"string"} title="Service" data={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />
          <Dropdown type={"string"} title="Sécurité" data={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
        </div>

    </div>
  )
}
