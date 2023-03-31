import TaskCard from "./TaskCard";

function App() {
  return (
    <div class="grid grid-cols-6">
      <div class="col-start-2 col-span-4">
        <p className="main">
          <strong>Smarter Tasks</strong>
        </p>
        <p className="p">
          <strong>Project:</strong> Graduation Final Year Project (Tula's Institue Dehradun)
        </p>
        <div className="container">
          <h1 className="h1">
            <strong>Pending</strong>
          </h1>
          <TaskCard
            title="Build the website"
            dueDate="10th April"
            assigneeName="Ankit R"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd  March"
            assigneeName="Ankit R"
          />
          <div className="new">
          <a  href="/">+ New Task </a>
          </div>
        </div>
        <div className="container">
          <h1 className="h1">
            <strong>Done</strong>
          </h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Ankit R"
          />
          <TaskCard
            title="Get approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default App;