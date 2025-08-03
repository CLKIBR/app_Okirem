# DailyTasksComponent Documentation

## Purpose
Lists daily tasks for a student, shows status (completed/pending/expired), live XP/coin reward updates, responsive design, accessibility, and motivational quote when all tasks are complete.

## API
- **Selector:** `<daily-tasks [studentId]="userId" />`
- **Inputs:**
  - `studentId: string` (required)
- **Outputs:** None

## Usage
Import and use in any Angular template:
```html
<daily-tasks [studentId]="userId" />
```

## Props
| Name       | Type    | Description                |
|------------|---------|----------------------------|
| studentId  | string  | Authenticated student ID   |

## Edge Cases
- No tasks: Shows empty state
- Expired tasks: Shows "Süresi Doldu"
- API error: Shows error message
- Offline: Shows error message

## Testing
- Unit tests mock Firestore, test all UI states, task complete flow, motivational quote

## Accessibility
- ARIA roles
- Keyboard navigation (tabindex)
- Focus ring on cards/buttons

## Responsive
- 1 column mobile
- 2/3 column desktop

## Example Flows
- Student sees daily tasks, marks as complete, UI updates instantly
- All tasks complete: motivational quote appears

## Error Handling
- Loading spinner
- Error message on API/offline failure
- Empty state if no tasks

## i18n
- All user-facing labels in Turkish

## Tips
- Use with Firestore collection `daily-tasks` (fields: id, title, description, icon, rewardType, rewardValue, isCompleted, order, dueDate)
- Place in student dashboard or any page
- Standalone Angular component
