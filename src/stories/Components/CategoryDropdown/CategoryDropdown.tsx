import { useEffect, useState, useRef } from "react";

import DropdownButton from "./component/DropdownButton";
import DropdownContent from "./component/DropdownContent";

import style from "./CategoryDropdown.module.scss";

import DropdownItem from "./component/DropdownItem";

// Define prop types
interface DropdownProps {
  varient: string;
}
interface Item {
  key: number | string;
  value: number | string;
}
const CategoryDropdown: React.FC<DropdownProps> = ({ varient="filter" }) => {


  const items: Item[] = [
    { key: "All", value: 1 },
    { key: "Market Trends", value: 2 },
    { key: "Altcoins", value: 3 },
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string>("DESC");

  const [dropdownTop, setDropdownTop] = useState<number | null>(0);
  const [selectedItem, setSelectedItem] = useState<Item>(items[0]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    if (!open) {
      const buttonBottom =
        buttonRef.current?.getBoundingClientRect().bottom ?? 0;
      const spaceRemaining = window.innerHeight - buttonBottom;
      const contentHeight = contentRef.current?.clientHeight ?? 0;

      const topPosition =
        spaceRemaining > contentHeight
          ? null
          : -(contentHeight - spaceRemaining); // move up by height clipped by window
      setDropdownTop(topPosition);
    }

    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  
  return (
    <div ref={dropdownRef} className={`${style["dropdown"]} ${style[varient]}`}>
      <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open} varient={varient} sortType={sortType} setSortType={setSortType}>
        {selectedItem.key }
      </DropdownButton>
      <DropdownContent top={dropdownTop} ref={contentRef} open={open}>
        {items.map((item, id) => (
          <DropdownItem key={id} isSelected={item.value == selectedItem.value} onClick={() => {setSelectedItem(item); toggleDropdown();}}>
            {item.key}
          </DropdownItem>
        ))}
      </DropdownContent>
    </div>
  );
};

export default CategoryDropdown;
