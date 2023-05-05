/* External imports */
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Plot from "react-plotly.js";
import axios from "axios";

/* Internal imports */
import KpiCards from "../../Common/KpiCards";
import "../../Assets/CSS/index.css";
import AgGrid from "../../Common/DataTable/AgGrid";
import DropDown from "../../Common/DropDown";

const Page1 = () => {
  /*States and variables declarations */
  let kpiValues = [
    { cardName: "Medium KPI Cards", cardValue: 345, activeState: "none" },
    { cardName: "Medium KPI Cards", cardValue: 355, activeState: "none" },
    { cardName: "Medium KPI Cards", cardValue: 145, activeState: "none" },
    { cardName: "Medium KPI Cards", cardValue: 345, activeState: "none" },
    { cardName: "Medium KPI Cards", cardValue: 345, activeState: "none" },
    { cardName: "Medium KPI Cards", cardValue: 355, activeState: "none" },
    { cardName: "Medium KPI Cards", cardValue: 345, activeState: "none" },
    { cardName: "Medium KPI Cards", cardValue: 355, activeState: "none" },
  ];
  const [columnDefs] = useState([
    {
      field: "mrn",
      headerName: "MRN",
      checked: true,
      suppressMovable: true,
      minWidth: 108,
      maxWidth: 108,
    },
    {
      field: "patient",
      headerName: "PATIENT",
      checked: true,
      suppressMovable: true,
      minWidth: 215,
    },
    {
      field: "task",
      headerName: "TASK",
      checked: true,
      suppressMovable: true,
      minWidth: 243,
    },
    {
      field: "clinician_name",
      headerName: "CLINICIAN NAME",
      checked: true,
      suppressMovable: true,
      minWidth: 215,
    },
    {
      field: "visit_status",
      headerName: "VISIT STATUS",
      checked: true,
      suppressMovable: true,
      minWidth: 204,
      maxWidth: 205,
    },
    {
      field: "schedule_date",
      headerName: "SCHEDULE DATE",
      filter: "agDateColumnFilter",
      checked: true,
      suppressMovable: true,
      minWidth: 155,
      maxWidth: 155,
    },
  ]);
  const [rowData, setRowData] = useState([]);

  /* Functions Declaration */
  const clickCard = () => {
    alert("You have clicked on a card");
  };

  useEffect(() => {
    axios
      .get("https://dev-api.vigeodash.com/tablepages/schedule_deviation/")
      .then((response) => {
        var items = [];
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var result = JSON.parse(results[i]);
          items.push({
            mrn: result.MRN && result.MRN !== "nan" ? result.MRN : "--",
            patient:
              result.PATIENT && result.PATIENT !== "nan"
                ? result.PATIENT
                : "--",
            task: result.TASK && result.TASK !== "nan" ? result.TASK : "--",
            clinician_name:
              result.CLINICIAN_NAME && result.CLINICIAN_NAME !== "nan"
                ? result.CLINICIAN_NAME
                : "--",
            visit_status:
              result.VISIT_STATUS && result.VISIT_STATUS !== "nan"
                ? result.VISIT_STATUS
                : "--",
            schedule_date:
              result.SCHEDULE_DATE &&
              result.SCHEDULE_DATE !== "nan" &&
              result.SCHEDULE_DATE !== "None"
                ? result.SCHEDULE_DATE
                : "--",
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
        dropDownList={["Page2", "Page3"]}
      />

      <Row className="first-row">
        {/* Graph Section */}
        <Col md={8}>
          <Plot
            data={[
              {
                type: "bar",
                x: [30, 14, 23, 17, 31, 29],
                y: ["user1", "user2", "user3", "user4", "user5", "user6"],
                orientation: "h",
              },
            ]}
            layout={{ title: "Graph Title", autosize: true, margin: 0 }}
          />
        </Col>

        {/* KPIs Section */}
        <Col md={4}>
          <KpiCards
            totalCards={kpiValues}
            cardsForRow={2}
            clickCard={clickCard}
          />
        </Col>
      </Row>

      {/* Data Table Section */}
      <div>
        <AgGrid columnDefs={columnDefs} rowData={rowData} />
      </div>
      
    </div>
  );
};

export default Page1;
