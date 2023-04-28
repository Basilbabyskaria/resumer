import React, { useState } from 'react'
import styles from './Editor.module.css'
import Input from './input/Input'
function Editor(props) {
    const sections=props.sections;
    const [activeSection, setActiveSection]=useState(Object.keys(sections)[0])

    const basicInfoBody=(
        <div className={styles.details}>
            <div className={styles.row}>
               
                    <Input label="First Name"/>
                    <Input label="Last Name"/>
                    <Input label=" Email"/>
                    <Input label="Phone No"/>
                    <Input label="GitHub"/>
                    <Input label="Linkidin"/>



            
            </div>

        </div>
    );


  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {Object.keys(sections)?.map(key=>(
                <div className={`${styles.sections} ${activeSection === key?styles.active:""}`} key={key} onClick={()=>setActiveSection(key)}>{sections[key]}</div>
            ))}
        </div>
        <div className={styles.body}>
            <Input label="Title" placeholder="Enter section title"/>
            {basicInfoBody}
        </div>
    </div>
  )
}

export default Editor