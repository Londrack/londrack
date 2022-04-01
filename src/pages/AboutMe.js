import { useContext } from "react";
import { Animation } from "../components/Animation";
import { BgDiamond } from "../components/Skills/BgDiamond";
import { SubTitle } from "../components/Fonts/SubTitle";
import { NavButton } from "../components/Menu/NavButton";
import { DataContext } from "../Context";

export function AboutMe() {
    const { lang } = useContext(DataContext);

    return (
        <section className="bg-gradient-to-b h-screen from-game-purple-200 to-game-beige overflow-hidden relative" id="aboutme-section">
            {/* Content */}
            <div className="container relative z-10">
                <div className="w-full px-10
                md:flex md:justify-center md:gap-20">
                    <Animation
                        urlBase='./imgs/yop/about/yop_about_Frame'
                        altName={lang.aboutMeTitle}
                        amount={10}
                        idName="yop_about"
                        time={140}
                    />
                    <div className=" md:w-[600px] lg:pt-[100px]">
                        <SubTitle text={ lang.aboutMeTitle } />
                        <p className="text-game-white text-xl lg:text-2xl">{ lang.aboutMe }</p>
                    </div>
                </div>
                <NavButton target="#skills-section" text={lang.skillsTitle} type="navBottom" />
            </div>
            <BgDiamond />
        </section>
    )
}
