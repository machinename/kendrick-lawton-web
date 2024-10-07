"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { Close, GitHub, LinkedIn, MailRounded, MenuOpen } from '@mui/icons-material';

import styles from "./Header.module.css";

export default function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const navMenuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setIsNavMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? styles.headerScrolled : styles.header}>
      {/* Nav Leading */}
      <div className={styles.headerLeading}>
        <div className={styles.navMobile}>
          <IconButton onClick={toggleNavMenu}>
            {isNavMenuOpen ? <Close /> : <MenuOpen />}
          </IconButton>
          {isNavMenuOpen && (
            <nav className={styles.menu} ref={navMenuRef}>
              <ScrollLink className={styles.navLink} to="/" smooth={true}>Home</ScrollLink>
              <ScrollLink className={styles.navLink} to="/experience" smooth={true} >Experience</ScrollLink>
              <ScrollLink className={styles.navLink} to="/projects" smooth={true}>Projects</ScrollLink>
            </nav>
          )}
        </div>
        <div className={styles.navDesktop}>
          <ScrollLink className={styles.navLink} to="/" smooth={true}>Home</ScrollLink>
          <ScrollLink className={styles.navLink} to="/experience" smooth={true} >Experience</ScrollLink>
          <ScrollLink className={styles.navLink} to="/projects" smooth={true}>Projects</ScrollLink>
        </div>
      </div>
      {/* Nav Trailing */}
      <div className={styles.headerTrailing}>
        <Link href='https://github.com/machinename' target="_blank" rel="noopener noreferrer">
          <IconButton>
            <GitHub />
          </IconButton>
        </Link>
        <Link href='https://github.com/machinename' target="_blank" rel="noopener noreferrer">
          <IconButton>
            <LinkedIn />
          </IconButton>
        </Link>
        <IconButton>
          <MailRounded />
        </IconButton>
      </div>
    </header>
  );
}