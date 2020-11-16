import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PrintListInExcel from '../components/PrintListInExcel'
import RecordsTable from '../components/RecordsTable'
import API from '../utils/API'

class RecordReport extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            records: []
        }
    }

    componentDidMount() {
        API.get(`records/`)
            .then(res => {
                return res.data
            })
            .then(records => {
                this.setState({
                    loading: false,
                    records: records
                })
            })
    }

    render() {
        let content;

        if (this.state.loading) {
            content = <p className="lead">Loading...</p>
        } else {
            if (this.state.records.length !== 0) {
                content = <>
                    <div className="mt-4 mb-5">
                        <PrintListInExcel
                            fileName="report"
                            buttonName="Print List"
                            records={this.state.records}
                        />
                    </div>

                    <RecordsTable records={this.state.records} />
                </>
            } else {
                content =<p className="lead">Records not found, please create some in <Link to="/">Home</Link> page first.</p>
            }
        }

        return (
            <div className="row">
                <div className="col-sm-12 p-4">
                    { content }
                </div>
            </div>
        )
    }
}

export default RecordReport