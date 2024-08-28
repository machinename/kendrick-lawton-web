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
          Kendrick Lawton | Playwright Expert
        </h1>
        <p>
          I Engineer Solutions &amp; Automate Processes. I&apos;m currently a Test Automation Specialist and have a BS in Software Engineering.
        </p>
        <p>
          Professionally I have significant experience building test automation frameworks utilizing technologies such as Playwright for .NET.
        </p>
      </Element>
      <Element className={styles.elementExperience} name="/experience" >
        <h1>Experience</h1>
        <h2>Work</h2>
        <p>Clyde & Co - Test Automation Specialist, April 2023 - Present</p>
        <p>Since starting in this role, I&rsquo;ve deepened my expertise in testing web-based and client/server applications. Leading automation projects has honed my skills in creating and executing test scripts, while collaborating with clients has improved my ability to translate their needs into effective test plans.</p>
        <p>Managing sprint schedules and work allocation has strengthened my project management skills, ensuring timely and high-quality project delivery. These experiences have significantly enhanced both my technical proficiency and overall project execution.</p>
        <h2>Education</h2>
        <p>Arizona State University - Bachelor of Science in Software Engineering (BSSE)</p>
        <h2>Certifications</h2>
        <p>ISTQB - Certified Tester Foundation Level (CTFL)</p>
      </Element>
      <Element className={styles.elementProject} name="/projects">
        <Link href="https://github.com/machinename" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
          <h1>Projects</h1>
        </Link>
        <h2>Nesta Note</h2>
        <p>Nesta Note is a note-taking app inspired by Google Keep, built with JavaScript, HTML, and CSS. It allows you to nest notes within notes and customize backgrounds and colors. It uses Firebase and Google Cloud for backend services and future updates will add more features.</p>

        <h2>Mini ML</h2>
        <p>Mini ML is a machine learning platform built with Flutter, Dart, Python, Flask, and hosted on Firebase and Google Cloud App Engine. It offers simple tools for training regression and classification models, with plans to include image processing and object recognition.</p>

        <h2>kendricklawton.com</h2>
        <p>My personal portfolio created with Next.js, featuring my web development projects and technical insights.</p>
      </Element>
    </>
  );
};