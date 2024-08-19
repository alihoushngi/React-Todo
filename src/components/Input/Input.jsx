/* eslint-disable react/prop-types */

const Input = ({ value, onChangeHandler, onKeyPressHandler }) => {
  return (
    <input
      type="text"
      placeholder="Write ..."
      className="w-full mt-3 mr-3 p-3 border border-gray-200 rounded-md outline-purple-800 text-purple-800 font-medium capitalize"
      value={value}
      onChange={onChangeHandler}
      onKeyDown={onKeyPressHandler}
    />
  );
};

export default Input;
