import React from "react";
import Task from "./Task";

interface Props {
  tasks: TaskItem[];

  deleteTask: (id: string) => any;
}

interface TaskItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
        id={task.id}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTask={props.deleteTask}
      />
    </li>
  ));
  return (
    <>
      <ol>{list}</ol>
    </>
  );
};

export default TaskList;
