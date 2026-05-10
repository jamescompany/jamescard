import React from 'react';
import styles from './PortfolioPage.module.css';
import Portfolio, { Project } from '../components/Portfolio';

const BASE = import.meta.env.BASE_URL;
const asset = (path: string) => `${BASE}${path.replace(/^\//, '')}`;

const PortfolioPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'releasegate',
      title: 'ReleaseGate',
      description: '소프트웨어 릴리즈 준비 상태를 AI로 평가하는 SaaS. 0–100점 Release Confidence Score와 GO / HOLD 판단, AI 테스트 케이스, PDF 리포트 제공.',
      status: 'live',
      url: 'https://releasegate.app',
      imageUrl: asset('projects/releasegate.png'),
      tags: ['SaaS', 'AI', 'FastAPI', 'React'],
      year: '2026',
      role: 'Founder'
    },
    {
      id: 'james-company',
      title: 'James Company',
      description: 'QA 생태계 발전에 기여하는 All-In-One QA 커뮤니티 플랫폼. 공익 활동으로 전환 후 일시 정지 상태.',
      status: 'archived',
      imageUrl: asset('projects/james-company.png'),
      tags: ['QA', 'Community', 'Platform'],
      year: '2024',
      role: 'Founder'
    },
    {
      id: 'easy-trend-explainer',
      title: 'Easy Trend Explainer',
      description: '오늘의 트렌드 키워드를 AI가 4개 카테고리로 쉽게 풀어주는 서비스. 매일 자동 생성, 북마크·읽기 기록 지원.',
      status: 'live',
      url: 'https://easy-trend-explainer.vercel.app',
      imageUrl: asset('projects/easy-trend-explainer.png'),
      tags: ['AI', 'Next.js', 'Vercel KV'],
      year: '2026'
    },
    {
      id: 'qa-learning-101',
      title: 'QA Learning 101',
      description: 'QA 전문가를 위한 대화형 학습 플랫폼. 테스팅 방법론·자동화 도구·모범 사례를 실습으로 익히는 플레이그라운드 제공.',
      status: 'live',
      imageUrl: asset('projects/qa-learning-101.png'),
      tags: ['QA', 'Education', 'Playwright', 'Cypress'],
      year: '2026'
    },
    {
      id: '119-challenge',
      title: '119 Challenge',
      description: '"11.900초에 정확히 멈추기" 타이밍 감각 게임. 실시간 랭킹·포디움·기록 알림. SKKU EMBA 이벤트용 MVP.',
      status: 'live',
      imageUrl: asset('projects/119-challenge.png'),
      tags: ['React', 'FastAPI', 'Render'],
      year: '2026'
    },
    {
      id: 'carelog',
      title: 'CareLog',
      description: '병원 환자의 I/O(섭취·배설)를 기록·관리하는 시스템. Next.js 웹 + Expo 모바일 앱 + Cloudflare Workers 풀스택.',
      status: 'archived',
      imageUrl: asset('projects/carelog.png'),
      tags: ['Next.js', 'Expo', 'Prisma'],
      year: '2026'
    },
    {
      id: 'skku-emba-typhoon',
      title: 'EMBA Typhoon',
      description: '대학원 골프 동호회 운영 시스템. 197개 골프장 DB 기반 라이브 스코어링, 결제 워크플로우, 멤버 관리.',
      status: 'internal',
      imageUrl: asset('projects/emba-typhoon.png'),
      tags: ['Next.js', 'Express', 'Prisma'],
      year: '2026'
    },
    {
      id: 'skku-cohort-connect',
      title: 'Cohort Connect',
      description: '대학원 동기 네트워킹 설문 앱. 학교 도메인 제한 OAuth, RLS 기반 보안, 운영자 대시보드.',
      status: 'internal',
      imageUrl: asset('projects/cohort-connect.png'),
      tags: ['Next.js', 'Supabase', 'Cloudflare'],
      year: '2026'
    },
    {
      id: 'classvault',
      title: 'ClassVault',
      description: '동기들과 강의 자료를 공유하는 아카이브. 액세스 코드 기반 세션 인증, 회칙 버전 관리, 운영자 업로드 플로우.',
      status: 'internal',
      tags: ['Vite', 'Supabase'],
      year: '2026'
    },
    {
      id: 'gyroball-rpm',
      title: 'Gyroball RPM',
      description: '자이로볼의 RPM을 카메라/오디오 주파수 분석으로 실시간 측정하는 안드로이드 앱. 4-환경 모노레포 + Kotlin 네이티브 모듈.',
      status: 'internal',
      imageUrl: asset('projects/gyroball-rpm.png'),
      tags: ['React Native', 'Kotlin', 'Monorepo'],
      year: '2026'
    }
  ];

  const expertise = [
    {
      title: 'Product Strategy',
      description: '문제 정의부터 우선순위, 로드맵까지. 비즈니스 임팩트와 사용자 가치 사이의 결을 맞춥니다.'
    },
    {
      title: 'Execution',
      description: '전략을 출시 가능한 형태로. 기획·QA·엔지니어링을 잇는 실행 루프를 설계하고 운영합니다.'
    },
    {
      title: 'AI Workflow',
      description: 'LLM과 에이전트로 일하는 새로운 방식. 팀의 일상 업무에 AI를 자연스럽게 녹여냅니다.'
    }
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.page} data-scroll-container>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <div className={styles.heroInner}>
          <div className={styles.logoWrap}>
            <img src={asset('hongjae_logo.svg')} alt="Hongjae Kang" className={styles.logoImage} />
          </div>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Independent Product Consultant</p>
            <h1 className={styles.heroName}>Hongjae Kang<span className={styles.heroNameKr}>강홍재</span></h1>
            <p className={styles.heroIntro}>
              Product Strategy · Execution · AI Workflow.<br />
              제품의 방향을 잡고, 출시까지 가는 길을 함께 만듭니다.
            </p>
            <div className={styles.heroCtas}>
              <button onClick={() => scrollTo('works')} className={`${styles.cta} ${styles.ctaPrimary}`}>
                Works 보기
              </button>
              <button onClick={() => scrollTo('contact')} className={`${styles.cta} ${styles.ctaGhost}`}>
                연락하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>About</span>
            <h2 className={styles.sectionTitle}>What I do</h2>
          </header>
          <div className={styles.expertiseGrid}>
            {expertise.map((item, index) => (
              <div key={item.title} className={styles.expertiseCard}>
                <span className={styles.expertiseNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.expertiseTitle}>{item.title}</h3>
                <p className={styles.expertiseDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className={`${styles.section} ${styles.worksSection}`}>
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Works</span>
            <h2 className={styles.sectionTitle}>Selected Projects</h2>
          </header>
          <Portfolio projects={projects} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Contact</span>
            <h2 className={styles.sectionTitle}>같이 일하기</h2>
          </header>
          <div className={styles.contactRow}>
            <a href="mailto:iam@hongjae.co" className={styles.contactCard}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>iam@hongjae.co</span>
            </a>
            <a href="tel:+821084876861" className={styles.contactCard}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <span className={styles.contactLabel}>Phone</span>
              <span className={styles.contactValue}>+82-10-8487-6861</span>
            </a>
            <a href="https://hongjae.co" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
              </span>
              <span className={styles.contactLabel}>Website</span>
              <span className={styles.contactValue}>hongjae.co</span>
            </a>
            <a href="https://www.linkedin.com/in/babblingjames/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v7" />
                  <path d="M8 7.01v.01" />
                  <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
                  <path d="M12 13v4" />
                </svg>
              </span>
              <span className={styles.contactLabel}>LinkedIn</span>
              <span className={styles.contactValue}>babblingjames</span>
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Hongjae Kang. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
