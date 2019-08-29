import React from 'react';

const TableHead = () => {
  return(
    <table border='1' id='table-head'>
      <thead>
        <tr>
          <th>Request Type</th>
          <th>
            Payload Size
                <br />
            (in Bytes)
              </th>
          <th>Original URL</th>
          <th>Response Status</th>
          <th>Response Message</th>
        </tr>
      </thead>
    </table>
  )
} 

export default TableHead;