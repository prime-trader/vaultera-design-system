import React from 'react'
import style from './BackToTopBtn.module.scss'
import '../../../index.css'

type ButtonProps = {
  onClick: () => void

  visible: boolean
}

const BackToTopBtn: React.FC<ButtonProps> = ({ onClick, visible }) => {
  return (
    <button
      onClick={onClick}
      className={`${style.button} ${visible ? style.visible : style.hidden}`}
    >
      <ArrowIcon />
    </button>
  )
}

const ArrowIcon = () => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.25 15L12.25 9L6.25 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BackToTopBtn
