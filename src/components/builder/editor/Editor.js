import React, { useState } from 'react'
import styles from './Editor.module.css'
import Input from './input/Input'
function Editor(props) {
    const sections=props.sections;
    const [activeSection, setActiveSection]=useState(Object.keys(sections)[0])

    const basicInfoBody=(
        <div className={styles.details}>
            <div className={styles.row}>
                <div className={styles.col}>
                        <Input label="First Name"/>
                        <Input label="Last Name"/>
                        
                </div>
                <Input label=" Email"/>
                <Input label="Phone No"/>
                <Input label="GitHub"/>
                <Input label="Linkidin"/>
            </div>

        </div>
    );
    const summaryBody=(
        <div>
            <textarea className={styles.textarea} cols="30" rows="10"></textarea>
        </div>
    );
    const educationBody =(
        <div>
            
        </div>
    );
    const workExpBody=(
        <div>

        </div>
    );
    const projectsBody =(
        <div>

        </div>
    );
    const achievementsBody =(
        <div>

        </div>
    );
    const othersBody=(
        <div>

        </div>
    );

    const generateBody=()=>{
        switch (sections[activeSection]) {
            case sections.basicInfo: return basicInfoBody;
            case sections.summary: return summaryBody;
            case sections.education: return educationBody;
            case sections.work_experience: return workExpBody;
            case sections.projects: return projectsBody;
            case sections.achievements: return achievementsBody;
            case sections.others: return othersBody;
            default:return null;
               
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {Object.keys(sections)?.map(key=>(
                <div className={`${styles.sections} ${activeSection === key?styles.active:""}`} key={key} onClick={()=>setActiveSection(key)}>{sections[key]}</div>
            ))}
        </div>
        <div className={styles.body}>
            <Input label="Title" placeholder="Enter section title"/>
            {generateBody()}
        </div>
    </div>
  )
}

export default Editor