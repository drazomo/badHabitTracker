import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
