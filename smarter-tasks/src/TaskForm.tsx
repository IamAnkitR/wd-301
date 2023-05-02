import React from "react";
import { TaskItem } from "./types";
import "./TaskCard.css";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  inputRef = React.createRef<HTMLInputElement>();
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    }
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    }
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };
   render(){
    return (
      <form onSubmit={this.addTask}>
        <input id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged} required/>
        <input id="todoDescription" type="text" value={this.state.description} onChange={this.descriptionChanged} required/>
        <input id="todoDueDate" type="text" value={this.state.dueDate} onChange={this.dueDateChanged} required/>
        <button id="addTaskButton" type="submit">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;