/* eslint-disable react/prop-types */
const Edit = ({ onClick: itemEditHandler }) => {
  return (
    <img
      src="/edit.png"
      alt="edit icon"
      width={20}
      className="cursor-pointer"
      onClick={itemEditHandler}
    />
  );
};

export default Edit;
