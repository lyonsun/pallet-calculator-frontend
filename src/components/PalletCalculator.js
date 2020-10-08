import React, { Component } from 'react'
import API from '../utils/API'

import PalletChart from './PalletChart'
import NewPalletForm from './NewPalletForm'
import DeliveryForm from './DeliveryForm'

class PalletCalculator extends Component {
    constructor(props) {
        super(props)

        this.handleDaysChange = this.handleDaysChange.bind(this)
        this.handleAmountChange = this.handleAmountChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)

        this.handleNewPalletFormSubmit = this.handleNewPalletFormSubmit.bind(this)
        this.handleDeliveryFormSubmit = this.handleDeliveryFormSubmit.bind(this)

        this.state = {
            loading: true,
            palletID: '',
            boxNumber: '',
            articleName: '',
            amount: '',
            batchNumber: '',
            recordDate: '',
            days: 30,
            dueDate: '',
            showDeliveryForm: false,
            showCreatedInfo: false,
            boxesInChart: 0,
            latestPallet: null
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

        // get last updated pallet
        API.get(`pallets/`)
            .then(res => {
                return res.data
            })
            .then(pallets => {
                this.setState({
                    loading: false
                })

                if (pallets.length !== 0) {
                    let latestPallet = pallets[0]

                    this.setState({
                        palletID: latestPallet.pallet_id,
                        showDeliveryForm: true,
                        latestPallet: latestPallet,
                        boxesInChart: latestPallet.total_boxes
                    })
                } else {
                    this.setState({
                        showDeliveryForm: false
                    })
                }
            })
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
                amount: '',
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
            amount: amount,
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

    handleNewPalletFormSubmit(e) {
        e.preventDefault()

        if (this.state.latestPallet !== null && this.state.latestPallet.total_boxes === 0) {
            alert('You haven\'t loaded any boxes into the last created pallet yet. Please load something there first before creating new pallet.')
            return
        }

        let random7 = Math.random().toString().substring(2, 9)
        let random6 = Math.random().toString().substring(3, 9)
        let pallet_id = `KG-${random7}_${random6}`

        let tzOffset = (new Date()).getTimezoneOffset() * 60000;
        let currentTime = (new Date(Date.now() - tzOffset)).toISOString().slice(0, -1);

        let pallet = {
            pallet_id: pallet_id,
            total_boxes: 0,
            updated_at: currentTime
        }

        // TODO: consider validate before creating new pallet

        API.post(`pallets/`, pallet)
            .then(res => {
                return res.data
            })
            .then(pallet => {
                this.setState({
                    palletID: pallet.pallet_id,
                    showDeliveryForm: true,
                    latestPallet: pallet,
                    boxesInChart: pallet.total_boxes
                })
            })

    }

    handleDeliveryFormSubmit(e) {
        e.preventDefault()

        // TODO: form validation

        let now = new Date()
        let recordTime = now.toTimeString().slice(0, 5)

        let record = {
            username: "User 1",
            box_number: this.state.boxNumber,
            article_name: this.state.boxNumber,
            batch_number: this.state.batchNumber,
            amount: this.state.amount,
            record_time: recordTime,
            registration_date: this.state.recordDate,
            due_date: this.state.dueDate,
            pallet: this.state.latestPallet.id,
        }

        API.post(`records/`, record)
            .then(res => {
                return res.data
            })
            .then(record => {
                const days = 30
                const today = new Date()
                const dateOfToday = today.toISOString().slice(0, 10)
                const dateOfDueDate = new Date(today.getTime() + (days * 24 * 60 * 60 * 1000))
                                        .toISOString()
                                        .slice(0, 10)

                let tzOffset = (new Date()).getTimezoneOffset() * 60000;
                let currentTime = (new Date(Date.now() - tzOffset)).toISOString().slice(0, -1);

                let updatedPallet = {
                    pallet_id: record.pallet.pallet_id,
                    total_boxes: record.pallet.total_boxes + 1,
                    updated_at: currentTime
                }

                this.setState({
                    boxNumber: '',
                    articleName: '',
                    amount: '',
                    batchNumber: '',
                    recordDate: dateOfToday,
                    days: days,
                    dueDate: dateOfDueDate,
                    showCreatedInfo: true,
                    boxesInChart: updatedPallet.total_boxes
                })

                // update pallet information
                API.put(`pallets/${record.pallet.id}/`, updatedPallet)
                    .then(res => {
                        console.log(res)

                        // hide alert message in 3 seconds
                        setTimeout(
                            () => this.setState({ showCreatedInfo: false }),
                            5000
                        );
                    })
            })
    }

    render() {
        let deliveryForm;
        if (this.state.showDeliveryForm) {
            deliveryForm = <DeliveryForm
                formData={this.state}
                showCreatedInfo={this.state.showCreatedInfo}
                onFormSubmit={this.handleDeliveryFormSubmit}
                onInputChange={this.handleInputChange}
                onAmountChange={this.handleAmountChange}
                onDaysChange={this.handleDaysChange} />
        } else {
            deliveryForm =
                <p className="lead text-danger">
                    No pallet found, please click button above to create one first.
                </p>
        }


        let content;
        if (this.state.loading) {
            content = <div className="col-sm-12 p-4">
                <p className="lead">Loading...</p>
            </div>
        } else {
            content = <>
                <div className="col-sm-8 bg-warning p-4 forms">
                    <NewPalletForm
                        onFormSubmit={this.handleNewPalletFormSubmit} />

                    { deliveryForm }

                </div>
                <div className="col-sm-4 p-4 chart">
                    <PalletChart
                        boxesInChart={this.state.boxesInChart}
                        palletID={this.state.palletID} />
                </div>
            </>
        }

        return (
            <div className="row">
                { content }
            </div>
        )
    }
}

export default PalletCalculator