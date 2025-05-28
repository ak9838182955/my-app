import React from "react";
import back1 from '../src/back1.png';
import back2 from '../src/back2.png';
import back3 from '../src/back3.png';
import back4 from '../src/back4.png';
import back5 from '../src/back5.png';
const techCategories = [
    {
        title: "Backend Development",
        icon: "🖥️",
        color: "border-b-4 border-indigo-300 bg-indigo-50",
    },
    {
        title: "Fronted Development",
        icon: "🌐",
        color: "border-b-4 border-orange-300 bg-orange-50",
    },
    {
        title: "Mobile Development",
        icon: "📱",
        color: "border-b-4 border-purple-300 bg-purple-50",
    },
    {
        title: "Blockchain, Ai/ML",
        icon: "🔗",
        color: "border-b-4 border-cyan-300 bg-cyan-50",
    },
    {
        title: "DevOps & Low-Code",
        icon: "⚙️",
        color: "border-b-4 border-amber-300 bg-amber-50",
    },
    {
        title: "E-commerce & CMS",
        icon: "🛍️",
        color: "border-b-4 border-rose-300 bg-rose-50",
    },
];

const techList = [
    ".NET",
    "C/C++",
    "DJANGO",
    "Firebase",
    "GOLANG",
    "SYMFONY",
    "LARAVEL",
    "NODE",
    "PHP",
    "PYTHON",
    "RUBY ON RAILS",
    "JAVA",
];

export default function TechnologyCompetency() {
    return (
        <div className="relative w-full px-4 py-12 ">

            <div className="absolute inset-0 -z-10 grid grid-cols-2 grid-rows-2 w-full h-full">


                <div className="relative bg-cover bg-top" style={{ backgroundImage: `url(${back3})`, height: '300px' }}>
                    <div className="absolute top-10 left-10">
                        <img src={back5} alt="Decorative" className="w-[80px] h-auto" />
                    </div>
                </div>



            </div>
            <div className="relative max-w-6xl mx-auto pt-14 pb-24 px-4 grid grid-rows-[auto_1fr] gap-16">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Diverse Technology Competency</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl shadow-sm ${category.color}`}
                        >
                            <div className="text-4xl mb-4">{category.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {category.title}
                            </h3>
                            <div className="text-sm text-gray-700 space-x-2 space-y-1">
                                {techList.map((tech, i) => (
                                    <span key={i} className="inline-block">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
