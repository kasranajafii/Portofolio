"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CafeFinderDetail = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <motion.div
                id="Experience"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 0.4, ease: "easeIn" },
                }}
                className="w-full container"
            >
                <div className="w-full px-16 pt-20 rounded-3xl gap-5 grid grid-cols-2  bg-[#232329] container">
                    <div className="col-span-1 ">
                        <Image
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="200"
                            src={"/assets/images/Project1.png"}
                            className="rounded-tl-[16px] rounded-tr-[16px] rounded-br-[0px] rounded-bl-[0px] "
                            alt="Weather-forecast project"
                            priority
                            width={742}
                            height={925}
                        />
                    </div>
                    <div className="col-span-1 ">
                        <Image
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="200"
                            src={"/assets/images/Project1.png"}
                            className="rounded-tl-[16px] rounded-tr-[16px] rounded-br-[0px] rounded-bl-[0px] "
                            alt="Weather-forecast project"
                            priority
                            width={742}
                            height={925}
                        />
                    </div>
                </div>
                <div className="w-full flex items-center  flex-col gap-4 sm:flex-row justify-between  py-8 ">
                    <p className="font-bold lg:text-3xl md:text-2xl text-xl  text-accent flex gap-2 ">
                        <span className="text-white">Developed</span>{" "}
                        Cafe-finder
                    </p>
                    <Link
                        target="_blank"
                        className="w-full  bg-accent text-primary hover:bg-accent-hover  flex items-center gap-2 justify-center  sm:w-auto rounded-full text-lg font-semibold  px-8 py-2"
                        href="https://github.com/reza-h-farhang/cafe-finder"
                    >
                        GitHub
                        <span>
                            <FaChevronRight />
                        </span>
                    </Link>
                </div>
                <div className=" flex flex-col gap-3 pl-0 pb-8 max-w-[980px]">
                    <p className="text-xl font-bold">Project Purpose:</p>
                    <p className="text-white/80">
                        The website is designed to ensure a fast and efficient
                        user experience, even when handling large datasets such
                        as product listings.
                    </p>
                </div>
                <div className="max-w-[660px] flex flex-col gap-4">
                    <p className="text-xl font-bold">
                        {" "}
                        I use some feature in Cafe-finder project:{" "}
                    </p>
                    <p className="text-white/60">
                        <span className="text-accent">Sort:</span> Allows users
                        to arrange items by options like price, date, or rating,
                        improving access to desired content quickly.
                    </p>
                    <p className="text-white/60">
                        <span className="text-accent">
                            Accordion Sections :
                        </span>{" "}
                        The page utilizes an accordion component to display
                        content in a condensed and structured manner. Each
                        accordion section can be expanded or collapsed, allowing
                        users to quickly scan through high-level content and
                        only expand what is relevant to them.
                    </p>
                    <p className="text-white/60">
                        <span className="text-accent">Pagination :</span> Users
                        can navigate between pages using numbered links,
                        next/previous buttons, or a dropdown to select the
                        number of items displayed per page. Pagination is
                        especially useful for content-heavy pages, such as
                        blogs, product listings, or search results, ensuring
                        faster loading times and better user experience.
                    </p>
                    <p className="text-white/60">
                        <span className="text-accent">
                            Breadcrumb Navigation:
                        </span>{" "}
                        Allows users At the top of the page, a breadcrumb trail
                        helps users understand their current location within the
                        website hierarchy
                    </p>
                </div>
                <div className="py-8 flex flex-col sm:flex-row gap items-start gap-4 justify-between">
                    <div className="flex items-center gap-4">
                        <span className="bg-accent text-primary rounded-full text-base font-semibold  px-6 py-2">
                            Next.js
                        </span>
                        <span className="bg-accent text-primary rounded-full text-base font-semibold px-6 py-2">
                            Tailwind
                        </span>
                    </div>
                    <Link
                        className="bg-white  text-primary rounded-full text-base font-semibold  px-6 py-2 hover:text-white hover:bg-primary transition duration-700 ease-in-out  w-full sm:w-auto flex justify-center"
                        href={"/"}
                    >
                        Back to home
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

export default CafeFinderDetail;
