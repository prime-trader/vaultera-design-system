import React from 'react'
import style from '../UserLoggedInAccount.module.scss'

interface DropdownItemProps {
  children: React.ReactNode // Content inside the dropdown item
  onClick: () => void // Function to handle click events
  isHr?: boolean
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick, isHr = false }) => {
  return (
    <div className={`${style['dropdown-item']} ${isHr && style.hr}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default DropdownItem
