import { Button } from "react-bootstrap";

import "./index.css"

import React from 'react'

const ButtonComponent = ({buttonName,color}) => {
  return (
    <div>
    <Button
    style={{ color: "#046ed2" }}
    variant="outline-secondary action-crud"
    //onClick={() => openUpdateModal(params)}
    // onClick={() => {
    //   console.log("Hai");
    // }}
  >
    Edit
  </Button>
  </div>
  )
}

export default React.memo(ButtonComponent);
