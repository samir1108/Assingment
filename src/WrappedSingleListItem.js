import PropTypes from "prop-types";
import { memo } from "react";

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
const SingleList = memo(WrappedSingleListItem);
export default SingleList;
