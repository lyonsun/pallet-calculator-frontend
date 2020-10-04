import React from 'react'

const NewPalletForm = () => {
    return (
        <form>
            <legend className="mb-4 h5">Input: Delivery Information</legend>
            <div className="form-group ">
                <input type="submit" className="btn btn-success" value="New Pallet" />
            </div>
        </form>
    )
}

export default NewPalletForm