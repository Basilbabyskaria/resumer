import React from 'react'
import styles from './Builder.module.css'
import Editor from './editor/Editor'
import Preview from './preview/Preview'

function Builder() {
  const sections={
    basicInfo:"Basic Info",
    summary:"Summary",
    education:"Education",
    work_experience:"Work Experience",
    projects:"Projects",
    achievements:"Achievenments",
    others:"Others"

  }
  return (
    <div className={styles.row}>
      <div className={styles.col1} >
      <Editor sections={sections}/>
      </div>
      <div className={styles.col2} >
        <Preview/>
      </div>

    </div>

  )
}

export default Builder