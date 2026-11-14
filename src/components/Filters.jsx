export default function Filters({ query, statusFilter, priorityFilter, sortOrder, statuses, priorities, onQueryChange, onStatusChange, onPriorityChange, onSortChange }) {
  const selectClass = 'h-10 w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-2.5 text-xs text-slate-700 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100'
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-slate-200 pb-4 sm:grid-cols-2 lg:grid-cols-4">
      <label className="relative m-0 sm:col-span-2 lg:col-span-1">
        <span className="pointer-events-none absolute left-3 top-2 text-xl leading-6 text-slate-400">⌕</span>
        <input
          className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          value={query}
          onChange={onQueryChange}
          placeholder="Search tasks..."
          aria-label="Search tasks by title"
        />
      </label>

      <select className={selectClass} value={statusFilter} onChange={onStatusChange} aria-label="Filter by status">
        <option>All statuses</option>
        {statuses.map((status) => (
          <option key={status}>
            {status}
          </option>
        ))}
      </select>

      <select className={selectClass} value={priorityFilter} onChange={onPriorityChange} aria-label="Filter by priority">
        <option>All priorities</option>
        {priorities.map((priority) => (
          <option key={priority}>
            {priority}
          </option>
        ))}
      </select>

      <select className={selectClass} value={sortOrder} onChange={onSortChange} aria-label="Sort by due date">
        <option value="earliest">Due date: earliest</option>
        <option value="latest">Due date: latest</option>
      </select>
    </div>
  )
}
