import { useContext } from "react";
import { DataContext } from "../Context";
import { TitleFont } from "../components/Fonts/TitleFont";

export function Title() {
    const {data, lang} = useContext(DataContext)
    return (
        <header className="bg-game-purple-200" id="title-section">
            <div className="container">
                <TitleFont type="h1" text={data.title} />
                <TitleFont type="h2" text={data.myName} />
                <h3 className="font-second text-game-blue-300 mt-2 text-xl">{lang.createdBy} {data.myNickName}</h3>
                <p className="font-second mt-32 text-3xl text-game-white">{lang.justScroll}</p>
                <span className="font-second block text-3xl
                text-game-white animate-boingmove">\/</span>
            </div>
        </header>
    )
}


