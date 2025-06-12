import React from 'react';
import styles from './LinkCard.module.css';

interface LinkCardProps {
  title: string;
  subtitle: string;
  url: string;
  icon: string;
  color: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, subtitle, url, icon, color }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.linkCard}
      style={{ '--accent-color': color } as React.CSSProperties}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.arrow}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
};

export default LinkCard;
