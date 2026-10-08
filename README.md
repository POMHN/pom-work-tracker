# POM Work Tracker

A lightweight, standalone web application for tracking daily work activities, tasks, and accomplishments.

Built using **HTML**, **CSS**, and **JavaScript** with no external dependencies, no installation requirements, and full offline support.

---

## Overview

POM Work Tracker is designed to help capture daily work activities in a simple and efficient manner.

The application allows users to:

- Track daily tasks
- Categorize work items
- Record comments and details
- Mark tasks as completed
- Generate daily summaries
- Export and import task data
- Edit existing entries
- Store data automatically in the browser

Everything runs entirely in the browser and can be launched by simply opening `index.html`.

---

## Features

### Task Management

- Add tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Cancel task editing

### Task Details

Each task includes:

- Title
- Category
- Start Time
- End Time
- Comments
- Completion Status

### Categories

Available categories:

- Development
- Meeting
- Support
- Documentation
- Testing
- Other

### Search

Filter tasks instantly using the search box.

### Summary Generation

Generate a formatted summary of all tasks for:

- Daily status updates
- Team meetings
- Manager reporting
- End-of-day reporting

### Data Persistence

Tasks are automatically saved using browser Local Storage:

```javascript
localStorage["dailyTracker"]
```

Data remains available after:

- Browser restart
- Computer restart
- Page refresh

### Import / Export

Export all task data to:

```text
daily-work-log.json
```

Import previously exported files to restore tasks.

---

## User Interface

The application follows a Fluent-inspired design language:

- Light modern theme
- Soft blue workspace background
- White content cards
- Category badges
- Responsive layout
- Modern typography
- Smooth scrolling
- Visual task status indicators

---

## Editing Workflow

1. Click **Edit** on a task.
2. The page smoothly scrolls to the task form.
3. The form is populated with existing data.
4. The **Add Task** button changes to **Save Task**.
5. Make changes.
6. Click **Save Task**.
7. The task is updated in place while maintaining its original position.
8. The button returns to **Add Task**.

### Cancelling an Edit

During editing:

1. Click **Cancel**
2. Form values are cleared
3. Edit mode is exited
4. Button changes back to **Add Task**

---

## Data Storage

### Local Storage

Data is automatically saved to:

```javascript
localStorage["dailyTracker"]
```

### Important

Clearing browser storage may remove locally stored tasks.

Recommended practice:

- Export data periodically
- Keep JSON backups of important work logs

---

## Project Structure

```text
pom-work-tracker/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
└── README.md
```

---

## Running the Application

No installation is required.

Simply:

```text
1. Open the project folder
2. Double-click index.html
```

The application will launch in the default browser.

---

## Browser Compatibility

Tested with:

- Microsoft Edge
- Google Chrome

Modern browsers supporting:

- Local Storage
- FileReader API
- Blob API

should work without modification.

---

## Version

**Version:** 1.0

### Highlights

- Fluent-style UI redesign
- Task editing support
- Cancel editing workflow
- Smooth scrolling to edit form
- Category badges
- JSON import/export
- Local Storage persistence
- Daily summary generation

---

Created for personal productivity tracking and daily work reporting.