/* eslint-disable react/prop-types */
import Delete from "../icons/delete";
import Edit from "../icons/Edit";

const Item = ({ name, status, onChange, onDeleteClick, onEditClick }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3 capitalize ">
        <input
          type="checkbox"
          value={name}
          checked={status}
          onChange={onChange}
        />
        <p className={`${status ? "line-through" : ""}`}>{name}</p>
      </div>
      <div className="flex">
        <Delete onClick={onDeleteClick} />
        <Edit onClick={onEditClick} />
      </div>
    </div>
  );
};

export default Item;
