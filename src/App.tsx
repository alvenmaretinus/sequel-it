import React, { useState, useEffect } from 'react';
import QueryField from './components/QueryField';
import ResultTable from './components/ResultTable';
import { simulateFetchTableData } from './utils/network';
import { ResultTableData } from "./types/TableData";
import './App.css';

function App() {
  const [queryFieldValue, setQueryFieldValue] = useState('');
  const [query, setQuery] = useState('');
  const [data, setData] = useState<ResultTableData>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!!query) {
      setLoading(true);
      (async () => {
        const data = await simulateFetchTableData(query);
        setData(data)
        setLoading(false);
      })()
    }
  }, [query])

  const onExecuteQuery = () => {
    if (query === queryFieldValue) return;

    setData([])
    setQuery(queryFieldValue)
  }

  return (
    <div className="app">
      <h1>Sequel it!</h1>
      <QueryField
        query={queryFieldValue}
        onQueryChange={setQueryFieldValue}
        onExecuteQuery={onExecuteQuery}
      />
      <ResultTable data={data} loading={loading} />
    </div>
  );
}

export default App;
