export function BgDiamond({color='border-game-white/10'}) {
    return (
        <div className="w-full h-full overflow-hidden absolute z-0 top-0 left-0">
            <div>
                {Array(27).fill(1).map((el, i) => {
                    return (
                    <div key={i}
                    className={`m-7 w-32 h-32 md:m-10 md:w-48 md:h-48 rotate-45 float-left
                    bg-about-gradient border-[1px] ${color} `}></div>
                    )
                })}
            </div>
        </div>
    )
}
