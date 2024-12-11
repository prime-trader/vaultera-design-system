import React, { forwardRef } from 'react'
import style from '../PhoneDropdown.module.scss'

interface DropdownContentProps {
  children: React.ReactNode // Content inside the dropdown
  open: boolean // Indicates if the dropdown is open
  top: number | null // Top position for the dropdown
}

// forwardRef with explicit typing for props and ref
const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ children, open, top }, ref) => {
    return (
      <div
        className={`${style['dropdown-content']} ${open ? style['content-open'] : ''}`}
        style={{ top: top !== null ? `${top}px` : '100%' }}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default DropdownContent
