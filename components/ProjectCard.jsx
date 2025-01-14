import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const validUrls = [
  '/home',
  '/about',
  '/contact',
  '/projects',
  // Add other valid relative URLs here
];

const isValidUrl = (url) => {
  try {
    const parsedUrl = new URL(url, window.location.origin);
    return validUrls.includes(parsedUrl.pathname) || url.startsWith('https://');
  } catch (e) {
    return false;
  }
};

const sanitizeString = (str) => {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

const ProjectCard = ({ project }) => {
  if (!project) {
    return null;
  }

  const sanitizedCategory = sanitizeString(project.category || '');
  const sanitizedTitle = sanitizeString(project.title || '');
  const sanitizedDescription = sanitizeString(project.description || '');
  const sanitizedImage = sanitizeString(project.image || '');

  return (
    <Card>
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_bg_dark xl:bg-[110%] group">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={sanitizedImage}
            width={247}
            height={155}
            alt=""
            priority
          />
          {/* Link Buttons */}
          <div className="flex gap-x-4">
            {isValidUrl(project.link) && (
              <Link
                href={project.link}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link2Icon className="text-black" />
              </Link>
            )}
            {isValidUrl(project.github) && project.github !== '/' && (
              <Link
                href={project.github}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="flex space-x-2 mb-2">
          <Badge className="uppercase text-sm font-medium">
            {sanitizedCategory}
          </Badge>
        </div>
        <h4 className="h4 mb-1">{sanitizedTitle}</h4>
        <p className="text-muted-foreground text-lg">{sanitizedDescription}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
