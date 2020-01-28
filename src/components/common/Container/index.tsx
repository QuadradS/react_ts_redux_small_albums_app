import React from 'react'
import styles from './style.module.scss'

interface ContainerProps {
  children: React.ReactNode | string | number
  maxWidth: number
}

const Container = ({children, maxWidth = 1024}: ContainerProps) => {
  return(
    <div className={styles.container} style={{maxWidth}}>
      {children}
    </div>
  )
}

export default Container
