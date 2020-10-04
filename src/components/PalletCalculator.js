import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import PalletChart from './PalletChart'
import NewPalletForm from './NewPalletForm'
import DeliveryForm from './DeliveryForm'

class PalletCalculator extends Component {
    constructor(props) {
        super(props)

        this.handleDaysChange = this.handleDaysChange.bind(this)
        this.handleAmountChange = this.handleAmountChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)

        this.state = {
            palletID: 'INV-2592020_124756',
            boxNumber: '',
            articleName: '',
            amount: '',
            batchNumber: '',
            recordDate: '',
            days: 30,
            dueDate: ''
        }
    }

    componentDidMount() {
        // set initial record date and due date
        const today = new Date()
        const dateOfToday = today.toISOString().slice(0, 10)
        const dateOfDueDate = new Date(today.getTime() + (this.state.days * 24 * 60 * 60 * 1000))
                                .toISOString()
                                .slice(0, 10)

        this.setState({
            recordDate: dateOfToday,
            dueDate: dateOfDueDate
        })

        // TODO: get last updated pallet

    }

    handleDaysChange(e) {
        const today = new Date()
        const days = parseInt(e.target.value)
        this.setState({
            days: days,
            dueDate: new Date(today.getTime() + (days * 24 * 60 * 60 * 1000))
                        .toISOString()
                        .slice(0, 10)
        })
    }

    handleAmountChange(e) {
        if (e.target.value === '') {
            this.setState({
                amount: ''
            })
            return
        }
        
        const amount = parseInt(e.target.value)

        if (amount < 1) {
            alert('Please give a positive number')
            return
        }
        if (amount > 25) {
            alert('Please give a number smaller than 25')
            return
        }

        this.setState({
            amount: amount
        })
    }

    handleInputChange(e) {
        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
                <Header />

                <main className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-sm-8 bg-warning p-4">
                            <NewPalletForm />
                            <DeliveryForm
                                formData={this.state}
                                onInputChange={this.handleInputChange}
                                onAmountChange={this.handleAmountChange}
                                onDaysChange={this.handleDaysChange} />
                        </div>
                        <div className="col-sm-4 pt-4 pb-4 pr-5 pl-5">
                            <PalletChart
                                amount={this.state.amount}
                                palletID={this.state.palletID} />
                        </div>
                    </div>
                </main>

                <Footer />
            </>
        )
    }
}

export default PalletCalculator