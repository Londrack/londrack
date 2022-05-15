import { useContext } from "react";
import { SubTitle } from "../components/Fonts/SubTitle";
import { Coin } from "../components/Skills/Coin";
import { DataContext } from "../Context";

export function SkillsCoins() {
    const {data, lang} = useContext(DataContext);
    const skills = data.skills;
    return (
        <section id="skills-section" className="h-screen bg-gradient-to-b from-game-beige to-game-blue-0">
            <div className="container">
                <SubTitle text={ lang.skillsTitle } color="text-game-blue-300" />
                <div className="gap-8 w-screen flex flex-wrap p-10 justify-center">
                    {skills.map((skill, i) => <Coin key={`${skill.name}-${i}`} skill={skill} delay={i*50 + 'ms'} /> )}
                </div>
            </div>
        </section>
    )
}
