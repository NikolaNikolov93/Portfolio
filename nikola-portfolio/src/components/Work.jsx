import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2016,
        title: "Driver",
        duration: "4 Years",
        details:
            "Worked as a driver for private companyt called Plastokost in Plovdiv, Bulgaria. The company is subcontractor to DHL Express Bulgaria",
    },
    {
        year: 2020,
        title: "Ground Operations",
        duration: "4 Years",
        details:
            "Worked as a full time ground operation specialinst in logistics for DHL Express Bulgaria. I'm also a qualified specialist for the export of dangerous good according IATA Regulations.",
    },
];
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
                Work
            </h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;
