import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const deleteTask = (id: string) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((task) => task.id !== id),
    });
  };

  return (
    <div>
      <div className="grid grid-cols-6 ">
        <div className="col-start-2 col-span-4">
          <p className="text-3xl flex justify-center p-4">
            <strong>Smarter Tasks</strong>
          </p>
          <p className="text-xl p-2 mb-4">
            <strong>Project:</strong> Graduation Final Year Project (Tula's
            Institue Dehradun)
          </p>
          <div className="addTask border-2 border-slate-700 p-6 m-1 justify-center flex">
            <TaskForm addTask={addTask} />
          </div>
          <div className="container">
            <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
