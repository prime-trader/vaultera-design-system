import React from "react";
import style from "../PhoneDropdown.module.scss";

interface DropdownItemProps {
  children: React.ReactNode; // Content inside the dropdown item
  onClick: () => void; // Function to handle click events
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <div className={style["dropdown-item"]} onClick={onClick}>
      {children}
    </div>
  );
};

export default DropdownItem;
