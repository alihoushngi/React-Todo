/* eslint-disable react/prop-types */
const Layout = (props) => {
  const { children } = props;

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="bg-gray-50 p-10 rounded-md ">{children}</div>
    </div>
  );
};

export default Layout;
