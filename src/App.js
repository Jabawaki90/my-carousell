import {Navbar} from './components'
import {HomePage, ProductPage, CartPage,ErrorPage} from './pages'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

function App() {
  return <Router>
    <Navbar/>
    <Switch>
      <Route exact path= '/'>
        <HomePage/>
      </Route>
      <Route exact path='/product'>
        <ProductPage/>
      </Route>
      <Route exact path='/cart'>
        <CartPage/>
      </Route>
      <Route path='*'>
        <ErrorPage/>
      </Route>
    </Switch>
  </Router>
}

const Wrapper = styled.nav`

`

export default App;
