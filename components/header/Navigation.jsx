"use client";
import Link from "next/link";
const navigations = [
    {
        id: "Home",
        name: "Home",
        path: "#Home",
    },
    {
        id: "Skils",
        name: "Skils",
        path: "#Skils",
    },
    {
        id: "Education",
        name: "Education",
        path: "#Education",
    },
    {
        id: "Experience",
        name: "Experience",
        path: "#Experience",
    },
    {
        id: "Projects",
        name: "Projects",
        path: "#projects",
    },
];
function Navigation() {
    return (
        <>
            <div className="flex gap-8 ">
                {navigations.map((navigation, index) => {
                    return (
                        <Link
                            key={index}
                            href={navigation.path}
                            className={`${
                                navigation.path === navigation.id &&
                                "text-accent border-b-2 border-accent "
                            } font-bold text-sm  transition-all  capitalize hover:text-accent `}
                        >
                            {navigation.name}
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default Navigation;
