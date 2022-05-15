import styled from 'styled-components'
import { SkillImg } from "./Skills/SkillImg";

export function WorkCard({work, path, type}) {
    const sizeBox = (type === 'work')
        ? 'w-72 lg:w-[40%] h-80'
        : (type === 'skill')
            ? 'w-full h-full'
            : '';

    const positionBox = (type === 'work')
        ? 'relative'
        : (type === 'skill')
            ? 'absolute left-0 top-0'
            : 'relative'

    const imgSize = (type === 'skill_mobile') ? 'w-80' : 'w-[150%] h-full';

    return (
        <Card href={work.url} target="_blank" alt={work.name} rel="noreferrer"
        className={`bg-white/10 ${sizeBox} rounded-lg overflow-hidden ${positionBox}`}>

            <div className="overLay absolute bg-black/50 transition-opacity p-5
            top-0 left-0 w-full h-full flex justify-center items-center z-10">
                <h2 className="font-semibold text-2xl text-white">{work.name}</h2>
            </div>

            <img src={`${path + work.shortName}.jpg`} alt={work.name}
            className={`imgWork ${imgSize} max-w-none object-cover transition-all duration-500`} />

            <div className="flex justify-center items-center gap-2 p-3">

                {work.skill.map((skill,i) =>
                <div className="w-[35px] h-[35px] rounded-full bg-white z-20" key={`${i}-work`}>
                    <SkillImg shortName={skill} />
                </div>
                )}

            </div>
        </Card>
    )
}

const Card = styled.a`
    &:hover {
        .imgWork { width: 100%; height: 79% }
        .overLay{ opacity: 0}
    }
`

