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
            error: false,
            errorMessage: '',
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
            .catch(error => {
                this.setState({
                    loading: false,
                    error: true,
                    errorMessage: 'Unable to fetch content, please check the API settings.'
                })

                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            })
    }

    render() {
        let content;

        if (this.state.loading) {
            content = <p className="lead">Loading...</p>
        } else {
            if (this.state.error) {
                content = this.state.errorMessage
            } else if (this.state.records.length !== 0) {
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