"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const WeatherForecastDetail = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
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
            <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-between  py-8">
                <p className="font-bold lg:text-3xl md:text-2xl text-lg text-accent flex gap-2">
                    <span className="text-white">Developed</span>{" "}
                    Weather-forecast
                </p>
                <Link
                    target="_blank"
                    className="bg-accent w-full sm:w-auto text-primary hover:bg-accent-hover  flex items-center gap-2 justify-center  rounded-full text-lg font-semibold px-8 sm:py-2 py-1 "
                    href="https://github.com/kasranajafii/Weather-forecast"
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
                    {` By utilizing React's robust component-based architecture and
                    Axios for reliable data management, the website ensures a
                    fast, responsive experience, even when dealing with large
                    datasets. The focus is on delivering a user-friendly
                    interface that enhances both functionality and speed,
                    creating an optimal experience for all users.`}
                </p>
            </div>
            <div className="max-w-[660px] flex flex-col gap-4">
                <p className="text-xl font-bold">
                    {" "}
                    I use some feature in{" "}
                    <span className="text-accent ">Weather-forecast</span>{" "}
                    project:{" "}
                </p>
                <p className="text-white/60">
                    <span className="text-accent">Axios for Data Fetching</span>{" "}
                    The page uses Axios, a lightweight and promise-based HTTP
                    client, to interact with external APIs. Axios is used to
                    make GET requests to specific API endpoints, fetching data
                    (e.g., product listings, user data, or other information)
                    and dynamically displaying it on the page. Axios handles
                    asynchronous operations, allowing the page to load and
                    display data efficiently while maintaining a smooth user
                    experience.
                </p>
                <p className="text-white/60">
                    <span className="text-accent">
                        Dynamic Data Rendering :
                    </span>{" "}
                    {`With React and Axios working together, the page dynamically
                    renders data as soon as it is fetched from the API. This
                    means that users can interact with the page, and new data
                    will be displayed without needing to refresh the browser.
                    Whether it's loading a list of products or updating specific
                    details, the integration ensures fast and reliable
                    performance.`}
                </p>
                <p className="text-white/60">
                    <span className="text-accent">API Endpoint :</span>
                    This setup ensures that the page remains up-to-date with the
                    latest data in real time.
                </p>
            </div>
            <div className="py-8 flex flex-col gap-4 sm:flex-row justify-between">
                <div className="flex items-center gap-4">
                    <span className="bg-accent text-primary rounded-full text-base font-semibold px-6 py-2">
                        React.js
                    </span>
                    <span className="bg-accent text-primary rounded-full text-base font-semibold  px-6 py-2">
                        Axios
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
    );
};

export default WeatherForecastDetail;
