import { useEffect, useState, useRef } from 'react'

import DropdownButton from './component/DropdownButton'
import DropdownContent from './component/DropdownContent'

import style from './UserLoggedInAccount.module.scss'

// Define prop types
interface DropdownProps {
  username: string
  isVerified?: boolean
}

const UserLoggedInAccount: React.FC<DropdownProps> = ({ username, isVerified = true }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [dropdownTop, setDropdownTop] = useState<number | null>(0)

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

  return (
    <div ref={dropdownRef} className={style['dropdown']}>
      <DropdownButton
        ref={buttonRef}
        toggle={toggleDropdown}
        open={open}
        username={username}
        isVerified={isVerified}
      ></DropdownButton>
      <DropdownContent top={dropdownTop} ref={contentRef} open={open}></DropdownContent>
    </div>
  )
}

export default UserLoggedInAccount
