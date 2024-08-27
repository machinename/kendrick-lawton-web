'use client'
import { AccountCircleOutlined, ChatBubbleOutline, ChatOutlined, ChatRounded, Close, ContactMail, ContactMailOutlined, ContactPage, ContactSupportOutlined, DarkMode, Dashboard, GitHub, LightMode, LightModeTwoTone, LinkedIn, MailRounded, Menu, Search, Settings } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Link as ScrollLink, Element } from 'react-scroll';
import React, { useEffect, useState, useRef } from 'react';
import styles from "./navbar.module.css";

export function Navbar() {
  const [isLinkMenuOpen, setIsLinkMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleLinkMenu = () => {
    setIsLinkMenuOpen(!isLinkMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsLinkMenuOpen(false);
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
    <>
         <nav className={isScrolled ? styles.navBarScrolled : styles.navBar}>
        {/* Nav Leading Desktop */}
        <div className={styles.navBarLeadingDesktop}>
          <ScrollLink className={styles.navLink} to="/" smooth={true} >Home</ScrollLink>
          <ScrollLink className={styles.navLink} to="/experience" smooth={true}>Experience</ScrollLink>
          <ScrollLink className={styles.navLink} to="/projects" smooth={true}>Projects</ScrollLink>
        </div>
        {/* Nav Leading Mobile */}
        <div className={styles.navBarLeadingMobile}>
          <IconButton onClick={toggleLinkMenu}>
            {isLinkMenuOpen ? <Close /> : <Menu />}
          </IconButton>
          {/* <div>
            <p>{linkTitle}</p>
          </div> */}
        </div>

        {/* Nav Trailing*/}
        <div className={styles.navBarTrailing}>
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
      </nav>
      {isLinkMenuOpen && (
        <div  ref={menuRef} className={styles.menuContainer}>
          <ScrollLink className={styles.navLink} to="/" smooth={true}>Home</ScrollLink>
          <ScrollLink className={styles.navLink} to="/experience" smooth={true} >Experience</ScrollLink>
          <ScrollLink className={styles.navLink} to="/projects" smooth={true}>Projects</ScrollLink>
        </div>
      )}
    </>
  );
}