import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import User from './components/User';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>

          <Route exact path="/users/:id">
           <User/>
          </Route>

          <Route exact path="/contacto">
            <Contacto />
          </Route>

          <Route exact path="/nosotros">
            <Nosotros />
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
