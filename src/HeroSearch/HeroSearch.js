import React, { useState, useEffect } from 'react';
import HeroBasicCard from '../HeroBasicCard/HeroBasicCard';
import NotFound from '../NotFound/NotFound'
import Loader from '../Loader/Loader';
import { searchHeroesByName } from '../Requests';
import { Route } from "react-router-dom";
import { useParams } from 'react-router';
import './HeroSearch.css';

function HeroSearch() {
  const [ searchList, setSearchListContent ] = useState([]);
  const [ isLoading, setLoadingState ] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name)
      .then(searchResults => {

        setSearchListContent(searchResults.data.results);
        setLoadingState(false);
      }).catch( err => {
        console.log('Error: ', err)

      })
  }, [name]);

  return (
    <>
      { !isLoading &&
        (<div className="container">
          { searchList ? searchList.map(curr => <HeroBasicCard key={curr.id} hero={curr} />) : <Route path="/search/:id" component={NotFound} /> }
        </div>)
      }
      { isLoading && <Loader /> }
    </>
  );
}

export default HeroSearch;
