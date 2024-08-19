/* eslint-disable react/prop-types */
const Delete = ({ onClick: itemDeleteHandler }) => {
  return (
    <img
      src="/X.png"
      alt="delete icon"
      width={20}
      className="cursor-pointer"
      onClick={itemDeleteHandler}
    />
  );
};

export default Delete;
