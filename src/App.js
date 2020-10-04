import React from 'react'

import "./App.css"
import "bootstrap/dist/css/bootstrap.css"

import Header from './components/Header'
import Footer from './components/Footer'
import PalletChart from './components/PalletChart'
import NewPalletForm from './components/NewPalletForm'
import DeliveryForm from './components/DeliveryForm'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-8 bg-warning p-4">
            <NewPalletForm />
            <DeliveryForm />
          </div>
          <div className="col-sm-4 p-5">
            <PalletChart />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App
