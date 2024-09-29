import { FaGithub, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/kasranajafii",
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/kasranajafi?igsh=MWU2Mm1xNWMzdzQ4dQ%3D%3D&utm_source=qr",
    },
    {
        icon: <FaTelegram />,
        path: "https://web.telegram.org/a/",
    },
];
const Social = () => {
    return (
        <div className="flex gap-6">
            {socials.map((item, i) => {
                return (
                    <Link
                        target="_blank"
                        key={i}
                        href={item.path}
                        className=" flex justify-center items-center text-base w-9 h-9 border border-accent  text-accent rounded-full hover:bg-accent hover:text-primary  hover:transition-all duration-500"
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
