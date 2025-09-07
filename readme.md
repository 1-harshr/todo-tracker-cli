This project is a solution to https://roadmap.sh/projects/task-tracker


# Task Tracker CLI

A simple command-line task management tool built with Node.js that allows you to add, update, delete, and track the status of your tasks.

## Features

- ✅ Add new tasks
- 📝 Update existing tasks
- 🗑️ Delete tasks
- 🔄 Mark tasks as in progress
- ✅ Mark tasks as done
- 📋 List tasks by status (pending, in progress, done)

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/1-harshr/todo-tracker-cli.git
cd todo-tracker-cli
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Add a Task
```bash
node src/main.js add "Your task description"
```

### List Tasks
```bash
# List all pending tasks
node src/main.js list pending

# List all in-progress tasks
node src/main.js list "in progress"

# List all completed tasks
node src/main.js list done
```

### Update a Task
```bash
node src/main.js update <task-id> "Updated task description"
```

### Mark Task as In Progress
```bash
node src/main.js mark-in-progress <task-id>
```

### Mark Task as Done
```bash
node src/main.js mark-done <task-id>
```

### Delete a Task
```bash
node src/main.js delete <task-id>
```

## Examples

```bash
# Add some tasks
node src/main.js add "Learn Node.js"
node src/main.js add "Build a web app"
node src/main.js add "Write documentation"

# List pending tasks
node src/main.js list pending

# Mark first task as in progress
node src/main.js mark-in-progress 1

# Mark first task as done
node src/main.js mark-done 1

# List completed tasks
node src/main.js list done

# Update second task
node src/main.js update 2 "Build a React web app"

# Delete third task
node src/main.js delete 3
```

## Data Storage

Tasks are stored in a `tasks.json` file in the project root. The file structure is:

```json
[
  {
    "id": 1,
    "taskName": "Learn Node.js",
    "status": "pending"
  }
]
```

## Task Statuses

- `pending` - Newly created tasks
- `in progress` - Tasks currently being worked on
- `done` - Completed tasks

## Project Structure

```
task-tracker-cli/
├── src/
│   ├── main.js          # Main CLI interface
│   └── taskDoer.js      # Task management functions
├── tasks.json           # Task storage file
├── package.json         # Project dependencies
└── readme.md           # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the ISC License.
