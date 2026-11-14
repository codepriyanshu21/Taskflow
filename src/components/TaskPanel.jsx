import Filters from './Filters'
import TaskList from './TaskList'

export default function TaskPanel({ tasks, totalTasks, query, statusFilter, priorityFilter, sortOrder, statuses, priorities, hasFilters, onQueryChange, onStatusChange, onPriorityChange, onSortChange, onResetFilters, onEdit, onDelete, onTaskStatusChange }) {
    return (
        <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 sm:p-6" id="tasks">
            <div className="mb-5 flex items-start justify-between">
                <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Your workspace
                    </p>
                    <h2 className="font-sans text-xl font-bold tracking-tight text-slate-900">
                        All tasks
                        <span className="ml-1 inline-grid min-w-6 place-items-center rounded-full bg-slate-100 px-1.5 py-1 align-[2px] text-[11px] font-semibold text-slate-500">
                            {totalTasks}
                        </span>
                    </h2>
                </div>

                <button
                    className="border-0 bg-transparent py-1 text-xs font-bold text-blue-600 disabled:cursor-default disabled:text-slate-300"
                    onClick={onResetFilters}
                    disabled={!hasFilters}
                >
                    Clear filters
                </button>
            </div>

            <Filters
                query={query}
                statusFilter={statusFilter}
                priorityFilter={priorityFilter}
                sortOrder={sortOrder}
                statuses={statuses}
                priorities={priorities}
                onQueryChange={onQueryChange}
                onStatusChange={onStatusChange}
                onPriorityChange={onPriorityChange}
                onSortChange={onSortChange}
            />

            <TaskList
                tasks={tasks}
                totalTasks={totalTasks}
                hasFilters={hasFilters}
                onResetFilters={onResetFilters}
                onEdit={onEdit}
                onDelete={onDelete}
                onStatusChange={onTaskStatusChange}
            />
        </section>
    )
}
