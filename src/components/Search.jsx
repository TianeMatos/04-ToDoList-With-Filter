import "./Search.css"

export default function Search({ search, setSearch }) {
  return (
    <div className="search">
      <input type="text" id="searchTask" value={search} onChange={(ev) => setSearch(ev.target.value)} placeholder="Digite uma Tarefa..." />
    </div>
  )
}