import React, { useState, ComponentProps, useRef, useEffect } from 'react'
import clsx from 'clsx' // Conditional class names
import style from './PasswordField.module.scss'
import TextField from '../TextField/TextField'
import '../../../index.css'

type TextFieldProps = ComponentProps<typeof TextField>
type PasswordFieldProps = TextFieldProps

const PasswordField: React.FC<PasswordFieldProps> = ({ value = '', onChange, size = '450px' }) => {
  const [showPwd, setShowPwd] = useState(false)
  const [isPwdCorrect, setIsPwdCorrect] = useState(false)

  const validatePassword = (password: string) => {
    const isValid =
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[^a-zA-Z0-9\s]/.test(password)
    setIsPwdCorrect(isValid)
  }
  useEffect(() => {
    validatePassword(value)
  }, [value])
  const [isFocused, setIsFocused] = useState(false) // Track focus state
  const textFieldRef = useRef<HTMLInputElement | null>(null) // Ref for the TextField

  useEffect(() => {
    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    const textFieldElement = textFieldRef.current
    if (textFieldElement) {
      textFieldElement.addEventListener('focus', handleFocus)
      textFieldElement.addEventListener('blur', handleBlur)
    }

    return () => {
      if (textFieldElement) {
        textFieldElement.removeEventListener('focus', handleFocus)
        textFieldElement.removeEventListener('blur', handleBlur)
      }
    }
  }, [])
  return (
    <div className={clsx(style.passwordFieldCon, { [style.focused]: isFocused })}>
      <TextField
        textFieldRef={textFieldRef}
        label="Password"
        required
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        disabled={false}
        variant={showPwd ? 'text' : 'password'}
        size={size}
        minHeight="65px"
        icon={showPwd ? <PasswordShowIcon /> : <PasswordHideIcon />}
        onIconClick={() => setShowPwd((prev) => !prev)}
      />
      <PasswordErrorBox value={value} isPwdCorrect={isPwdCorrect} />
    </div>
  )
}

export default PasswordField

const PasswordErrorBox = ({ value, isPwdCorrect }: { value: string; isPwdCorrect: boolean }) => (
  <div
    className={clsx(style.passwordErrorBox, {
      [style.passwordCorrect]: isPwdCorrect
    })}
  >
    <div className={style.title}>
      <label>Password must</label>
    </div>
    <div className={style.listofErrors}>
      <ErrorItem isValid={value.length >= 8} text="be at least 8 characters long." />
      <ErrorItem isValid={/[a-z]/.test(value)} text="contain at least one lower case" />
      <ErrorItem isValid={/[A-Z]/.test(value)} text="contain at least one upper case" />
      <ErrorItem
        isValid={/[^a-zA-Z0-9\s]/.test(value)}
        text="contain at least one special character"
      />
    </div>
  </div>
)

const ErrorItem = ({ isValid, text }: { isValid: boolean; text: string }) => (
  <div className={clsx(style.row, { [style.valid]: isValid })}>
    <RedDot isValid={isValid} /> <label>{text}</label>
  </div>
)

const RedDot = ({ isValid }: { isValid: boolean }) => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4.5" cy="4.5" r="4" fill={isValid ? '#28a745' : '#FF5E5E'} />
  </svg>
)

const PasswordShowIcon = () => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1098_95744)">
        <path
          d="M14.9931 14.9507C13.5686 16.0365 11.8341 16.6381 10.0431 16.6673C4.2098 16.6673 0.876465 10.0007 0.876465 10.0007C1.91304 8.06892 3.35074 6.38118 5.09313 5.05067M8.29313 3.53401C8.86674 3.39974 9.45402 3.33262 10.0431 3.33401C15.8765 3.33401 19.2098 10.0007 19.2098 10.0007C18.7039 10.947 18.1007 11.838 17.4098 12.659M11.8098 11.7673C11.5809 12.013 11.3049 12.21 10.9983 12.3466C10.6916 12.4832 10.3606 12.5567 10.0249 12.5626C9.6892 12.5686 9.35577 12.5068 9.04447 12.3811C8.73318 12.2553 8.4504 12.0682 8.213 11.8308C7.97561 11.5934 7.78846 11.3106 7.66272 10.9993C7.53699 10.688 7.47524 10.3546 7.48116 10.0189C7.48708 9.68325 7.56056 9.35221 7.6972 9.04554C7.83384 8.73888 8.03084 8.46288 8.27647 8.23401"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.876465 0.833984L19.2098 19.1673"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1098_95744">
          <rect width="20" height="20" fill="white" transform="translate(0.0429688)" />
        </clipPath>
      </defs>
    </svg>
  )
}

const PasswordHideIcon = () => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_797_66845)">
        <path
          d="M1.37646 10.0007C1.37646 10.0007 4.7098 3.33398 10.5431 3.33398C16.3765 3.33398 19.7098 10.0007 19.7098 10.0007C19.7098 10.0007 16.3765 16.6673 10.5431 16.6673C4.7098 16.6673 1.37646 10.0007 1.37646 10.0007Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.543 12.5C11.9237 12.5 13.043 11.3807 13.043 10C13.043 8.61929 11.9237 7.5 10.543 7.5C9.16226 7.5 8.04297 8.61929 8.04297 10C8.04297 11.3807 9.16226 12.5 10.543 12.5Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_797_66845">
          <rect width="20" height="20" fill="white" transform="translate(0.542969)" />
        </clipPath>
      </defs>
    </svg>
  )
}
