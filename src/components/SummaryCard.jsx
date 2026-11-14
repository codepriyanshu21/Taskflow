const tones = {
    blue: ['bg-blue-50', 'text-blue-600'],
    amber: ['bg-amber-50', 'text-amber-600'],
    violet: ['bg-violet-50', 'text-violet-600'],
    green: ['bg-emerald-50', 'text-emerald-600'],
}

export default function SummaryCard({ label, count, tone, icon }) {
    const [background, color] = tones[tone]
    return (
        <article className="flex min-h-20 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 sm:min-h-24 sm:p-4">
            <div className={`grid size-9 shrink-0 place-items-center rounded-[10px] text-lg font-bold ${background} ${color}`}>
                {icon}
            </div>
            <div>
                <span className="mb-1 block text-xs text-slate-500">{label}</span>
                <strong className="block font-sans text-2xl font-bold text-slate-900">
                    {count}
                </strong>
            </div>
        </article>
    )
}
