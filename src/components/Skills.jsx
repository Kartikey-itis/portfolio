import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './ui/Animators';

const SKILL_CATEGORIES = [
    {
        title: "Data Science",
        speed: 50,
        skills: [
            { name: "Python", slug: "python" },
            { name: "NumPy", slug: "numpy" },
            { name: "Pandas", slug: "pandas" },
            { name: "Matplotlib", slug: "matplotlib" },
            { name: "Seaborn", slug: "seaborn" },
            { name: "SciPy", slug: "scipy" },
            { name: "Scikit-learn", slug: "scikitlearn" }
        ]
    },
    {
        title: "Machine Learning & CV",
        speed: 40,
        skills: [
            { name: "PyTorch", slug: "pytorch" },
            { name: "TorchVision", slug: "pytorch" },
            { name: "TensorFlow", slug: "tensorflow" },
            { name: "OpenCV", slug: "opencv" },
            { name: "XGBoost", slug: "xgboost" }
        ]
    },
    {
        title: "Backend & APIs",
        speed: 60,
        skills: [
            { name: "Django", slug: "django" },
            { name: "Django REST", slug: "django" },
            { name: "Flask", slug: "flask" },
            { name: "MongoDB", slug: "mongodb" },
            { name: "PostgreSQL", slug: "postgresql" }
        ]
    },
    {
        title: "Frontend",
        speed: 45,
        skills: [
            { name: "React", slug: "react" },
            { name: "Tailwind CSS", slug: "tailwindcss" },
            { name: "Framer Motion", slug: "framer" },
            { name: "JavaScript", slug: "javascript" },
            { name: "HTML", slug: "html5" },
            { name: "CSS", slug: "css3" }
        ]
    },
    {
        title: "Full Stack",
        speed: 55,
        skills: [
            { name: "React + Django", slug: "react" },
            { name: "REST APIs", slug: "fastapi" },
            { name: "Dashboards", slug: "grafana" },
            { name: "Auth Systems", slug: "auth0" }
        ]
    },
    {
        title: "Dev Tools",
        speed: 50,
        skills: [
            { name: "Git", slug: "git" },
            { name: "GitHub", slug: "github" },
            { name: "Linux", slug: "linux" },
            { name: "Docker", slug: "docker" }
        ]
    },
    {
        title: "Creative",
        speed: 45,
        skills: [
            { name: "Premier Pro", slug: "adobepremierepro" },
            { name: "After Effects", slug: "adobeaftereffects" },
            { name: "Photoshop", slug: "adobephotoshop" },
            { name: "DaVinci Resolve", slug: "davinciresolve" },
            { name: "Blender", slug: "blender" },
            { name: "Unreal Engine", slug: "unrealengine" }
        ]
    }
];

const SkillPill = ({ name, slug }) => (
    <div className="bg-gray-50/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100/50 text-sm font-medium text-gray-700 whitespace-nowrap hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all cursor-default flex items-center gap-2">
        {slug && (
            <img
                src={`https://cdn.simpleicons.org/${slug}`}
                className="w-4 h-4"
                alt=""
                onError={(e) => { e.target.style.display = 'none'; }}
            />
        )}
        <span>{name}</span>
    </div>
);

const CSSMarquee = ({ skills, duration = 40, reverse = false }) => {
    return (
        <div className="group flex overflow-hidden p-2 relative w-full">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10" />

            <div
                className={cn(
                    "flex gap-4 w-max hover:[animation-play-state:paused]",
                    reverse ? "animate-marquee-reverse" : "animate-marquee"
                )}
                style={{ animationDuration: `${duration}s` }}
            >
                {/* Quadruple items for seamless loop */}
                {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
                    <SkillPill key={`${skill.name}-${i}`} name={skill.name} slug={skill.slug} />
                ))}
            </div>
        </div>
    );
};

export const Skills = () => {
    return (
        <section id="stack" className="py-24 bg-white relative overflow-hidden">
            <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse linear infinite;
          }
        `}</style>

            <div className="container mx-auto px-6 mb-12 text-center">
                <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Tech Stack
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-6 mb-4">
                    Tools & Technologies
                </h2>
                <p className="text-gray-400 max-w-md mx-auto">
                    My weapon of choice for building robust applications.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-10">
                    {SKILL_CATEGORIES.map((category, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-1">
                                {category.title}
                            </h3>
                            <CSSMarquee
                                skills={category.skills}
                                duration={category.speed}
                                reverse={idx % 2 === 1}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
