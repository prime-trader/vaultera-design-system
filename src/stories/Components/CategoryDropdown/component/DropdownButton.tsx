import React, { forwardRef } from "react";

import style from "../CategoryDropdown.module.scss";

interface DropdownButtonProps {
  children: React.ReactNode; // Content inside the button
  toggle: () => void; // Function to handle toggle
  open: boolean; // Indicates whether the dropdown is open
  varient: string;
  sortType: string;
  setSortType: any;
}

// forwardRef with explicit typing for props and ref
const DropdownButton = forwardRef<HTMLDivElement, DropdownButtonProps>(
  ({ children, toggle, open, varient, sortType, setSortType }, ref) => {
    return (
      <div
        onClick={toggle}
        className={`${style["dropdown-btn"]} ${open ? style["button-open"] : ""}`}
        ref={ref}
      >
        {children}
        <span
          className={style["toggle-icon"]}
          aria-hidden="true"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          {open ? (
            <DropDownUpArrow varient={varient} />
          ) : (
            <DropDownDownArrow varient={varient} />
          )}
        </span>
        {varient == "filter" && (
          <span
            className={style["toggle-icon"]}
            aria-hidden="true"
            onClick={(e) => {
              e.stopPropagation();
              setSortType((prev: string) => (prev == "DESC" ? "ASC" : "DESC"));
            }}
          >
            <SortICon type={sortType} />
          </span>
        )}
      </div>
    );
  }
);

export default DropdownButton;

const DropDownUpArrow = ({ varient }: { varient: string }) => {
  if (varient == "filter") {
    return (
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.08958 12.7559C5.76414 13.0814 5.23651 13.0814 4.91107 12.7559C4.58563 12.4305 4.58563 11.9028 4.91107 11.5774L9.91107 6.57741C10.2365 6.25197 10.7641 6.25197 11.0896 6.57741L16.0896 11.5774C16.415 11.9028 16.415 12.4305 16.0896 12.7559C15.7641 13.0814 15.2365 13.0814 14.9111 12.7559L10.5003 8.34518L6.08958 12.7559Z"
          fill="url(#paint0_linear_20755_17765)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_20755_17765"
            x1="4.66699"
            y1="9.66667"
            x2="16.9618"
            y2="9.66667"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#45D3E8" />
            <stop offset="1" stop-color="#0CF54E" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.08958 12.2559C5.76414 12.5814 5.23651 12.5814 4.91107 12.2559C4.58563 11.9305 4.58563 11.4028 4.91107 11.0774L9.91107 6.07741C10.2365 5.75197 10.7641 5.75197 11.0896 6.07741L16.0896 11.0774C16.415 11.4028 16.415 11.9305 16.0896 12.2559C15.7641 12.5814 15.2365 12.5814 14.9111 12.2559L10.5003 7.84518L6.08958 12.2559Z"
        fill="#D376FF"
      />
    </svg>
  );
};

const DropDownDownArrow = ({ varient }: { varient: string }) => {
  if (varient == "filter") {
    return (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.58958 8.24408C5.26414 7.91864 4.73651 7.91864 4.41107 8.24408C4.08563 8.56951 4.08563 9.09715 4.41107 9.42259L9.41107 14.4226C9.73651 14.748 10.2641 14.748 10.5896 14.4226L15.5896 9.42259C15.915 9.09715 15.915 8.56951 15.5896 8.24408C15.2641 7.91864 14.7365 7.91864 14.4111 8.24408L10.0003 12.6548L5.58958 8.24408Z"
          fill="url(#paint0_linear_20755_6305)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_20755_6305"
            x1="4.16699"
            y1="11.3333"
            x2="16.4618"
            y2="11.3333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#45D3E8" />
            <stop offset="1" stop-color="#0CF54E" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.58958 8.24408C5.26414 7.91864 4.73651 7.91864 4.41107 8.24408C4.08563 8.56951 4.08563 9.09715 4.41107 9.42259L9.41107 14.4226C9.73651 14.748 10.2641 14.748 10.5896 14.4226L15.5896 9.42259C15.915 9.09715 15.915 8.56951 15.5896 8.24408C15.2641 7.91864 14.7365 7.91864 14.4111 8.24408L10.0003 12.6548L5.58958 8.24408Z"
        fill="#D376FF"
      />
    </svg>
  );
};
const SortICon = ({ type }: { type: string }) => {
  if (type == "DESC") {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 12.5H2.5"
          stroke="url(#paint0_linear_557_67645)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.5 8.5H2.5"
          stroke="url(#paint1_linear_557_67645)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 16.5H2.5"
          stroke="url(#paint2_linear_557_67645)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.5 15.25L19.5 11.5M19.5 11.5L16.5 15.25M19.5 11.5L19.5 20.5"
          stroke="url(#paint3_linear_557_67645)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_557_67645"
            x1="2.5"
            y1="13"
            x2="15.1461"
            y2="13"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#45D3E8" />
            <stop offset="1" stop-color="#0CF54E" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_557_67645"
            x1="2.5"
            y1="9"
            x2="21.4691"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#45D3E8" />
            <stop offset="1" stop-color="#0CF54E" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_557_67645"
            x1="2.5"
            y1="17"
            x2="13.0384"
            y2="17"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#45D3E8" />
            <stop offset="1" stop-color="#0CF54E" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_557_67645"
            x1="19.5"
            y1="20.5"
            x2="19.5"
            y2="11.0154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#45D3E8" />
            <stop offset="1" stop-color="#0CF54E" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 12.5H2.5"
        stroke="url(#paint0_linear_557_67541)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 8.5H2.5"
        stroke="url(#paint1_linear_557_67541)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 16.5H2.5"
        stroke="url(#paint2_linear_557_67541)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.5 16.75L19.5 20.5M19.5 20.5L16.5 16.75M19.5 20.5L19.5 11.5"
        stroke="url(#paint3_linear_557_67541)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_557_67541"
          x1="2.5"
          y1="13"
          x2="15.1461"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#45D3E8" />
          <stop offset="1" stop-color="#0CF54E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_557_67541"
          x1="2.5"
          y1="9"
          x2="21.4691"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#45D3E8" />
          <stop offset="1" stop-color="#0CF54E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_557_67541"
          x1="2.5"
          y1="17"
          x2="13.0384"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#45D3E8" />
          <stop offset="1" stop-color="#0CF54E" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_557_67541"
          x1="19.5"
          y1="11.5"
          x2="19.5"
          y2="20.9846"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#45D3E8" />
          <stop offset="1" stop-color="#0CF54E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
