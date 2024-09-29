import Education from "@/components/education";
import Experience from "@/components/experience";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Projects from "@/components/project";
import Skills from "@/components/skills";
import Status from "@/components/ui/Status";

function Home() {
    return (
        <div className="h-full">
            <Header />
            <HeroSection />
            <Status />
            <Skills />
            <Education />
            <Experience />
            <Projects />
        </div>
    );
}

export default Home;
