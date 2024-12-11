import { useEffect, useState, useRef } from 'react'

import DropdownButton from './component/DropdownButton'
import DropdownContent from './component/DropdownContent'

import style from './Dropdown.module.scss'

import DropdownItem from './component/DropdownItem'

// Define prop types
interface DropdownProps {
  buttonText: string
}
interface Item {
  key: number | string
  value: number | string
}
const Dropdown: React.FC<DropdownProps> = ({ buttonText }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [dropdownTop, setDropdownTop] = useState<number | null>(0)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdown = () => {
    if (!open) {
      const buttonBottom = buttonRef.current?.getBoundingClientRect().bottom ?? 0
      const spaceRemaining = window.innerHeight - buttonBottom
      const contentHeight = contentRef.current?.clientHeight ?? 0

      const topPosition = spaceRemaining > contentHeight ? null : -(contentHeight - spaceRemaining) // move up by height clipped by window
      setDropdownTop(topPosition)
    }

    setOpen((prevOpen) => !prevOpen)
  }

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])
  const items: Item[] = [
    { key: 'Option 1', value: 1 },
    { key: 'Option 2', value: 2 },
    { key: 'Option 3', value: 3 },
    { key: 'Option 4', value: 4 },
    { key: 'Option 5', value: 5 },
    { key: 'Option 6', value: 6 },
    { key: 'Option 7', value: 7 }
  ]
  return (
    <div ref={dropdownRef} className={style['dropdown']}>
      <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
        {selectedItem?.key || <span className={style.placeholder}>{buttonText}</span>}
      </DropdownButton>
      <DropdownContent top={dropdownTop} ref={contentRef} open={open}>
        {items.map((item, id) => (
          <DropdownItem
            key={id}
            onClick={() => {
              setSelectedItem(item)
              toggleDropdown()
            }}
          >
            {item.key}
          </DropdownItem>
        ))}
      </DropdownContent>
    </div>
  )
}

export default Dropdown
