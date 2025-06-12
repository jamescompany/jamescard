import React from 'react';
import styles from './ContactInfo.module.css';

interface ContactInfoProps {
  onCopyKakaoId: () => void;
  onCopyLineId: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ onCopyKakaoId, onCopyLineId }) => {
  return (
    <div className={styles.contactSection}>
      <h3 className={styles.sectionTitle}>Contact</h3>
      
      {/* 전화번호 */}
      <div className={styles.contactItem}>
        <div className={styles.contactInfo}>
          <span className={styles.contactIcon}>📱</span>
          <div>
            <p className={styles.contactLabel}>Phone</p>
            <a href="tel:+821083276861" className={styles.contactValue}>
              +82 10-8327-6861
            </a>
          </div>
        </div>
      </div>

      {/* 이메일 */}
      <div className={styles.contactItem}>
        <div className={styles.contactInfo}>
          <span className={styles.contactIcon}>✉️</span>
          <div>
            <p className={styles.contactLabel}>Email</p>
            <a href="mailto:founder@jamescompany.kr" className={styles.contactValue}>
              founder@jamescompany.kr
            </a>
          </div>
        </div>
      </div>

      {/* 카카오톡 */}
      <div className={styles.kakaoSection}>
        <div className={styles.kakaoInfo}>
          <span className={styles.kakaoIcon}>💬</span>
          <div>
            <p className={styles.kakaoLabel}>KakaoTalk ID</p>
            <p className={styles.kakaoId}>jamescompanykr</p>
          </div>
        </div>
        <button onClick={onCopyKakaoId} className={styles.copyButton}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2"/>
          </svg>
          복사
        </button>
      </div>

      {/* LINE */}
      <div className={styles.lineSection}>
        <div className={styles.lineInfo}>
          <span className={styles.lineIcon}>💚</span>
          <div>
            <p className={styles.lineLabel}>LINE ID</p>
            <p className={styles.lineId}>jamescompanykr</p>
          </div>
        </div>
        <button onClick={onCopyLineId} className={styles.copyButton}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2"/>
          </svg>
          복사
        </button>
      </div>
      
      <p className={styles.hint}>
        ID를 복사하여 카카오톡 또는 LINE에서 검색해주세요
      </p>
    </div>
  );
};

export default ContactInfo;
