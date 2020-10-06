import React from 'react'
import { Route, Switch } from 'react-router-dom'

import "./App.css"
import "bootstrap/dist/css/bootstrap.css"

import Header from './components/Header'
import Footer from './components/Footer'
import PalletCalculator from './components/PalletCalculator'
import RecordReport from './components/RecordReport'

function App() {
  return (
    <div className="App">
      <Header />

      <main className="container-fluid mt-5 main">
        <Switch>
          <Route exact path='/'>
            <PalletCalculator />
          </Route>
          <Route path='/report'>
            <RecordReport />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App
