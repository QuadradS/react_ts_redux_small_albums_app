import classNames from 'classnames'
import React from 'react'
import styles from './style.module.scss'

interface ButtonProps {
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>
  children: string | number
  className?: string
}

const Button = ({ buttonProps, className, children }: ButtonProps) => {
  return (
    <button className={classNames(styles.button, { [className || '']: className })} {...buttonProps}>{children}</button>
  )
}

export default Button
