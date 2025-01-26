export interface CardProps {
  title: string;
  description: string;
  tech: string[];
  githubLink?: string | any;
  externalLink?: string | any;
}

export interface SocialProps {
  icon: React.ComponentType;
  url: string;
}
