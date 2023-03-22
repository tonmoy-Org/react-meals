import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [searchQuery, setSearchQuery] = useState([]);
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Meals searchQuery={searchQuery} />
      <Footer></Footer>
    </div>
  );
}

export default App;
