"use client";
import { Item } from "@radix-ui/react-select";
import CountUp from "react-countup";

const stats = [
    {
        num: 23,
        text: "Years old ",
    },
    {
        num: 1.5,
        text: "Years of experience",
    },
    {
        num: 4,
        text: "Projects completed",
    },

    {
        num: 150,
        text: "Code commits",
    },
];
const Status = () => {
    return (
        <section className="py-24 hidden md:block">
            <div className="container mx-auto">
                <div className="flex gap-6  max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, i) => {
                        return (
                            <div
                                className="flex-1 flex  gap-4 items-center justify-center xl:justify-start"
                                key={i}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p
                                    className={`${
                                        item.text.length < 15
                                            ? "max-w-[100px]"
                                            : "max-w-[150px]"
                                    } leading-snug text-white/80`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Status;
