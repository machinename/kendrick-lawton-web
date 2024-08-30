'use client'
import { Paper } from '@mui/material';
import { Element } from 'react-scroll';
import Link from 'next/link';
import styles from './page.module.css'
import { ModelTraining, ModelTrainingOutlined, ModelTrainingTwoTone } from '@mui/icons-material';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <Element className={styles.elementHome} name="/">
        <h1>
          Hello, I&rsquo;m Kendrick Lawton &#128075;
        </h1>
        <p>
          I&rsquo;m deeply passionate about software and hold a degree in Software Engineering. Coding is not
          just part of my job but a significant part of my life. Alongside my work in test automation, where I utilize
          I&rsquo;m always engaged in personal projects that fuel my enthusiasm for technology and innovation.
        </p>
      </Element>
      <Element className={styles.elementExperience} name="/experience" >
        <h1>Experience</h1>
        <h2>Work</h2>
        <p>Clyde & Co - Test Automation Specialist, April 2023 - Present</p>
        <p>
          As a Test Automation Specialist at Clyde & Co LLP, I&rsquo;m deeply involved in the Software Development Life Cycle (SDLC) for our legal tech software.
          My focus is on creating and maintaining robust test automation frameworks to ensure the quality and reliability of our applications.
          I take pride in developing user stories that guide our development process and am actively engaged in reporting and fixing bugs to continuously enhance our software.
          A key highlight of my role has been leading the adoption of Playwright for .NET, which has significantly improved our testing capabilities for legal web technologies.
        </p>
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
        <p>A note-taking app inspired by Google Keep but with the ability to create notes within notes.</p>
        <p>Tech -
          <Link href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className={styles.textLink}><Image alt=''  />Firebase</Link>
          <Link href="https://cloud.google.com/appengine" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Google App Engine</Link>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className={styles.textLink}>JavaScript</Link>
          <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>MUI</Link>
          <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Next.js</Link>
          <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>React</Link>
          <Link href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Vercel</Link>
        </p>
        <h2>Mini ML</h2>
        <p>A machine learning platform offering simple tools for training regression and classification models.</p>
        <p>Tech -
          <Link href="https://dart.dev/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Dart</Link>
          <Link href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Flutter</Link>
          <Link href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Firebase</Link>
          <Link href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Flask</Link>
          <Link href="https://cloud.google.com/appengine" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Google App Engine</Link>
          <Link href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Python</Link>
        </p>
        <h2>kendricklawton.com</h2>
        <p>My personal portfolio created with Next.js, featuring my web development projects and technical insights.</p>
        <p>Tech -
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className={styles.textLink}>JavaScript</Link>
          <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>MUI</Link>
          <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Next.js</Link>
          <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>React</Link>
          <Link href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Vercel</Link>
        </p>
      </Element>
    </>
  );
};