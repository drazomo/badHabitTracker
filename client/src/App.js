import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './components/Home';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
