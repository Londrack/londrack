export function TitleFont({type, text}) {
    const homeSize = `text-5xl md:text-6xl lg:text-7xl`;
    const subtitleSize = `text-5xl`;
    const baseStyleFont = `font-night absolute`;
    const baseFirstH = `text-game-beige tracking-widest z-20 ${baseStyleFont}`;
    return (
        <div className="relative text-center flex items-center justify-center h-[85px] mb-5 md:mb-0">
            {(type==='h1') ? <h1 className={`${baseFirstH} ${homeSize}`}>{text}</h1>
             : (type==='h2') ? <h2 className={`${baseFirstH} ${homeSize}`}>{text}</h2>
             : <h3 className={`${baseFirstH} ${subtitleSize}`}>{text}</h3>
            }
            <p className={`${baseStyleFont} text-game-purple-100 tracking-[0.08em] z-10
            ${ (type=== 'h1') ?
                `${homeSize} top-[0px] md:top-[18px] lg:top-[15px]`
            : (type==='h2') ?
                `${homeSize} top-[-10px] md:top-[5px] lg:top-[-3px]`
            : `${subtitleSize} top-[13px]`
            }`}>{text}</p>

            <p className={`${baseStyleFont} text-game-shadow tracking-[0.06em]
            ${ (type=== 'h1') ?
                `${homeSize} top-[6px] md:top-[25px] lg:top-[24px]`
            : (type==='h2') ?
                `${homeSize} top-[-16px] md:top-[-5px] lg:top-[-11px]`
            : `${subtitleSize} top-[24px]`
            }`}>{text}</p>
        </div>
    )
}
