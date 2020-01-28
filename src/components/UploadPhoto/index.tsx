import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import styles from './style.module.scss'

const UploadPhoto = () => {

  const [selectedFiles, setFiles]: any = useState([])

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((it: File) =>
      setFiles([...selectedFiles, {
        filename: it.name,
        size: it.size,
        type: it.type
      }])
    )}

  return (
    <div className={styles.container}>
      <select className={styles.container__select}>
        <option value="Test">value1</option>
        <option value="Test">value1</option>
        <option value="Test">value1</option>
        <option value="Test">value1</option>
        <option value="Test">value1</option>
      </select>


      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className={styles.dropzone}>
            <div {...getRootProps()} className={styles.dropzone__input}>
              <input {...getInputProps()} accept="image/x-png,image/gif,image/jpeg"/>
              <h1>{selectedFiles.length}</h1>
            </div>
          </section>
        )}
      </Dropzone>

    </div>
  )
}

export default UploadPhoto
