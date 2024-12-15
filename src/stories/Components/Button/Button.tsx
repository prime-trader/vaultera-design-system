import React from 'react'
import clsx from 'clsx' // For conditional class names
import style from './button.module.scss'
import '../../../index.css'

type ButtonProps = {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'outline'
  size?: '150px' | '100%' | string
  icon?: React.ReactNode // Optional prop
  tags?: string
  type?: 'button' | 'submit'
}
// Custum Styling Append clsx
// Isloader Icons
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  size = '150px',
  icon,
  tags,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(style.button, style[variant])}
      style={{ width: size }}
      aria-label={label || 'Button'}
      role="button"
    >
      {tags && <InfoLabel text={tags} />}
      {label && <span>{label}</span>}
      {icon && <span className={style.icon}>{icon}</span>}
    </button>
  )
}

const InfoLabel: React.FC<{ text: string }> = ({ text }) => (
  <div className={style.InfoLabel}>
    <label>{text}</label>
  </div>
)

export default Button
