"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Projects = () => {
    useEffect(() => {
        AOS.init({ once: true });
        AOS.refreshHard();
    }, []);

    return (
        <>
            <motion.div
                id="Experience"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className=" py-24 flex flex-col gap-12"
            >
                <div
                    id="projects"
                    className="text-center xl:text-left container"
                >
                    <p className="text-4xl font-bold">My Projects</p>
                </div>

                <div className="w-full container grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:col-span-2 flex flex-col justify-center  items-center  relative">
                        <div className="px-16 pt-20 rounded-3xl w-full bg-[#232329] group relative  overflow-hidden">
                            <Link href={"/projectDetails/cafe-finder"}>
                                <Image
                                    src={"/assets/images/Project1.png"}
                                    className="rounded-tl-[16px] rounded-tr-[16px] rounded-br-[0px] rounded-bl-[0px] max-h-[520px] object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:z-10"
                                    alt="Cafe-finder project"
                                    priority
                                    width={1040}
                                    height={925}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <div className="w-full pt-8">
                            <div className=" flex flex-col items-center lg:items-start gap-4">
                                <div className="w-full flex justify-between items-center">
                                    <p
                                        data-aos="fade-down"
                                        data-aos-duration="750"
                                        data-aos-easing="ease-in-out"
                                        className="font-bold text-sm sm:text-2xl lg:text-lg text-accent flex gap-2"
                                    >
                                        <span className="text-white">
                                            Developed
                                        </span>{" "}
                                        Cafe-finder
                                    </p>
                                    <Link
                                        className="bg-accent  gap-3 text-primary hover:bg-accent-hover flex items-center justify-center rounded-full text-base font-semibold px-8 py-2 group"
                                        href={"/projectDetails/cafe-finder"}
                                    >
                                        See{" "}
                                        <span>
                                            <FaChevronRight className=" transform transition-transform group-hover:translate-x-2 duration-300" />
                                        </span>
                                    </Link>
                                </div>
                                <p className="text-white/60 text-center lg:text-left">
                                    This page integrates various UI/UX
                                    components that enhance user interaction and
                                    navigation efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center  items-center">
                        <div className="px-16 pt-20 rounded-3xl w-full bg-[#232329] group relative  overflow-hidden">
                            <Link href={"/projectDetails/default-panel"}>
                                <Image
                                    src={"/assets/images/Project1.png"}
                                    className="rounded-tl-[16px] rounded-tr-[16px] rounded-br-[0px] rounded-bl-[0px] object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:z-10"
                                    alt="Default-panel project"
                                    priority
                                    width={742}
                                    height={925}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-4 pt-8">
                            <div className="flex justify-between items-center w-full">
                                <p
                                    data-aos="fade-down"
                                    data-aos-duration="750"
                                    data-aos-easing="ease-in-out"
                                    className=" font-bold text-sm sm:text-2xl lg:text-lg text-accent flex gap-2"
                                >
                                    <span className="!text-white">
                                        Developed
                                    </span>{" "}
                                    Default-panel
                                </p>
                                <Link
                                    className="bg-accent  gap-3 text-primary hover:bg-accent-hover transform transition-transform  flex items-center justify-center rounded-full text-base font-semibold px-8 py-2 group"
                                    href={"/projectDetails/default-panel"}
                                >
                                    See{" "}
                                    <span>
                                        <FaChevronRight className=" transform transition-transform group-hover:translate-x-2 duration-300" />
                                    </span>
                                </Link>
                            </div>
                            <p className="text-white/60 text-center lg:text-left">
                                This page is developed with TypeScript,
                                providing strong type-checking and enhanced
                                development efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center  items-center">
                        <div className="px-16 pt-20 rounded-3xl w-full bg-[#232329] group relative  overflow-hidden">
                            <Link href={"/projectDetails/weather-forecast"}>
                                <Image
                                    src={"/assets/images/Project1.png"}
                                    className="rounded-tl-[16px] rounded-tr-[16px] rounded-br-[0px] rounded-bl-[0px] object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:z-10"
                                    alt="Weather-forecast project"
                                    priority
                                    width={742}
                                    height={925}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-4 pt-8">
                            <div className="flex justify-between items-center w-full">
                                <p
                                    data-aos="fade-down"
                                    data-aos-duration="750"
                                    data-aos-easing="ease-in-out"
                                    className=" !font-bold text-sm !sm:text-2xl lg:text-lg text-accent flex gap-2"
                                >
                                    <span className="!text-white">
                                        Developed
                                    </span>{" "}
                                    Weather-forecast
                                </p>
                                <Link
                                    className="bg-accent  gap-3 text-primary hover:bg-accent-hover flex items-center justify-center rounded-full text-base font-semibold px-8 py-2 group"
                                    href={"/projectDetails/weather-forecast"}
                                >
                                    See{" "}
                                    <span>
                                        <FaChevronRight className=" transform transition-transform group-hover:translate-x-2 duration-300" />
                                    </span>
                                </Link>
                            </div>
                            <p className="text-white/60 text-center lg:text-left">
                                {`The page utilizes React's component-based
                                architecture, allowing for reusable UI
                                components.`}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;
