export default function TaskForm({ form, editingId, errors, priorities, statuses, onChange, onSubmit, onCancel }) {
  return (
    <form className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6" onSubmit={onSubmit}>
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
            {editingId ? 'Edit task' : 'New task'}
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight text-slate-900">
            {editingId ? 'Update your task' : 'Add a task'}
          </h2>
        </div>
        {editingId && (
          <button
            className="border-0 bg-transparent py-1 text-xs font-bold text-blue-600"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>

      <label className="mb-4 block text-xs font-bold text-slate-600">
        Task title
        <input
          className={`mt-1.5 block w-full rounded-lg border bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 ${errors.title ? 'border-red-400' : 'border-slate-200'}`}
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="e.g. Prepare weekly report"
          aria-invalid={Boolean(errors.title)}
        />
        {errors.title && <small className="mt-1 block font-medium text-red-600">{errors.title}</small>}
      </label>

      <label className="mb-4 block text-xs font-bold text-slate-600">
        Description
        <textarea
          className="mt-1.5 block min-h-20 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Add context or notes"
          rows="3"
        />
      </label>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="mb-4 block  text-xs font-bold text-slate-600">
          Priority
          <select
            className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-0.5 py-2.5 text-sm font-normal text-slate-900 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            name="priority"
            value={form.priority}
            onChange={onChange}
          >
            {priorities.map((priority) => (
              <option key={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>

        <label className="mb-4 block text-xs font-bold text-slate-600">
          Due date
          <input
            className={`mt-1.5 block w-full rounded-lg border bg-slate-50 px-0.5 py-2.5 text-sm font-normal text-slate-900 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 ${errors.dueDate ? 'border-red-400' : 'border-slate-200'}`}
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={onChange}
            aria-invalid={Boolean(errors.dueDate)}
          />
          {errors.dueDate && <small className="mt-1 block font-medium text-red-600">{errors.dueDate}</small>}
        </label>
      </div>

      <label className="mb-4 block text-xs font-bold text-slate-600">
        Status
        <select
          className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-normal text-slate-900 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          name="status"
          value={form.status}
          onChange={onChange}
        >
          {statuses.map((status) => (
            <option key={status}>
              {status}
            </option>
          ))}
        </select>
      </label>

      <button
        className="w-full rounded-lg border-0 bg-blue-600 px-3 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
        type="submit"
      >
        <span className="mr-1 text-lg align-[-1px]">＋</span>
        {editingId ? 'Save changes' : 'Create task'}
      </button>
    </form>
  )
}
