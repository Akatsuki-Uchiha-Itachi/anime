import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Popular from './components/Popular';
import AnimeItem from './components/AnimeItem';
import Character from './components/Character';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Popular/>}/>
        <Route exact path='/anime/:id' element = {<AnimeItem/>}/>
        <Route exact path='/character/:id' element={<Character/>}/>
      </Routes>
    </Router>
  );
}

export default App;
