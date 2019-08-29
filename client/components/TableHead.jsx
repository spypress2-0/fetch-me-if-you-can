import React from 'react';

const TableHead = () => {
  return(
    <table className="ui celled table">
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