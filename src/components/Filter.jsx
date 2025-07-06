import "./Filter.css"

export default function Filter({ filter, setFilter, setSort }) {
  return (
    <div className="filter">
      <div className="formFilterBox">
          <p>Status:</p>
          <select name="status" id="status" value={filter} onChange={(ev) => setFilter(ev.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
      </div>
      <div className="sortElementsBox">
        <p>Ordem Alfabética:</p>
        <div className="sortButtons">
          <button onClick={() => setSort("Asc")}>Ascendente</button>
          <button onClick={() => setSort("Desc")}>Descendente</button>
        </div>
      </div>
    </div>
  )
}