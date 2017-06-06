import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDPf29ziU829iRoBk388vsyBQB-0pthtqM';

const App = () => {
  return (
    <div>
      Ho!
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
