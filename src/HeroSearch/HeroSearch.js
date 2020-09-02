import React, { useState, useEffect } from 'react';
import './HeroSearch.css';
import { searchHeroesByName } from '../Requests';
import HeroBasicCard from '../HeroBasicCard/HeroBasicCard';
import { useParams } from 'react-router';
import Loader from '../Loader/Loader';

function HeroSearch() {
  const [ searchList, setSearchListContent ] = useState([]);
  const [ isLoading, setLoadingState ] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name)
      .then(searchResults => {
        console.log(searchResults.data.results)
        setSearchListContent(searchResults.data.results);
        setLoadingState(false);
      }).catch( err => console.log(err))
  }, [name]);

  return (
    <>
      { !isLoading &&
        (<div className="container">
          {searchList.map(curr => <HeroBasicCard key={curr.id} hero={curr} />)}
        </div>)
      }
      { isLoading && <Loader /> }
    </>
  );
}

export default HeroSearch;
