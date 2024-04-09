"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";
 
const projectData = [
  {
    image: "/work/ziara.png",
    title: "Ziara Travel",
    category: "react js",
    description:'Travel app that links travelers to the best sites in the world.',
    link: "https://ziara.netlify.app",
    github: "https://github.com/Iamtrilly/travel_app",
  },
  {
    image: "/work/tt.png",
    title: "Teamtrill Media",
    category: "HTML, CSS, Javascript",
    description:"A website for a small media company showcasing their work and services.",
    link: "https://teamtrillmedia.netlify.app/",
    github: "https://github.com/Iamtrilly/Teamtrill",
  },
  {
    image: "/work/ziara.png",
    title: "Rick Drivers",
    category: "WordPress",
    description:"Car hire and chauffeur services website. Built using Wordpress as CMS.",
    link: "https://rickdrivers.com/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-enter xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Here are some of my latest projects.</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={{ Pagination }}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 3 projects in the slider */}
            {projectData.slice(0, 3).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
