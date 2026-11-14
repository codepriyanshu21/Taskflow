import SummaryCard from './SummaryCard'

export default function SummaryGrid({ counts }) {
    return (
        <section
            className="mb-6 grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-3.5"
            aria-label="Task summary"
        >
            <SummaryCard label="Total tasks" count={counts.Total} tone="blue" icon="◈" />
            <SummaryCard label="Pending" count={counts.Pending} tone="amber" icon="◷" />
            <SummaryCard label="In progress" count={counts['In Progress']} tone="violet" icon="↗" />
            <SummaryCard label="Completed" count={counts.Completed} tone="green" icon="✓" />
        </section>
    )
}
