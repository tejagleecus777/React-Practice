/* Declaring all the external imports */
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Plot from "react-plotly.js";
import axios from "axios";

/*Declaring local imports */
import KpiCards from "../../Common/KpiCards";
import "./index.css";
import AgGrid from "../../Common/DataTable/AgGrid";
import DropDown from "../../Common/DropDown";

const Page3 = () => {
  /* States and Variables */
  let kpiValues = [
    {
      cardName: "Having Some Larger KPI Cards",
      cardValue: 345,
      activeState: true,
    },
    {
      cardName: "Having Some Larger KPI Cards",
      cardValue: 355,
      activeState: false,
    },
    {
      cardName: "Having Some Larger KPI Cards",
      cardValue: 145,
      activeState: false,
    },
    {
      cardName: "Having Some Larger KPI Cards",
      cardValue: 345,
      activeState: true,
    },
  ];
  const [columnDefs] = useState([
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
              onClick={() => openUpdateModal(params)}
              // onClick={() => {
              //   console.log("Hai");
              // }}
            >
              Edit
            </Button>
            <span style={{ color: "#dde2eb" }}>|</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              style={{ color: "red" }}
              variant="outline-secondary action-crud"
              onClick={() => deleteUser(params)}
            >
              Delete
            </Button>
            <span style={{ color: "#dde2eb" }}>|</span>
          </div>
          <Button
            style={{ color: "#046ed2" }}
            variant="outline-secondary action-crud"
            onClick={() => openUpdateModal1(params)}
          >
            Update Password
          </Button>
        </div>
      ),
      checked: true,
      suppressMovable: true,
      minWidth: 300,
      maxWidth: 350,
    },
  ]);
  const [show, setShow] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [data, setdata] = useState({
    id: "",
    name: "",
  });

  /* Functions Declaration  */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openUpdateModal = (params) => {
    handleShow();
    console.log(params.data?.id);
    setdata({ ...data, id: params.data?.id, name: params.data?.mrn });
    console.log(params);
  };
  const deleteUser = (params) => {
    alert("We can get Delete user modal here");
  };
  const openUpdateModal1 = (params) => {
    alert("We can get Update user modal here");
  };
  const submitModal = () => {
    alert("We can do anything");
  };
  const clickCard = () => {
    alert("You have clicked on a card");
  };
  useEffect(() => {
    axios
      .get("https://dev-api.vigeodash.com/accounts/get_all_users")
      .then((response) => {
        var items = [];
        var results = response.data.Response;
        for (var i = 0; i < results.length; i++) {
          // var res = JSON.parse(results[i]);

          var res = results[i];

          var phone;
          var name;
          var role;
          var status;
          if (res.phone_number == null) {
            phone = "--";
          } else {
            phone = res.phone_number;
          }
          if (res.is_active == null) {
            status = "--";
          } else {
            if (res.is_active) {
              status = "Active";
            } else {
              status = "InActive";
            }
          }
          if (res.is_active == null) {
            name = "--";
          } else {
            name = res.first_name + " " + res.last_name;
          }
          if (res.role == null) {
            role = "--";
          } else {
            role = res.role;
          }
          items.push({
            id: res.id,
            mrn: name,
            patient: phone,
            task: res.email,
            clinician_name: role,
            Status: status,
          });
          if (Number(i + 1) === Number(results.length)) {
            setRowData(items);
          }
        }
      });
  }, []);

  return (
    <div className="container-fluid pt-3">
      <DropDown
        dropDownHeader={"Select Page"}
        dropDownList={["Page1", "Page2"]}
      />

      {/* Edit Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT MODAL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`We are achieving Edit Modal with id ${data.id} and name is ${data.name}`}{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="first-row">
        {/* Graph Section */}
        <Col md={9}>
          <Plot
            data={[
              {
                type: "bar",
                x: [30, 14, 23, 17, 31, 29, 30, 10, 28, 11, 34, 20],
                y: [
                  "user1",
                  "user2",
                  "user3",
                  "user4",
                  "user5",
                  "user6",
                  "user7",
                  "user8",
                  "user9",
                  "user10",
                  "user11",
                  "user12",
                ],
                orientation: "h",
              },
            ]}
            layout={{ title: "Graph Title", autosize: true, margin: 0 }}
          />
        </Col>

        {/* KPIs Section */}
        <Col md={3}>
          <KpiCards
            totalCards={kpiValues}
            cardsForRow={1}
            clickCard={clickCard}
          />
        </Col>
      </Row>

      {/* Data Table Section */}
      <div>
        <AgGrid rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default Page3;
