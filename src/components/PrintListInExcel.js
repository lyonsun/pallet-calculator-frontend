import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const PrintListInExcel = (props) => {
    return (
        <ExcelFile
            filename={props.fileName}
            element={<button
            className="btn btn-success">{props.buttonName}</button>}
        >
            <ExcelSheet data={props.records} name="Delivery Records">
                <ExcelColumn label="Record time" value={(col) => col.record_time.slice(0, -3) } />
                <ExcelColumn label="User" value="username" />
                <ExcelColumn label="Pallet ID" value={(col) => col.pallet.pallet_id } />
                <ExcelColumn label="Box number" value="box_number" />
                <ExcelColumn label="Article name" value="article_name" />
                <ExcelColumn label="Amount" value="amount" />
                <ExcelColumn label="Due date" value="due_date" />
                <ExcelColumn label="Batch number" value="batch_number" />
                <ExcelColumn label="Registration date" value="registration_date" />
            </ExcelSheet>
        </ExcelFile>
    );
}

export default PrintListInExcel