const statuses = ['Pending', 'In Progress', 'Completed']
const statusStyles = {
    Pending: ['bg-amber-400', 'shadow-amber-100'],
    'In Progress': ['bg-violet-500', 'shadow-violet-100'],
    Completed: ['bg-emerald-500', 'shadow-emerald-100'],
}
const priorityStyles = {
    Low: 'bg-emerald-50 text-emerald-700',
    Medium: 'bg-amber-50 text-amber-700',
    High: 'bg-red-50 text-red-700',
}

function formatDate(date) {
    if (!date) {
        return 'No due date'
    }

    const parsedDate = new Date(`${date}T00:00:00`)
    if (Number.isNaN(parsedDate.getTime())) {
        return 'Invalid due date'
    }

    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(parsedDate)
}

export default function TaskRow({ task, onEdit, onDelete, onStatusChange }) {
    const [dotColor, ringColor] = statusStyles[task.status] || statusStyles.Pending
    return (
        <article className="flex flex-col gap-3 border-b border-slate-200 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="flex min-w-0 items-start gap-3">
                <div
                    className={`mt-1.5 size-2.5 shrink-0 rounded-full shadow-[0_0_0_4px] ${dotColor} ${ringColor}`}
                    aria-hidden="true"
                />

                <div className="min-w-0">
                    <h3 className="truncate text-base font-bold text-slate-800 sm:text-lg">
                        {task.title}
                    </h3>

                    {task.description && (
                        <p className="max-w-lg truncate text-xs text-slate-400">
                            {task.description}
                        </p>
                    )}

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:gap-3">
                        <span
                            className={`rounded px-2 py-1 text-[10px] font-bold ${priorityStyles[task.priority] || priorityStyles.Medium}`}
                        >
                            {task.priority}
                        </span>

                        <span>
                            <span className="mr-1" aria-hidden="true">◷</span>
                            {formatDate(task.dueDate)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex w-full shrink-0 items-center justify-end gap-1 sm:w-auto">
                <select
                    className="h-8 w-28 rounded-md border border-slate-200 bg-slate-50 px-2 text-[11px] text-slate-700 outline-none focus:border-blue-400"
                    aria-label={`Change status for ${task.title}`}
                    value={task.status}
                    onChange={(event) => onStatusChange(task.id, event.target.value)}
                >
                    {statuses.map((status) => (
                        <option key={status}>
                            {status}
                        </option>
                    ))}
                </select>

                <button
                    className="grid size-8 place-items-center rounded-md border-0 bg-transparent text-base text-slate-400 hover:bg-blue-50 hover:text-blue-600"
                    type="button"
                    onClick={() => onEdit(task)}
                    aria-label={`Edit ${task.title}`}
                >
                    ✎
                </button>

                <button
                    className="grid size-8 place-items-center rounded-md border-0 bg-transparent text-base text-slate-400 hover:bg-red-50 hover:text-red-600"
                    type="button"
                    onClick={() => onDelete(task.id)}
                    aria-label={`Delete ${task.title}`}
                >
                    ⌫
                </button>
            </div>
        </article>
    )
}
