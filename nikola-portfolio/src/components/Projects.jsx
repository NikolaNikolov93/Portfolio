import React from "react";
import ProjectsItem from "./ProjectsItem";
import thegalleryImg from "../assets/thegalleryImg.jpg";
const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Projects
            </h1>
            <p className="text-center py-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                dolor iusto eaque ea autem eos iure illum non ullam. Praesentium
                error ex sunt sequi, ad repellendus molestias dolorem recusandae
                rem!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectsItem img={thegalleryImg} title="The Gallery" />
            </div>
        </div>
    );
};

export default Projects;
