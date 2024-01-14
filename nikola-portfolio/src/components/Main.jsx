import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";

const Main = () => {
    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover"
                src="./public/profilepic.jpg"
                alt=""
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
                        I'm Nikola Nikolov
                    </h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        I'm a{" "}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Developer",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Tech Enthusiast",
                                1000,
                                "Coder",
                                1000,
                            ]}
                            wrapper="div"
                            speed={50}
                            cursor={true}
                            style={{ fontSize: "1em", paddingLeft: "5px" }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <FaFacebookF className="cursor-pointer" size={20} />
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                        <FaInstagram className="cursor-pointer" size={20} />
                        <FaGithub className="cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;
