import React from 'react'

const RecordsTable = (props) => {
    let tableRows = props.records.map(record => {
        return (
            <tr className="table-warning" key={record.id}>
                <td>{record.record_time.slice(0, -3)}</td>
                <td>{record.username}</td>
                <td>{record.pallet.pallet_id}</td>
                <td>{record.box_number}</td>
                <td>{record.article_name}</td>
                <td>{record.amount}</td>
                <td>{record.due_date}</td>
                <td>{record.batch_number}</td>
                <td>{record.registration_date}</td>
            </tr>
        )
    })

    return (
        <table className="table table-bordered mb-4" id="records-table">
            <thead>
                <tr className="bg-warning">
                    <th scope="col">Record time</th>
                    <th scope="col">User</th>
                    <th scope="col">Pallet ID</th>
                    <th scope="col">Box number</th>
                    <th scope="col">Article name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due date</th>
                    <th scope="col">Batch number</th>
                    <th scope="col">Registration date</th>
                </tr>
            </thead>
            <tbody>
                { tableRows }
            </tbody>
        </table>
    )
}

export default RecordsTable