import { useEffect, useState } from 'react'

const STORAGE_KEY = 'task-management.tasks'
const DEMO_TASK_IDS = new Set(['welcome-1', 'welcome-2', 'welcome-3'])
export const statuses = ['Pending', 'In Progress', 'Completed']
export const priorities = ['Low', 'Medium', 'High']
export const emptyForm = {
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    status: 'Pending',
}

function readTasks() {
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY)
        if (!saved) return []

        const parsed = JSON.parse(saved)
        if (!Array.isArray(parsed)) return []

        return parsed
            .filter((task) => (
                task &&
                !DEMO_TASK_IDS.has(task.id) &&
                typeof task.title === 'string' &&
                typeof task.dueDate === 'string'
            ))
            .map((task) => ({
                id: task.id || crypto.randomUUID(),
                title: task.title,
                description: typeof task.description === 'string' ? task.description : '',
                priority: priorities.includes(task.priority) ? task.priority : 'Medium',
                dueDate: task.dueDate,
                status: statuses.includes(task.status) ? task.status : 'Pending',
            }))
    } catch {
        return []
    }
}

export default function useTaskManager() {
    const [tasks, setTasks] = useState(readTasks)
    const [form, setForm] = useState(emptyForm)
    const [editingId, setEditingId] = useState(null)
    const [errors, setErrors] = useState({})
    const [query, setQuery] = useState('')
    const [statusFilter, setStatusFilter] = useState('All statuses')
    const [priorityFilter, setPriorityFilter] = useState('All priorities')
    const [sortOrder, setSortOrder] = useState('earliest')

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    const visibleTasks = tasks
        .filter((task) => task.title.toLowerCase().includes(query.toLowerCase().trim()))
        .filter((task) => statusFilter === 'All statuses' || task.status === statusFilter)
        .filter((task) => priorityFilter === 'All priorities' || task.priority === priorityFilter)
        .sort((a, b) => sortOrder === 'earliest'
            ? a.dueDate.localeCompare(b.dueDate)
            : b.dueDate.localeCompare(a.dueDate))

    const counts = {
        Total: tasks.length,
        Pending: tasks.filter((task) => task.status === 'Pending').length,
        'In Progress': tasks.filter((task) => task.status === 'In Progress').length,
        Completed: tasks.filter((task) => task.status === 'Completed').length,
    }

    const hasFilters = Boolean(
        query ||
        statusFilter !== 'All statuses' ||
        priorityFilter !== 'All priorities',
    )

    function handleChange(event) {
        setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
        setErrors((current) => ({ ...current, [event.target.name]: '' }))
    }

    function resetForm() {
        setForm(emptyForm)
        setEditingId(null)
        setErrors({})
    }

    function handleSubmit(event) {
        event.preventDefault()
        const nextErrors = {}

        if (!form.title.trim()) nextErrors.title = 'A title is required.'
        if (!form.dueDate) nextErrors.dueDate = 'Choose a due date.'
        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors)
            return
        }

        if (editingId) {
            setTasks((current) => current.map((task) => (
                task.id === editingId
                    ? { ...form, id: editingId, title: form.title.trim() }
                    : task
            )))
        } else {
            setTasks((current) => [
                { ...form, id: crypto.randomUUID(), title: form.title.trim() },
                ...current,
            ])
        }

        resetForm()
    }

    function beginEdit(task) {
        setEditingId(task.id)
        setForm({
            title: task.title,
            description: task.description,
            priority: task.priority,
            dueDate: task.dueDate,
            status: task.status,
        })
        setErrors({})
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    function deleteTask(id) {
        const task = tasks.find((item) => item.id === id)
        if (task && window.confirm(`Delete "${task.title}"?`)) {
            setTasks((current) => current.filter((item) => item.id !== id))
        }
    }

    function changeStatus(id, status) {
        setTasks((current) => current.map((task) => (
            task.id === id ? { ...task, status } : task
        )))
    }

    function resetFilters() {
        setQuery('')
        setStatusFilter('All statuses')
        setPriorityFilter('All priorities')
    }

    function startNewTask() {
        resetForm()
        document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
    }

    return {
        tasks,
        form,
        editingId,
        errors,
        visibleTasks,
        counts,
        hasFilters,
        query,
        statusFilter,
        priorityFilter,
        sortOrder,
        priorities,
        statuses,
        handleChange,
        handleSubmit,
        resetForm,
        beginEdit,
        deleteTask,
        changeStatus,
        resetFilters,
        startNewTask,
        setQuery,
        setStatusFilter,
        setPriorityFilter,
        setSortOrder,
    }
}
