import React, { useState } from 'react'
import AgGrid from './AgGrid';
import {Button} from "react-bootstrap"

const Data1 = () => {

    const [columnDefs, setColumnDefs] = useState([
        {
          field: "mrn",
          headerName: "NAME OF THE USER",
          checked: true,
          suppressMovable: true,
          minWidth: 215,
          // maxWidth: 450,
          sort: "asc",
        },
        {
          field: "patient",
          headerName: "PHONE NUMBER",
          checked: true,
          suppressMovable: true,
          minWidth: 167,
          // maxWidth: 180,
        },
        {
          field: "task",
          headerName: "EMAIL ADDRESS",
          checked: true,
          suppressMovable: true,
          minWidth: 215,
          // maxWidth: 450,
        },
        {
          field: "clinician_name",
          headerName: "ASSIGNED USER ROLE",
          checked: true,
          suppressMovable: true,
          minWidth: 215,
          // maxWidth: 250,
        },
        {
          field: "Status",
          headerName: "STATUS",
          checked: true,
          cellEditor: "agRichSelectCellEditor",
          cellEditorPopup: true,
          minWidth: 114,
          maxWidth: 114,
        },
        {
          field: "Action",
          headerName: "ACTION",
          resizable: true,
          filter: false,
          sortable: false,
          pinned: "right",
          cellRendererFramework: (params) => (
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  style={{ color: "#046ed2" }}
                  variant="outline-secondary action-crud"
                  // onClick={() => openUpdateModal(params)}
                  onClick={() => {
                    console.log("Hai");
                  }}
                >
                  Edit
                </Button>
                <span style={{ color: "#dde2eb" }}>|</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  style={{ color: "red" }}
                  variant="outline-secondary action-crud"
                  // onClick={() => deleteUser(params)}
                  onClick={() => {
                    console.log(params);
                  }}
                >
                  Delete
                </Button>
                <span style={{ color: "#dde2eb" }}>|</span>
              </div>
              <Button
                style={{ color: "#046ed2" }}
                variant="outline-secondary action-crud"
                // onClick={() => openUpdateModal(params)}
                onClick={() => {
                    console.log("Hai");
                }}
              >
                Update Password
              </Button>
            </div>
          ),
          checked: true,
          suppressMovable: true,
          minWidth: 250,
          maxWidth: 250,
        },
      ]);


    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
      ]);
console.log(columnDefs)
  return (
    <div>
        <AgGrid rowData = {rowData} columnDefs={columnDefs} />
    </div>
  )
}

export default Data1