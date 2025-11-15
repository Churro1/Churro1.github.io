import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import '../styles/work.css';
import placeholder from '../assets/project-placeholder.svg';
import Navigation from '../components/Navigation.jsx';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A short summary of Project One — tech used, goal, and outcome.',
    thumbnail: placeholder,
    link: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Brief description of Project Two, with highlights and link.',
    thumbnail: placeholder,
    link: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Short blurb about Project Three and notable details.',
    thumbnail: placeholder,
    link: '#'
  }
];

function WorkPage() {
  return (
    <main className="work-page">
        <Navigation />
      <section className="work-intro">
        <h1>Work</h1>
        <p className="lead">Selected projects — click any card for details or external links.</p>
      </section>

      <section className="projects-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            thumbnail={p.thumbnail}
            link={p.link}
          />
        ))}
      </section>
    </main>
  );
}

export default WorkPage;
