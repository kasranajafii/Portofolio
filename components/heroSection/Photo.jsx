import { delay, motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
    return (
        <div className="w-full h-full ">
            <motion.dev
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
            >
                <motion.dev
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] "
                >
                    <Image
                        src={"/assets/images/Hero-section.png"}
                        alt=" "
                        priority
                        width={450}
                        height={680}
                    />
                </motion.dev>
            </motion.dev>
        </div>
    );
};

export default Photo;
