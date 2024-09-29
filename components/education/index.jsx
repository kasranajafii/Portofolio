"use client";
import React from "react";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const education = {
    title: "MY Education",
    description: "",
    items: [
        {
            institution: "Mosh Hamedani ",
            degree: "Html,Css,JavaScript",
            duration: "2022",
        },
        {
            institution: "botostart ",
            degree: "React, Next",
            duration: "2022-2023",
        },
    ],
};
const Education = () => {
    return (
        <ParallaxProvider>
            <motion.div
                id="Education"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="py-24 "
            >
                <Tabs defaultValue="education">
                    <TabsContent value="education" className="w-full h-full">
                        <div className="flex flex-col gap-4 text-center xl:text-left container">
                            <h3 className="text-4xl font-bold">
                                {education.title}
                            </h3>
                            <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                            </p>
                            <ScrollArea>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {education.items.map((item, i) => {
                                        return (
                                            <Parallax
                                                speed={3}
                                                scale={[1, 1]}
                                                opacity={[0, 2]}
                                                easing="easeInOutQuad"
                                                className=""
                                                key={i}
                                            >
                                                <li className="bg-[#232329] h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            </Parallax>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                </Tabs>
            </motion.div>
        </ParallaxProvider>
    );
};

export default Education;
