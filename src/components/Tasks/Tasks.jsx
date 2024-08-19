/* eslint-disable react/prop-types */
import Items from "../items/items";

const Task = ({ tasks, setTasks }) => {
  return (
    <div className="mt-5 flex flex-col gap-2">
      {tasks.map((items, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center border border-gray-200 p-5 rounded-md shadow-sm"
          >
            <Items details={items} setTasks={setTasks} tasks={tasks} />
          </div>
        );
      })}
    </div>
  );
};

export default Task;
