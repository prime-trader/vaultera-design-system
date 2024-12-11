import React from 'react'
import style from '../CategoryDropdown.module.scss'

interface DropdownItemProps {
  children: React.ReactNode // Content inside the dropdown item
  onClick: () => void // Function to handle click events
  isSelected: boolean
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, isSelected, onClick }) => {
  return (
    <div className={`${style['dropdown-item']} ${isSelected && style.selected}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default DropdownItem
