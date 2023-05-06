import React from "react";
import "./TaskCard.css";

interface TaskProp {
  deleteTask: (title: string) => void;
  title: string;
  description: string;
  dueDate: string;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">Due Date: {props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button
        id="deleteTaskButton"
        className="deleteTaskButton"
        onClick={() => {
          props.deleteTask(props.title);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
