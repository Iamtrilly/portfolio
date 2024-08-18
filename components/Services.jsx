import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design & Development",
    description:
      "User friendly and mobile responsive webpages built with the latest design trends.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Internet & Network Specialist",
    description:
      "Installing and configuring network systems. Home and business internet installation.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Digital Creator",
    description:
      "Bring your projects to life with stunning photos and videos, professionally shot and edited.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* Grid Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, idex) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={idex}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className="w-[140px] h-[80px]  bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
