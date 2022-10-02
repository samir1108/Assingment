import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }} //here isSelected is a boolean value , it should be a number also isselected is an function so both ways it is wrong
      onClick={onClickHandler(index)} //here it should be be a arrow function and it will cause problems becoz whenever this program will run it will automatically call itself
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number, //index should be required
  isSelected: PropTypes.bool, //isSelected be required
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem); // I am not sure about it but there is no neeed to wrap it in memo becoz memo prevents to reredner if props have not changed and everytime state changes , props will change

// List Component
const WrappedListComponent = ({ items }) => {
  const [setSelectedIndex, selectedIndex] = useState(); // this method is wrong , it should be like this
  const [SelectedIndex, setselectedIndex] = useState();
  useEffect(() => {
    setSelectedIndex(null);
  }, [items]); //logically no need to call useeffect if items changes  because we are wrapping it in usememo

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map(
        (
          item,
          index ///if items is null then it will give a warning
        ) => (
          <SingleListItem
            onClickHandler={() => handleClick(index)}
            text={item.text}
            index={index}
            isSelected={selectedIndex}
            //key prop is missing
          />
        )
      )}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.array(
    /// it  should arrayof
    PropTypes.shapeOf({
      ///it should be shape
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent); //

export default List;
