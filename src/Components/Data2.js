import React, { useEffect, useState } from "react";
import AgGrid from "./AgGrid";
import axios from "axios";

const Data2 = () => {
  // dataTable Column
  const [columnDefs, setColumnDefs] = useState([
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
    {
      field: "visit_date",
      headerName: "VISIT DATE",
      checked: true,
      suppressMovable: true,
      filter: "agDateColumnFilter",
      minWidth: 125,
      maxWidth: 125,
    },
    {
      field: "skill_type",
      headerName: "SKILL TYPE",
      filter: "agSetColumnFilter",
      checked: true,
      suppressMovable: true,
      minWidth: 120,
      maxWidth: 120,
    },
    {
      field: "billable",
      headerName: "BILLABLE",
      checked: true,
      suppressMovable: true,
      minWidth: 131,
      maxWidth: 131,
    },
    {
      field: "is_missed_visit",
      headerName: "IS MISSED VISIT",
      checked: true,
      suppressMovable: true,
      minWidth: 150,
      maxWidth: 150,
    },
  ]);

  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000, struct: "jsdf" },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

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
              result.SCHEDULE_DATE != "None"
                ? result.SCHEDULE_DATE
                : "--",
            visit_date:
              result.VISIT_DATE &&
              result.VISIT_DATE !== "nan" &&
              result.VISIT_DATE != "None"
                ? result.VISIT_DATE
                : "--",
            skill_type:
              result.SKILL_TYPE && result.SKILL_TYPE !== "nan"
                ? result.SKILL_TYPE
                : "--",
            billable:
              result.BILLABLE && result.BILLABLE !== "nan"
                ? result.BILLABLE
                : "--",
            is_missed_visit:
              result.IS_MISSED_VISIT && result.IS_MISSED_VISIT !== "nan"
                ? result.IS_MISSED_VISIT
                : "--",
          });
          if (Number(i + 1) === Number(results.length)) {
            setRowData(items);
          }
        }
      });
  }, []);

  return (
    <div>
      <AgGrid columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

export default Data2;
