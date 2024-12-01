import React, { useEffect } from 'react';
import './css/history.css'
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';

import HistoryCard from './HistoryCard';

function History() {
  const { fetchData, loading } = useFetch();
  const history = useSelector(state=> state.dataReducer.history);

  useEffect(()=>{
    if(!history){
      fetchData();
    }
  },[history, fetchData]);
  console.log(history);
  return (
    <main>
      <div className="history-page">
       { loading && <p className='progress-message'>Loading in progress...</p> }
       <div className="history-container">
        <HistoryCard />
       </div>
      </div>
    </main>
  )
}

export default History