import React, { useCallback, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import "./aggrid.css"

const AgGrid = ({columnDefs,rowData}) => {

  const AGGridReferenceValue = useRef(null);

  const onFirstDataRendered = useCallback(() => {
    AGGridReferenceValue.current.api.sizeColumnsToFit();
  }, []);

  return (
    <div className='container-fluid py-3'>
      <div className="ag-theme-alpine" style={{height: 400}}>
           <AgGridReact
              ref={AGGridReferenceValue}
               rowData={rowData}
               columnDefs={columnDefs}
               onFirstDataRendered={onFirstDataRendered}
              >
           </AgGridReact>
       </div>
    </div>
  )
}

export default React.memo(AgGrid);