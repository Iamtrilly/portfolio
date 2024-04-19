"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/ziara.png",
    title: "Ziara Travel",
    category: "react js",
    description:
      "Travel app that links travelers to the best sites in the world.",
    link: "https://ziara.netlify.app",
    github: "https://github.com/Iamtrilly/travel_app",
  },
  {
    image: "/work/tt.png",
    title: "Teamtrill Media",
    category: "HTML, CSS, Javascript",
    description:
      "A website for a small media company showcasing their work and services.",
    link: "https://teamtrillmedia.netlify.app/",
    github: "https://github.com/Iamtrilly/Teamtrill",
  },
  {
    image: "/work/ziara.png",
    title: "Rick Drivers",
    category: "WordPress",
    description:
      "Car hire and chauffeur services website. Built using Wordpress as CMS.",
    link: "https://rickdrivers.com/",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // If category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
