import React from 'react'

const DeliveryForm = () => {
    return (
        <form>
            <div className="form-group row">
                <label htmlFor="pallet-id" className="col-sm-4 col-form-label">Pallet ID: </label>
                <div className="col-sm-8">
                    <input type="text" readOnly className="form-control-plaintext" id="pallet-id" placeholder="INV-2592020_124756" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="box-number" className="col-sm-4 col-form-label">Box Number: </label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="box-number" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="article-name" className="col-sm-4 col-form-label">Article Name: </label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="article-name" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="amount" className="col-sm-4 col-form-label">Amount: </label>
                <div className="col-sm-8">
                    <input type="number" className="form-control" id="amount" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="batch-number" className="col-sm-4 col-form-label">Batch Number: </label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="batch-number" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="record-date" className="col-sm-4 col-form-label">Record Date: </label>
                <div className="col-sm-8">
                    <input type="text" readOnly className="form-control-plaintext" id="record-date" placeholder="28.09.2020" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="duration" className="col-sm-4 col-form-label">Days until last use date: </label>
                <div className="col-sm-8">
                    <select className="custom-select" value="30">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="due-date" className="col-sm-4 col-form-label">Due Date: </label>
                <div className="col-sm-8">
                    <input type="text" readOnly className="form-control-plaintext" id="due-date" placeholder="28.10.2020" />
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