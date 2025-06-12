import React from 'react';
import styles from './ProfileSection.module.css';

const ProfileSection: React.FC = () => {
  return (
    <div className={styles.profileSection}>
      <div className={styles.avatar}>
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQEvHcGqL3kRTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719294352940?e=1755129600&v=beta&t=hSQ6QjSmvqMLZKj8KG83nleRXwKF-O3Or_etxK_Xin8" 
          alt="James Kang"
          className={styles.avatarImage}
        />
      </div>
      <h1 className={styles.name}>James Company</h1>
      <h2 className={styles.realName}>강홍재 (Hongjae James, Kang)</h2>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Founder</p>
        <p className={styles.title}>QA Engineer & SDET</p>
        <p className={styles.title}>Author</p>
      </div>
      <p className={styles.description}>
        QA Expert | Vibe Coder
      </p>
      <div className={styles.tags}>
        <span className={styles.tag}>Founder</span>
        <span className={styles.tag}>Author</span>
        <span className={styles.tag}>Coder</span>
      </div>
    </div>
  );
};

export default ProfileSection;
