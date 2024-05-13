// import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

import React from 'react'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftSide}>
                <a href="/">Code  Blog</a>
            </div>
            <div className={styles.rightSide}>
                <a href="/signup">Signup</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    )
}

export default Navbar