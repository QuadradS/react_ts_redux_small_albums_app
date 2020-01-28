import React from 'react'
import styles from './style.module.scss'
import {ReactComponent as ImageIcon} from '../common/icons/image-icon.svg'
import {ReactComponent as GridIcon} from '../common/icons/grid-icon.svg'
import {ReactComponent as PointIcon} from '../common/icons/point-icon.svg'
import {ReactComponent as ChatIcon} from '../common/icons/chat-icon.svg'
import {ReactComponent as SquareIcon} from '../common/icons/outlined-square-icon.svg'
import {ReactComponent as FlagIcon} from '../common/icons/flag-icon.svg'


const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tab_item}>
        <ImageIcon/>
      </div>
      <div className={styles.tab_item}>
        <GridIcon/>
      </div>
      <div className={styles.tab_item}>
        <PointIcon/>
      </div>
      <div className={styles.tab_item}>
        <ChatIcon/>
      </div>
      <div className={styles.tab_item}>
        <SquareIcon/>
      </div>
      <div className={styles.tab_item}>
        <FlagIcon/>
      </div>
    </div>
  )
}

export default Tabs
