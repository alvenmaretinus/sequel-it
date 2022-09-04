import React from 'react'
import { recommendationQuery } from '../../constants/query';

interface Props {
  query: string
  onQueryChange: React.Dispatch<React.SetStateAction<string>>
  onExecuteQuery: () => void
}

function QueryFields(props: Props) {
  const { query, onQueryChange, onExecuteQuery } = props

  return (
    <div className="query-wrapper">
      <textarea
        className="query-field"
        rows={10}
        placeholder="SELECT * FROM ..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <div className="query-actions-wrapper">
        <div className="recommendation-tags">
          {Object
            .entries(recommendationQuery)
            .map(([ tagName, tagQuery ]) => (
              <button
                key={tagName}
                onClick={() => onQueryChange(tagQuery)}
              >
                {tagName}
              </button>
            ))}
        </div>
        <button
          className="query-button"
          onClick={onExecuteQuery}
        >
          Execute Query
        </button>
      </div>
    </div>
  )
}

export default QueryFields;
