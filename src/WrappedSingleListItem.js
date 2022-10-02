import PropTypes from "prop-types";
const WrappedSingleListItem = ({
  index,
  isSelected,
  SetSelectedIndex,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected === index ? "green" : "red" }}
      onClick={() => SetSelectedIndex(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.number.isRequired,
  SetSelectedIndex: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default WrappedSingleListItem;
