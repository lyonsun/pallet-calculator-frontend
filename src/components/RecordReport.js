import React, { Component } from 'react'

import PrintListInExcel from '../components/PrintListInExcel'
import RecordsTable from '../components/RecordsTable'
import API from '../utils/API'

class RecordReport extends Component {
    constructor(props) {
        super(props)

        this.state = {
            records: []
        }
    }

    componentDidMount() {
        API.get(`records/`)
            .then(res => {
                return res.data
            })
            .then(records => {
                console.log(records)
                this.setState({
                    records: records
                })
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 p-4">
                    <div className="mt-4 mb-5">
                        <PrintListInExcel
                            fileName="report"
                            buttonName="Print List"
                            records={this.state.records}
                        />
                    </div>

                    <RecordsTable records={this.state.records} />
                </div>
            </div>
        )
    }
}

export default RecordReport