import React from 'react';

function ProjectCard({ title, description, thumbnail, link }) {
  const isExternal = link && (link.startsWith('http://') || link.startsWith('https://'));

  const content = (
    <div className="project-card-inner">
      <img src={thumbnail} alt={`${title} thumbnail`} loading="lazy" className="thumbnail" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );

  if (!link) return <div className="project-card">{content}</div>;

  return (
    <a
      className="project-card"
      href={link}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  );
}

export default ProjectCard;
