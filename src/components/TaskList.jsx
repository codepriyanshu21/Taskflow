import TaskRow from './TaskRow'

export default function TaskList({ tasks, totalTasks, hasFilters, onResetFilters, onEdit, onDelete, onStatusChange }) {
  if (!tasks.length) {
    return (
      <div className="grid min-h-60 place-items-center px-5 py-16 text-center">
        <div>
          <div className="mx-auto mb-3 grid size-12 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
            ⌁
          </div>
          <h3 className="mb-1.5 text-sm font-bold text-slate-800">
            {totalTasks ? 'No matching tasks' : 'Your task list is clear'}
          </h3>
          <p className="mb-3 text-xs text-slate-500">
            {totalTasks ? 'Try adjusting your search or filters.' : 'Add your first task to start planning your day.'}
          </p>
          {hasFilters && (
            <button
              className="border-0 bg-transparent py-1 text-xs font-bold text-blue-600"
              onClick={onResetFilters}
            >
              Reset filters
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  )
}
