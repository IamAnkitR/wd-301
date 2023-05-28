import { Link } from "react-router-dom";

interface TaskProp {
  id: string;
  deleteTask: (id: string) => void;
  title: string;
  description: string;
  dueDate: string;
}

const Task = (props: TaskProp) => {
  return (
    <div className="shadow-md border-2 border-slate-700 p-4 m-2 ">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base font-semibold text-xl pl-1 pb-2 ">
          {props.title}
        </h2>
      </Link>

      <p className="text-sm text-slate-800 p-1">Due Date: {props.dueDate}</p>
      <p className="text-sm text-slate-800 p-1">
        Description: {props.description}
      </p>
      <button
        id="deleteTaskButton"
        className="deleteTaskButton border-2 border-black p-1 m-1 bg-red-800 border rounded"
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
