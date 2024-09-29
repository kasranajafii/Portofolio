"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@radix-ui/react-tooltip";

const skills = {
    title: "MY Skills",
    description: "",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html 5 ",
        },
        {
            icon: <FaCss3 />,
            name: " Css 3",
        },
        {
            icon: <FaJs />,
            name: "Javascript ",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwindcss",
        },
    ],
};
const Skills = () => {
    return (
        <motion.div
            id="Skils"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            className="py-24"
        >
            <Tabs defaultValue="skills">
                <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-8 container">
                        <div className="flex flex-col  text-center xl:text-left">
                            <h3 className=" text-4xl font-bold">
                                {skills.title}
                            </h3>
                            <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {skills.description}
                            </p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3  gap-12  ">
                            {skills.skillList.map((skill, i) => {
                                return (
                                    <li key={i}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                        {skill.icon}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize  ">
                                                        {skill.name}
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </TabsContent>
            </Tabs>
        </motion.div>
    );
};

export default Skills;
