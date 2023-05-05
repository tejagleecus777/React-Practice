import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DropDown = ({dropDownHeader,dropDownList}) => {
  let dropDownValue = "";  
  return (
    <div className='container-fluid'>
      <Dropdown className="d-flex justify-content-end">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {dropDownHeader ? dropDownHeader : ""}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {dropDownList ? dropDownList.map((value)=>{
              dropDownValue = "/" + value;
               return <Dropdown.Item as={Link} to={dropDownValue}>{value}</Dropdown.Item>
            }) : <Dropdown.Item>No Data</Dropdown.Item>}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default React.memo(DropDown);