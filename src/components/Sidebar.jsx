export default function Sidebar() {
  return (
    <aside className="hidden w-52 shrink-0 flex-col border-r border-slate-200 bg-white px-3 py-6 lg:flex xl:w-60 xl:px-4">
      <div className="flex items-center gap-2.5 px-2.5 pb-10 font-sans text-xl font-bold tracking-tight text-slate-900">
        <span className="grid size-7 place-items-center rounded-lg bg-blue-600 text-sm text-white shadow-lg shadow-blue-600/20">
          ✓
        </span>
        Taskflow
      </div>

      <nav className="grid gap-1.5" aria-label="Primary navigation">
        <a
          className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-700"
          href="#tasks"
        >
          <span className="w-5 text-center">▦</span>
          Overview
        </a>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-50"
          href="#tasks"
        >
          <span className="w-5 text-center">□</span>
          My tasks
        </a>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-50"
          href="#tasks"
        >
          <span className="w-5 text-center">◷</span>
          Upcoming
        </a>
      </nav>

      <div className="mt-auto flex items-center gap-2.5 border-t border-slate-200 px-2 pt-4 text-xs">
        <div className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-100 font-bold text-blue-700">
          P
        </div>
        <div className="grid min-w-0 flex-1 gap-0.5">
          <strong className="truncate text-xs text-slate-800">Priyanshu</strong>
          <span className="text-slate-400">Workspace owner</span>
        </div>
        <button className="text-slate-400" aria-label="Account menu">
          ···
        </button>
      </div>
    </aside>
  )
}
