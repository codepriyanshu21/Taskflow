import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SummaryGrid from './components/SummaryGrid'
import TaskForm from './components/TaskForm'
import TaskPanel from './components/TaskPanel'
import useTaskManager from './components/useTaskManager'

function App() {
    const taskManager = useTaskManager()

    return (
        <div className="flex  min-h-screen bg-slate-50">
            <Sidebar />

            <main className=" flex-1 px-4 py-7 sm:px-6 lg:px-8 lg:py-9 xl:px-12">
                <Header onNewTask={taskManager.startNewTask} />
                <SummaryGrid counts={taskManager.counts} />

                <div className="grid items-start gap-5 lg:grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-6">
                    <div className="order-1 xl:order-1">
                        <TaskForm
                            form={taskManager.form}
                            editingId={taskManager.editingId}
                            errors={taskManager.errors}
                            priorities={taskManager.priorities}
                            statuses={taskManager.statuses}
                            onChange={taskManager.handleChange}
                            onSubmit={taskManager.handleSubmit}
                            onCancel={taskManager.resetForm}
                        />
                    </div>

                    <div className="order-2 xl:order-2">
                        <TaskPanel
                            tasks={taskManager.visibleTasks}
                            totalTasks={taskManager.tasks.length}
                            query={taskManager.query}
                            statusFilter={taskManager.statusFilter}
                            priorityFilter={taskManager.priorityFilter}
                            sortOrder={taskManager.sortOrder}
                            statuses={taskManager.statuses}
                            priorities={taskManager.priorities}
                            hasFilters={taskManager.hasFilters}
                            onQueryChange={(event) => taskManager.setQuery(event.target.value)}
                            onStatusChange={(event) => taskManager.setStatusFilter(event.target.value)}
                            onPriorityChange={(event) => taskManager.setPriorityFilter(event.target.value)}
                            onSortChange={(event) => taskManager.setSortOrder(event.target.value)}
                            onResetFilters={taskManager.resetFilters}
                            onEdit={taskManager.beginEdit}
                            onDelete={taskManager.deleteTask}
                            onTaskStatusChange={taskManager.changeStatus}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
