"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Navigation from "@/components/header/Navigation";

function Header() {
    return (
        <>
            <header className="py-8 xl:first-line:py-12 ">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-4xl font-medium ">
                            Kasra <span className="text-accent">.</span>
                        </h1>
                    </Link>
                    <div className=" hidden xl:flex items-center gap-6">
                        <Navigation />
                        <Link
                            download
                            href="https://drive.google.com/file/d/1QdSKV_8BWTfxzcBCir0l4aBDLgZ9lQbL/view?usp=sharing"
                        >
                            <button className="bg-accent text-primary hover:bg-accent-hover  flex items-center justify-center  rounded-full text-base fonst-semibold  px-6 py-3">
                                Visit my full reseme
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
