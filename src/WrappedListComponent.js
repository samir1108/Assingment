import React, { useState, memo } from "react";
import PropTypes from "prop-types";

import WrappedSingleListItem from "./WrappedSingleListItem";
const WrappedListComponent = ({ items }) => {
  const [SelectedIndex, SetSelectedIndex] = useState();

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item, index) => (
        <WrappedSingleListItem
          SetSelectedIndex={SetSelectedIndex}
          text={item.text}
          index={index}
          key={index}
          isSelected={SelectedIndex}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: null,
};
const ListComponent = memo(WrappedListComponent);

export default ListComponent;
