"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiExpress } from "react-icons/si";

//interfaces
interface InfoType {
  fieldName: string;
  fieldValue: string;
}

interface AboutType {
  title: string;
  description: string;
  info: InfoType[];
}

interface ExpirienceType {
  icon: string;
  title: string;
  description: string;
  items: ExpirienceItem[];
}

interface ExpirienceItem {
  company?: string;
  position?: string;
  institution?: string;
  degre?: string;
  duration: string;
}

interface Skill {
  icon: ReactNode;
  name: string;
}

interface Skills {
  title: string;
  description: string;
  skillList: Skill[];
}

const about: AboutType = {
  title: "Обо мне",
  description:
    "Это описание обо мне и моих достижения в области программирования",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Василий Русанов",
    },
    {
      fieldName: "Phone",
      fieldValue: "+7 (961) 482-14-34",
    },
    {
      fieldName: "Expirience",
      fieldValue: "3 года",
    },
    {
      fieldName: "Национальность",
      fieldValue: "Русский",
    },
    {
      fieldName: "Email",
      fieldValue: "rvk1986@mail.ru",
    },
    {
      fieldName: "Telegram",
      fieldValue: "@rvk1986",
    },
    {
      fieldName: "Занятось",
      fieldValue: "Доступен",
    },
    {
      fieldName: "Языки",
      fieldValue: "Русский, Английский (B1)",
    },
  ],
};

const expirience: ExpirienceType = {
  icon: "/assets/resume/badge.svg",
  title: "Мой опыт",
  description:
    "Это описание обо мне и моих достижения в области программирования",
  items: [
    {
      company: "ООО Полипак",
      position: "Frontend developer",
      duration: "Feb 2023 - Dec 2023",
    },
    {
      company: "Freelance",
      position: "FullStack developer",
      duration: "2022 - по настоящее время",
    },
  ],
};

const education: ExpirienceType = {
  icon: "/assets/resume/cap.svg",
  title: "Образование",
  description: "Это описание про мое образование",
  items: [
    {
      institution: "Курс Javacript от Glo-Acadamy",
      degre: "Frontend developer",
      duration: "2021",
    },
    {
      institution: "Курс React от Glo-Acadamy",
      degre: "Frontend developer",
      duration: "2021",
    },
    {
      institution: "СевКавГТУ",
      degre: "Информатик экономист",
      duration: "2006 - 2009 гг.",
    },
  ],
};

const skills: Skills = {
  title: "Мои навыки",
  description: "Описание про моии навыки в области программирования",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ReactNode } from "react";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="Опыт">Опыт</TabsTrigger>
            <TabsTrigger value="Образование">Образование</TabsTrigger>
            <TabsTrigger value="Навыки">Навыки</TabsTrigger>
            <TabsTrigger value="Обо мне">Обо мне</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="Опыт" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expirience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {expirience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {expirience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] px-10 py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="Образование" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] px-10 py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degre}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="Навыки" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              {skill.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="Обо мне"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
