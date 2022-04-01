import { useContext } from "react";
import { DataContext } from "../../Context";
import { NavButton } from "./NavButton";
export function Menu() {

    const {language, setLanguage, lang } = useContext(DataContext);

    const onSetLang = () => {
        const newLang = (language === 'eng') ? 'esp' : 'eng';
        setLanguage(newLang);
    }
    return (
        <>
            <button
              className="fixed top-2 right-2 z-50"
              onClick={onSetLang}
              title={lang.selectLanguage}
            >
                <img
                width={30}
                src={`./imgs/icons/flag_${(language === 'eng') ? 'usa': 'col' }.svg`}
                alt="Language" />
            </button>

            <nav className="fixed top-1/3 right-3 z-30 flex flex-col">
                <NavButton target="#title-section" text={lang.homeTitle} />
                <NavButton target="#aboutme-section" text={lang.aboutMeTitle} />
                <NavButton target="#skills-section" text={lang.skillsTitle} />
                <NavButton target="#demo-section" text={lang.demoStuffsTitle} />
                <NavButton target="#recent-section" text={lang.recentWorksTitle} />
                <NavButton target="#network-section" text={lang.networksTitle} />
            </nav>
        </>
    )
}



