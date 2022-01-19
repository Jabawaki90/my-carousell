import {Navbar} from './components'
import {HomePage, ProductPage, CartPage,ErrorPage} from './pages'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

function App() {
  return <Router>
    <Navbar/>
    <Switch>
      <Route exact to = '/'>
        <HomePage/>
      </Route>
      <Route exact to='/Product'>
        <ProductPage/>
      </Route>
      <Route exact to='/Cart'>
        <CartPage/>
      </Route>
      <Route to='*'>
        <ErrorPage/>
      </Route>
    </Switch>
  </Router>
}

const Wrapper = styled.nav`

`

export default App;
