import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer & Creator
            </div>
            <h1 className="h1 mb-4">H! I'm Mishy 😀</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              A creator and developer blending tech and visual storytelling to inspire and connect.
              My goal? To build digital experiences that feel personal, simple, and effective.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[10rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={4}
              BadgeText="Years Of Experience"
            />
            {/* Badge 2 */}
            {/*<Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              BadgeText="Years Of Experience"
            /> */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/developer.png"
              />
            </div>
          </div>
        </div>
        {/* Icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
