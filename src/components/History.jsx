import React from 'react';
import './css/history.css';

import HistoryCard from './HistoryCard';

function History() {

  return (
    <main>
      <div className="history-page">
       <div className="history-container">
        <HistoryCard />
        { <p className='progress-message'>Work in progress...</p> }
       </div>
      </div>
    </main>
  )
}

export default History