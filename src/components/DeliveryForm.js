import React from 'react'

const DeliveryForm = (props) => {
    return (
        <form>
            <div className="form-group row">
                <label htmlFor="pallet-id" className="col-sm-4 col-form-label">Pallet ID: </label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        name="palletID"
                        readOnly
                        className="form-control-plaintext"
                        id="pallet-id"
                        value={props.formData.palletID}
                        // onChange={props.onInputChange}
                        placeholder="INV-2592020_124756" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="box-number" className="col-sm-4 col-form-label">Box Number: </label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        name="boxNumber"
                        className="form-control"
                        value={props.formData.boxNumber}
                        onChange={props.onInputChange}
                        id="box-number" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="article-name" className="col-sm-4 col-form-label">Article Name: </label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        name="articleName"
                        className="form-control"
                        value={props.formData.articleName}
                        onChange={props.onInputChange}
                        id="article-name" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="amount" className="col-sm-4 col-form-label">Amount: </label>
                <div className="col-sm-8">
                    <input
                        type="number"
                        name="amount"
                        className="form-control"
                        value={props.formData.amount}
                        min="1"
                        max="25"
                        onChange={props.onAmountChange}
                        id="amount" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="batch-number" className="col-sm-4 col-form-label">Batch Number: </label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        name="batchNumber"
                        className="form-control"
                        value={props.formData.batchNumber}
                        onChange={props.onInputChange}
                        id="batch-number" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="record-date" className="col-sm-4 col-form-label">Record Date: </label>
                <div className="col-sm-8">
                    <input 
                        type="text"
                        name="recordDate"
                        readOnly
                        className="form-control-plaintext"
                        id="record-date"
                        value={props.formData.recordDate}
                        placeholder="2020-09-28" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="days" className="col-sm-4 col-form-label">Days until last use date: </label>
                <div className="col-sm-8">
                    <select
                        name="days"
                        className="custom-select"
                        id="days"
                        defaultValue={props.formData.days}
                        onChange={props.onDaysChange}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="due-date" className="col-sm-4 col-form-label">Due Date: </label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        name="dueDate"
                        readOnly
                        className="form-control-plaintext"
                        id="due-date"
                        value={props.formData.dueDate}
                        placeholder="2020-10-28" />
                </div>
            </div>
            <div className="form-group row mt-4">
                <div className="col-sm-6 mb-2">
                    <input type="submit" className="btn btn-block btn-success" value="Save" />
                </div>
                <div className="col-sm-6 mb-2">
                    <input type="submit" className="btn btn-block btn-primary" value="Print List" />
                </div>
            </div>
        </form>
    )
}

export default DeliveryForm