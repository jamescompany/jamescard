import React, { useState } from 'react';
import styles from './BusinessCardPage.module.css';
import ProfileSection from '../components/ProfileSection';
import LinkCard from '../components/LinkCard';
import ContactInfo from '../components/ContactInfo';

const BusinessCardPage: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>('');

  const handleCopyKakaoId = () => {
    navigator.clipboard.writeText('jamescompanykr');
    setCopiedText('카카오톡 ID가 복사되었습니다!');
    setTimeout(() => setCopiedText(''), 2000);
  };

  const handleCopyLineId = () => {
    navigator.clipboard.writeText('jamescompanykr');
    setCopiedText('LINE ID가 복사되었습니다!');
    setTimeout(() => setCopiedText(''), 2000);
  };

  const links = [
    {
      id: 'website',
      title: 'JamesCompany',
      subtitle: 'QA 자동화 솔루션',
      url: 'https://jamescompany.kr',
      icon: '🌐',
      color: '#4A90E2'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: '프로페셔널 네트워크',
      url: 'https://www.linkedin.com/in/babblingjames/',
      icon: '💼',
      color: '#0077B5'
    },
    {
      id: 'remember',
      title: '리멤버',
      subtitle: '비즈니스 명함',
      url: 'https://link.rmbr.in/069d9h',
      icon: '📇',
      color: '#00C471'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <ProfileSection />
        
        <div className={styles.divider} />
        
        <div className={styles.linksSection}>
          {links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </div>

        <div className={styles.divider} />

        <ContactInfo 
          onCopyKakaoId={handleCopyKakaoId}
          onCopyLineId={handleCopyLineId}
        />

        {copiedText && (
          <div className={styles.toast}>
            {copiedText}
          </div>
        )}
      </div>

      <footer className={styles.footer}>
        <p>© 2025 JamesCompany. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BusinessCardPage;
