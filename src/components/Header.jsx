export default function Header({ onNewTask }) {
    return (
        <header className="mb-7 flex items-start justify-between gap-4 sm:mb-8">
            <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Workspace / Overview
                </p>
                <h1 className="mb-2 font-sans text-[27px] font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Good morning, Priyanshu <span className="text-amber-400">✦</span>
                </h1>
                <p className="text-sm text-slate-500">Keep your day moving forward.</p>
            </div>

            <button
                className="shrink-0 rounded-lg border-0 bg-blue-600 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 sm:px-4 sm:py-2.5"
                type="button"
                onClick={onNewTask}
            >
                <span className="mr-1 text-base">＋</span>
                <span className="hidden sm:inline">New task</span>
            </button>
        </header>
    )
}
