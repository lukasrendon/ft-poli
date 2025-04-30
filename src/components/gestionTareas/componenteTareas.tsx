import React from "react";
import { Task } from "../../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </li>
  );
};

export default TaskItem;