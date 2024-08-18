import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size="30" />,
    text: "Charles Misheto",
  },
  {
    icon: <PhoneCall size="30" />,
    text: "+254 7** *****9",
  },
  {
    icon: <MailIcon size="30" />,
    text: "*********@gmail.com",
  },
  {
    icon: <Calendar size="30" />,
    text: "Born '98",
  },
  {
    icon: <HomeIcon size="30" />,
    text: "Nairobi, Kenya",
  },
];

const qualificationData = [
  {
    title: "experience",
    data: [
      {
        company: "Digital Divide Data (DDD)",
        role: "HTML Developer",
        years: "2020 - 2021",
      },
      {
        company: "DeAlcatriaz Ent.",
        role: "IT and Network Specialist",
        years: "2021 - 2022",
      },
      {
        company: "Freelance Developer",
        role: "Front-End Web Development",
        years: "2023 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML & CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React",
      },
      {
        name: "Nextjs",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "GitHub",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
    ],
  },
];

const hobbiesData = [
  {
    title: "other",
    data: [
      {
        name: "Photographer",
      },
      {
        name: "Filmmaker",
      },
      {
        name: "Editor",
      },
      {
        name: "Cybersecurity",
      },
      {
        name: "Content creator",
      },
      {
        name: "Biker",
      },
      {
        name: "Avid reader",
      },
      {
        name: "Gamer",
      },
      {
        name: "Films",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <Image
              src={"/about/memoji.png"}
              width={568}
              height={568}
              alt=""
              priority
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[528px]">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info.
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                
                <TabsTrigger className="w-[162px] xl:w-auto" value="other skills">
                  Other skills
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 3 Years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Kiswahili</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* Experience & Education Wrapper */}
                    <div>
                      {/* Experience */}
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "experience").title}
                        </h4>
                      </div>
                      {/* List */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "experience").data.map(
                          (item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5ps] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">
                        Frontend Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills List */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border "></div>
                      {/* Tool List */}
                      <div className="flex mt-4 gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Other Skills */}
                <TabsContent value="other skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Hobbies & Other Skills</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">
                        What I do in the shadows
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills List */}
                      <div>
                        {getData(hobbiesData, "other").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
