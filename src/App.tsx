import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'component/Header'
import Main from 'component/Main'
import FAQ from 'component/FAQ'
import Attributes from 'component/Attributes'
import NotFound from 'component/NotFound'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/faq" component={FAQ} />
          <Route path="/attribute" component={Attributes} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
