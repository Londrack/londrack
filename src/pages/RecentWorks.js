import { useContext } from "react";
import { SubTitle } from "../components/Fonts/SubTitle";
import { WorkCard } from "../components/WorkCard";
import { DataContext } from "../Context";

export function RecentWorks() {
    const {data, lang} = useContext(DataContext);
    return (
        <section className="bg-gradient-to-b from-game-blue-0 to-game-purple-200" id="recent-section">
            <div className="container relative z-10">
                <SubTitle text={lang.recentWorksTitle} />
                <div className="flex flex-col md:flex-row justify-center items-center gap-7 mt-5" >
                    {data.recentWorks.map((recent, i) =>
                        <WorkCard work={recent} key={i} type="work" path='./imgs/works/'/>
                    )}
                </div>
            </div>
        </section>
    )
}
