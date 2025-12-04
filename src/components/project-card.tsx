import type { GithubProject } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Star } from "lucide-react";
import Link from 'next/link';

interface ProjectCardProps {
  project: GithubProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-accent/20 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {project.language && (
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{project.language}</Badge>
          </div>
        )}
        <div className="flex items-center text-sm text-muted-foreground">
          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
          <span>{project.stargazers_count} stars</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
