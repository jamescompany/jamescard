import React, { useEffect } from 'react';
import styles from './ProjectModal.module.css';
import type { Project } from './Portfolio';

interface ProjectModalProps {
  project: Project;
  statusLabel: string;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, statusLabel, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);

    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement | null;
    const previousOverflow = scrollContainer?.style.overflow ?? '';
    if (scrollContainer) scrollContainer.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handler);
      if (scrollContainer) scrollContainer.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : project.imageUrl
      ? [project.imageUrl]
      : [];

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={`${styles.badge} ${styles[`badge_${project.status}`]}`}>
              {statusLabel}
            </span>
            {project.year && <span className={styles.metaItem}>{project.year}</span>}
            {project.role && <span className={styles.metaItem}>{project.role}</span>}
          </div>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>
          {project.tags && project.tags.length > 0 && (
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {screenshots.length > 0 && (
          <div className={styles.gallery}>
            {screenshots.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} screenshot ${index + 1}`}
                className={styles.galleryImage}
                loading="lazy"
              />
            ))}
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Features</h3>
            <ul className={styles.featureList}>
              {project.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.readme && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>About</h3>
            <div className={styles.readme}>{project.readme}</div>
          </section>
        )}

        {project.status === 'live' && project.url && (
          <footer className={styles.footer}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitButton}
            >
              Visit Site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </a>
          </footer>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
