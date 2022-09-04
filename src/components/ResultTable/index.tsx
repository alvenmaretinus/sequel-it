import React from 'react';
import { ResultTableData } from "../../types/TableData"

interface Props {
  data: ResultTableData;
  loading: boolean;
}

function ResultTable(props: Props) {
  const { data, loading } = props;

  if (!data.length && !loading) {
    return null
  }

  return (
    <div className="table-wrapper">
      <table className="result-table">
        <thead>
          {loading ? (
            <tr>
              <td>Loading table data...</td>
            </tr>
          ) : (
            <>
              {!!data.length && (
                <tr>
                  {Object
                    .keys(data[0])
                    .map((columnName, index) => <th key={index}>{columnName}</th>)}
                </tr>
              )}
            </>
          )}
        </thead>
        <tbody>
          {data.map((rowData, index) => {
            return (
              <tr key={index}>
                {Object
                  .values(rowData)
                  .map((value, index) => <td key={index}>{value}</td>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
