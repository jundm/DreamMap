import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import HeaderAside from "@component/sidebar/HeaderAside";

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <HeaderAside/>
            <ul>
                <li>
                    <Link href="/matory1">
                        마토리1
                    </Link>
                </li>
                <li>
                    <Link href="/matory2">
                        마토리2
                    </Link>
                </li>
                <li>
                    <Link href="/matory3">
                        미토리3
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
