import  Navbar  from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;
