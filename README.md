# Taskflow

Taskflow is a responsive task management dashboard built with React, Vite, and Tailwind CSS. It supports creating, editing, filtering, sorting, completing, and deleting tasks on desktop, tablet, and mobile layouts.

## Features

- Create, edit, and delete tasks
- Required title and due-date validation
- Low, Medium, and High priorities
- Pending, In Progress, and Completed statuses
- Search by task title
- Combined status and priority filters
- Earliest-first and latest-first due-date sorting
- Summary counts for total, pending, in-progress, and completed tasks
- LocalStorage persistence across browser refreshes
- Responsive empty states and layouts

## Requirements

- Node.js 18 or newer
- npm

## Setup

Clone the repository, open the project directory, and install dependencies:

```bash
git clone <repository-url>
cd task-management
npm install
```

## Run Locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Project Structure

```text
src/
  App.jsx                    Page composition
  index.css                  Tailwind and global styles
  components/
    Header.jsx               Dashboard heading and new-task action
    Sidebar.jsx              Desktop navigation and user profile
    SummaryGrid.jsx          Summary card layout
    SummaryCard.jsx          Individual task count card
    TaskForm.jsx              Create and edit form
    TaskPanel.jsx             Task workspace container
    Filters.jsx               Search, filters, and sorting controls
    TaskList.jsx              List and empty states
    TaskRow.jsx               Individual task display and actions
    useTaskManager.js         Task state, CRUD, validation, and persistence
```

## Data Persistence

Tasks are stored in the browser's LocalStorage under the key `task-management.tasks`. Clearing site data or using a different browser profile will remove the locally stored tasks.
