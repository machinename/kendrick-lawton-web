'use client'
import { Paper } from '@mui/material';
import { Element } from 'react-scroll';
import Link from 'next/link';
import styles from './page.module.css'
import { ModelTraining, ModelTrainingOutlined, ModelTrainingTwoTone } from '@mui/icons-material';

export default function Page() {
  return (
    <>
      <Element className={styles.elementHome} name="/">
        <h1>
          Kendrick Lawton
        </h1>
        <p>
          Kansas City, Missouri
        </p>
        <p>
          I Engineer Solutions & Automate Processes. I'm currently a Test Automation Specialist and have a BS in Software Engineering.
        </p>
        <p>
          Professional I have significant experience building test automation framworks utilizing techonlogies just as Playwright for .Net and Seleiumn.
        </p>
      </Element>
      <Element className={styles.elementExperience} name="/experience" >
        <h1>Experience</h1>
        <p>Work</p>
        <p>Clyde & Co - Test Automation Specialist, April 2023 - Present</p>
        <p>Education</p>
        <p>Arizona State University - Bachelor of Science in Software Engineering (BSSE)</p>
        <p>Certifications</p>
        <p>ISTQB - Certified Tester Foundation Level (CTFL)</p>
      </Element>
      <Element className={styles.elementProject} name="/projects">
        <div>
          <h1>Projects</h1>
        </div>
        <div className={styles.elementProjectContainer}>
          <Paper className={styles.project}>
            <div className={styles.projectHeader}>
              <h2>File Note</h2>
            </div>
            <div className={styles.projectContent}>
              <h2>Content</h2>
            </div>
            <div className={styles.projectFooter}>
              <div className={styles.projectTech}>
                <p>Firebase GCP JavaScript Next.js </p>
              </div>
              <div className={styles.projectLinks}>
                <Link className={styles.navLink} href='https://github.com/machinename/file-note' target="_blank" rel="noopener noreferrer">
                  View Code</Link> <Link className={styles.navLink} href='' target="_blank" rel="noopener noreferrer">Visit Site</Link>
              </div>
            </div>
          </Paper>
          <Paper className={styles.project}>
            <div className={styles.projectHeader}>
              <h2>Mini ML</h2>
            </div>
            <div className={styles.projectContent}>
              <h2>Content</h2>
            </div>
            <div className={styles.projectFooter}>
              <div className={styles.projectTech}>
                <p>Dart Flask Flutter Firebase GCP Python</p>
              </div>
              <div className={styles.projectLinks}>
                <Link className={styles.navLink} href='https://github.com/machinename/mini_ml' target="_blank" rel="noopener noreferrer">
                  View Code</Link>
                <Link className={styles.navLink} href='' target="_blank" rel="noopener noreferrer">Visit Site</Link>
              </div>
            </div>
          </Paper>
        </div>
      </Element>
    </>
  );
};