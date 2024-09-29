"use client";
import React from "react";
import Photo from "@/components/heroSection/Photo";
import Social from "@/components/heroSection/Social";
import { Button } from "@/components/ui/button";
import { LuFileDown } from "react-icons/lu";

const HeroSection = () => {
    return (
        <section className="h-full">
            <div id="Home" className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
                    <div className="text-center xl:text-left  order-2  xl:order-none">
                        <span className="text-xl">Developer</span>
                        <h1 className="h1 mb-6">
                            {`Hello I'm`} <br />
                            <span className="text-accent">Kasra Najafi</span>
                        </h1>
                        <p className="max-w-[500px] mb-9  text-white/88">
                            Motivated developer with strong HTML, CSS, and JS
                            skills, including React. Eager to apply technical
                            expertise to deliver value, enhance user
                            experiences, and tackle new challenges in future
                            projects.
                        </p>
                        <div className="mb-8 xl:mb-0 flex flex-col xl:flex-row items-center gap-8">
                            <Social />
                        </div>
                    </div>
                    <div className=" mb-8 xl:mb-0 order-1 xl:order-none">
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
