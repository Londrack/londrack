export function SkillImg({shortName, longName = shortName}) {
    const pathImg = './imgs/icons/icon_';
    return (
        <img src={pathImg+shortName+'.svg'} alt={longName} />
    )
}
