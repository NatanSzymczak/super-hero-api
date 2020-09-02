import React, { useEffect, useState } from 'react';
import { getHero } from '../Requests'
import HeroFullCard from '../HeroFullCard/HeroFullCard';
import Loader from '../Loader/Loader';


function HeroDetails( props ) {
  const idHero = props.match.params.id;
  const [hero, setHero] = useState(null);

  useEffect(() => {
    getHero(idHero)
      .then(resp => {
        const heroData = resp.data;
        setHero(heroData);
      });
  }, []);

  return (
    <section className="container">
      {
      !hero
        ? <Loader />
        : <HeroFullCard hero={hero} />
      }
    </section>
  );


}























export default HeroDetails;


