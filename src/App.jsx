import { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Task from "./components/Tasks/Tasks";
import Input from "./components/Input/Input";

function App() {
  // ! set header details
  const header = {
    title: "Todo List",
    description: "Write you tasks to clean your memory",
  };

  // ? value added from input
  const [value, setValue] = useState("");

  // ! array for create tasks
  const [tasks, setTasks] = useState([]);

  // ! get Data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("tasks"); // changed "task" to "tasks" to store the array
    if (data) {
      setTasks(JSON.parse(data)); // parse and set the tasks if they exist
    }
  }, []);

  // * functions
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onKeyPressHandler = (e) => {
    if (e.key === "Enter" && value !== "") {
      let newItem = {
        name: value,
        status: false,
        id: uuidv1(),
      };
      const updatedTasks = [...tasks, newItem];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setValue("");
    }
  };

  return (
    <>
      <Layout>
        <Header headerDetails={header} />
        <main>
          <Input
            value={value}
            onChangeHandler={onChangeHandler}
            onKeyPressHandler={onKeyPressHandler}
          />
          <Task tasks={tasks} setTasks={setTasks} />
        </main>
      </Layout>
    </>
  );
}

export default App;
