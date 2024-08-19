/* eslint-disable react/prop-types */

const Header = ({ headerDetails }) => {
  const { title, description } = headerDetails;

  return (
    <header>
      <h1 className="font-bold text-4xl uppercase font-serif select-none">
        {title}
      </h1>
      <span className="font-thin text-xl capitalize font-serif select-none">
        {description}
      </span>
    </header>
  );
};

export default Header;
