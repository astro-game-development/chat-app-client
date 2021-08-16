import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Join from './pages/Join';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Chat React App</p>
        <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" exact component={Chat} />
        </Router>
      </header>
    </div>
  );
}

export default App;
