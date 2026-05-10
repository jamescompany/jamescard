import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import ProjectModal from './ProjectModal';

export type ProjectStatus = 'live' | 'archived' | 'internal';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  url?: string;
  imageUrl?: string;
  screenshots?: string[];
  features?: string[];
  readme?: string;
  tags?: string[];
  year?: string;
  role?: string;
}

interface PortfolioProps {
  projects: Project[];
}

const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  archived: 'Archived',
  internal: 'Internal'
};

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [selected, setSelected] = useState<Project | null>(null);

  if (projects.length === 0) {
    return (
      <div className={styles.portfolioSection}>
        <p className={styles.empty}>곧 공개될 프로젝트들을 준비 중입니다.</p>
      </div>
    );
  }

  return (
    <div className={styles.portfolioSection}>
      <div className={styles.grid}>
        {projects.map((project) => {
          const cardClass = [
            styles.card,
            project.status === 'archived' ? styles.cardArchived : '',
            project.status === 'internal' ? styles.cardInternal : ''
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              className={cardClass}
            >
              <div className={styles.previewWrapper}>
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={styles.previewImage}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span>{project.title.charAt(0)}</span>
                  </div>
                )}
                <div className={styles.previewOverlay} />
                <span className={`${styles.badge} ${styles[`badge_${project.status}`]}`}>
                  {statusLabel[project.status]}
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  {project.year && <span>{project.year}</span>}
                  {project.role && project.year && <span className={styles.metaDot}>·</span>}
                  {project.role && <span>{project.role}</span>}
                </div>
                <h4 className={styles.cardTitle}>{project.title}</h4>
                <p className={styles.cardDescription}>{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          statusLabel={statusLabel[selected.status]}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
