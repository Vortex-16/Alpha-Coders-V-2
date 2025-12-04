"use client";

import { useState, useMemo, useEffect } from 'react';
import type { GithubProject } from '@/types';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { FolderKanban, Star } from 'lucide-react';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/orgs/Alpha4Coders/repos?sort=updated&direction=desc');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error('Failed to fetch projects from GitHub');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    fetchProjects();
  }, []);

  const technologies = useMemo(() => {
    if (projects.length === 0) return ['All'];
    const allTechs = projects.map(p => p.language).filter(Boolean); // Filter out null/undefined languages
    return ['All', ...Array.from(new Set(allTechs as string[]))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(p => p.language === filter);
  }, [filter, projects]);

  return (
    <section>
      <div className="flex items-center gap-4 mb-4">
        <FolderKanban className="w-8 h-8 text-accent" />
        <h2 className="text-3xl font-bold tracking-tight">Community Projects</h2>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {technologies.map(tech => (
          <Button
            key={tech}
            variant={filter === tech ? 'default' : 'outline'}
            onClick={() => setFilter(tech)}
            size="sm"
            className={filter === tech ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}
          >
            {tech}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
