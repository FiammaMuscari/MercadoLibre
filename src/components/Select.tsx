import {FiChevronDown} from "react-icons/fi";
import React, {useState} from "react";

import {dropdown, dropdownBtn, dropdownContent, dropdownItem} from "./style.module.css";

interface Prop {
  selected: any;
  setSelected: any;
}

const Dropdown: React.FC<Prop> = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["1 unidad", "2 unidades", "3 unidades", "4 unidades", "5 unidades"];

  return (
    <div className={dropdown}>
      <div className={dropdownBtn} onClick={() => setIsActive(!isActive)}>
        {selected}
        <FiChevronDown />
      </div>
      {isActive && (
        <div className={dropdownContent}>
          {options.map((option) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className={dropdownItem}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
