/* eslint-disable react/prop-types */
import Delete from "../icons/delete";

const EditMode = ({ onKeyDown, setEditMode, name }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex w-full items-center gap-3 capitalize ">
        <input
          className="w-full mr-3 p-1 border border-gray-200 rounded-md outline-purple-800 text-purple-800 font-medium capitalize"
          type="text"
          defaultValue={name ?? name}
          onKeyDown={onKeyDown}
          onChange={() => {}}
        />
      </div>
      <div className="flex">
        <Delete
          onClick={() => {
            setEditMode(false);
          }}
        />
      </div>
    </div>
  );
};

export default EditMode;
