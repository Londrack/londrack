import { useContext } from "react";
import { SubTitle } from "../components/Fonts/SubTitle";
import { DataContext } from "../Context";

// invert(98%) sepia(7%) saturate(717%) hue-rotate(36deg) brightness(100%) contrast(88%)

export function Networks() {
    const {data, lang} = useContext(DataContext);
    return (
        <footer className="bg-game-purple-200" id="network-section">
            <div className="container">
                <SubTitle text={lang.networksTitle} />
                <div className="mt-6 mb-0 my-auto flex justify-center">
                    <div className="flex justify-between w-1/2">
                    {data.networks.map((net, i) =>
                        <div key={i}>
                            <a href={net.url} target="_blank" className="flex justify-center items-center" rel="noreferrer">
                                <img className="w-10" src={`./imgs/icons/net_${net.shortName}.svg`} alt={net.count} />
                                <p className="pl-3 text-game-white">{net.count}</p>
                            </a>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </footer>
    )
}
