import React, { forwardRef } from "react";

import style from "../PhoneDropdown.module.scss";

interface DropdownButtonProps {
  children: React.ReactNode; // Content inside the button
  toggle: () => void; // Function to handle toggle
  open: boolean; // Indicates whether the dropdown is open
  selectedItem: Item;
  isInputFocused: boolean;
}
interface Item {
  countryName: string;
  phoneCode: string;
  imgPath: string;
}
// forwardRef with explicit typing for props and ref
const DropdownButton = forwardRef<HTMLDivElement, DropdownButtonProps>(
  ({ children, toggle, open, selectedItem,isInputFocused }, ref) => {
    return (
      <div
        className={`${style["dropdown-btn"]} ${open || isInputFocused ? style["button-open"] : ""}`}
        ref={ref}
      >
        <div onClick={toggle} className={style.leftSide}>
          <img
            src={`${selectedItem.imgPath}`}
            className={style.itemImg}
          />
          <span className={style.itemSpan}>{selectedItem.phoneCode}</span>

          <span
            className={style["toggle-icon"]}
            aria-hidden="true"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            {open ? <DropDownUpArrow /> : <DropDownDownArrow />}
          </span>
        </div>
        <Divider />
        {children}
      </div>
    );
  }
);

export default DropdownButton;

const DropDownUpArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 9.33849C11.8796 9.33849 11.7675 9.35773 11.6636 9.39619C11.5598 9.43466 11.4611 9.50069 11.3675 9.59427L6.87325 14.0885C6.73478 14.2269 6.66395 14.401 6.66075 14.6106C6.65753 14.8202 6.72837 14.9975 6.87325 15.1423C7.01812 15.2872 7.19375 15.3596 7.40015 15.3596C7.60655 15.3596 7.78218 15.2872 7.92705 15.1423L12.0001 11.0692L16.0732 15.1423C16.2117 15.2808 16.3857 15.3516 16.5953 15.3548C16.8049 15.358 16.9822 15.2872 17.127 15.1423C17.2719 14.9975 17.3444 14.8218 17.3444 14.6154C17.3444 14.409 17.2719 14.2334 17.127 14.0885L12.6328 9.59427C12.5392 9.50069 12.4405 9.43466 12.3367 9.39619C12.2328 9.35773 12.1207 9.33849 12.0001 9.33849Z"
        fill="#9EA6BA"
      />
    </svg>
  );
};

const DropDownDownArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 14.6615C11.8796 14.6615 11.7675 14.6423 11.6636 14.6038C11.5598 14.5654 11.4611 14.4993 11.3675 14.4058L6.87325 9.91154C6.73478 9.77309 6.66395 9.59905 6.66075 9.38944C6.65753 9.17982 6.72837 9.00258 6.87325 8.85771C7.01812 8.71284 7.19375 8.64041 7.40015 8.64041C7.60655 8.64041 7.78218 8.71284 7.92705 8.85771L12.0001 12.9308L16.0732 8.85771C16.2117 8.71926 16.3857 8.64843 16.5953 8.64521C16.8049 8.64201 16.9822 8.71284 17.127 8.85771C17.2719 9.00258 17.3444 9.17822 17.3444 9.38464C17.3444 9.59104 17.2719 9.76667 17.127 9.91154L12.6328 14.4058C12.5392 14.4993 12.4405 14.5654 12.3367 14.6038C12.2328 14.6423 12.1207 14.6615 12.0001 14.6615Z"
        fill="white"
      />
    </svg>
  );
};
const Divider = () => {
  return (
    <svg
      width="2"
      height="24"
      viewBox="0 0 2 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.0429688" width="1" height="24" rx="0.5" fill="#BEBEBE" />
    </svg>
  );
};
