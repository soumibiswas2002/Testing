import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ShowList from './component/ShowList';
import ShowDetails from './component/ShowDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ShowList/>}/>
          <Route path="/show/:id" element={<ShowDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
