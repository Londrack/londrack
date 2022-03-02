export function SubTitle({text, color = 'text-game-white'}) {
    return (
        <h2 className={`text-5xl md:text-6xl font-second ${color}`}>{ text }</h2>
    )
}
