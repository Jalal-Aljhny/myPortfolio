import PropTypes from "prop-types";
const ThemeItem = ({ img, color, changeColor }) => {
  return (
    <img
      src={img}
      alt="color picker"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default ThemeItem;
ThemeItem.propTypes = {
  img: PropTypes.string,
  color: PropTypes.string,
  changeColor: PropTypes.func,
};
