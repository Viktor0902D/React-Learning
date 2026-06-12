import { useState } from "react";

const initialData = [
  {
    id: "col-1",
    title: "To Do",
    tasks: [
      { id: "t-1", text: "Learn JSX" },
      { id: "t-2", text: "Understand Props" },
    ],
  },
  {
    id: "col-2",
    title: "In Progress",
    tasks: [{ id: "t-3", text: "Build Kanban Scaffold" }],
  },
  {
    id: "col-3",
    title: "Done",
    tasks: [{ id: "t-4", text: "Vanilla JS Mastery" }],
  },
];

const App = () => {
  const [columns, setColumns] = useState(initialData);

  const addTask = (columnId, newTaskText) => {
    setColumns((prevCols) =>
      prevCols.map((col) => {
        if (col.id === columnId) {
          const newTask = { id: `t-${Date.now()}`, text: newTaskText };
          return { ...col, tasks: [...col.tasks, newTask] };
        }
        return col;
      }),
    );
  };

  const deleteTask = (columnId, taskId) => {
    setColumns((prevCols) =>
      prevCols.map((col) => {
        if (col.id === columnId) {
          const updatedTasks = col.tasks.filter((task) => task.id !== taskId);
          return { ...col, tasks: updatedTasks };
        }
        return col;
      }),
    );
  };

  return (
    <div className="app">
      {columns.map((col) => (
        <Column
          key={col.id}
          id={col.id} // Passing ID so the column knows who it is
          title={col.title}
          tasks={col.tasks}
          addTask={addTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};
const Column = ({ id, title, tasks, addTask, deleteTask }) => {
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    if (inputValue.trim()) {
      addTask(id, inputValue);
      setInputValue("");
    }
  }

  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Card
          deleteTask={deleteTask}
          columnId={id}
          key={task.id}
          taskId={task.id}
          text={task.text}
        />
      ))}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const Card = ({ text, columnId, taskId, deleteTask }) => {
  return (
    <div style={{ position: "sticky" }} className="card">
      {text}
      <button onClick={() => deleteTask(columnId, taskId)}>X</button>
    </div>
  );
};

export default App;
