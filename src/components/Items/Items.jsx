/* eslint-disable react/prop-types */
import { useState } from "react";
import EditMode from "../EditMode/EditMode";
import Item from "../Item/Item";

const Items = ({ details, setTasks, tasks }) => {
  const { name, status, id } = details;
  const [editMode, setEditMode] = useState(false);

  // ! function for delete
  const itemDeleteHandler = (id) => {
    tasks.map((task) => {
      if (task.id == id) {
        const newList = tasks.filter((item) => item.id != task.id);
        localStorage.setItem("tasks", JSON.stringify(newList));
        setTasks(newList);
      }
    });
  };

  const checkedHandler = (item) => {
    let newStatus = tasks.map((todoItems) => {
      if (item.id === todoItems.id) {
        todoItems.status = !todoItems.status;
      }

      return todoItems;
    });

    setTasks(newStatus);
    localStorage.setItem("tasks", JSON.stringify(newStatus));
  };

  const editHandler = (e, item) => {
    if (e.key === "Enter") {
      let updatedTasks = tasks.map((task) => {
        if (task.id === item.id) {
          task.name = e.target.value;
          task.status = false;
          setEditMode(false);
        }
        return task;
      });
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  return (
    <>
      {editMode ? (
        <EditMode
          onKeyDown={(e) => editHandler(e, details)}
          setEditMode={setEditMode}
          name={name}
        />
      ) : (
        <Item
          name={name}
          status={status}
          onChange={() => checkedHandler(details)}
          onDeleteClick={() => itemDeleteHandler(id)}
          onEditClick={() => setEditMode(true)}
        />
      )}
    </>
  );
};

export default Items;
