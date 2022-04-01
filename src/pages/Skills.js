import { useContext } from "react";
import { Animation } from "../components/Animation";
import { SubTitle } from "../components/Fonts/SubTitle";
import { NavButton } from "../components/Menu/NavButton";
import { SkillBadge } from "../components/Skills/SkillBadge";
import { DataContext } from "../Context";

export function Skills() {
    const {data, lang} = useContext(DataContext);

    const index = data.skills.length;
    const firstPart = data.skills.slice(0, index/2);
    const secondPart = data.skills.slice(index/2, index);

    return (
        <section id="skills-section" className="h-screen bg-gradient-to-b from-game-beige to-game-blue-0">
            <div className="container">
                <div className="flex md:justify-center justify-between items-top">
                    <div className="flex flex-col">
                        {firstPart.map((skill, i) =>
                            <SkillBadge
                              key={i}
                              shortName={skill.shortName}
                              longName={skill.longName}
                              color={skill.color}
                              lvl={skill.lvl}
                              direction="left"
                            />
                        )}
                    </div>
                    <div className=" absolute md:relative left-1/3 md:left-auto">
                        <SubTitle text={ lang.skillsTitle } />
                        <Animation
                            urlBase='./imgs/yop/skills/yop_skills_Frame'
                            altName={lang.aboutMeTitle}
                            amount={4}
                            idName="yop_skills"
                            time={220}
                        />
                    </div>
                    <div className="flex flex-col">
                        {secondPart.map((skill, i) =>
                            <SkillBadge
                              key={i}
                              shortName={skill.shortName}
                              longName={skill.longName}
                              color={skill.color}
                              lvl={skill.lvl}
                              direction="right"
                            />
                        )}
                    </div>
                </div>
                <NavButton target="#demo-section" text={lang.demoStuffsTitle} type="navBottom" />
            </div>
        </section>
    )
}
