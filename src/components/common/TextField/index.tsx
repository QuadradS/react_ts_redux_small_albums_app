import classNames from 'classnames'
import React from 'react'
import styles from './style.module.scss'

interface TextFieldProps {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
  title: string | number
  className?: string
  labelClassName?: string
}

const TextField = ({ inputProps, title, labelClassName, className }: TextFieldProps) => {
  return (
    <label className={classNames(styles.label, { [labelClassName || '']: labelClassName })} htmlFor={inputProps.id}>
      <p className={styles.label__title}>{title}</p>
      <input className={classNames(styles.label__input, { [className || '']: className })} {...inputProps}/>
    </label>
  )
}

export default TextField
