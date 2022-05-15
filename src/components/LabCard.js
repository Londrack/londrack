import styled from 'styled-components'
import { SkillImg } from './Skills/SkillImg';

export function LabCard({lab, path}) {
    return (
        <>
            {/* Mobile */}
            <a href={lab.url} target="_blank" alt={lab.name} rel="noreferrer"
            className="sm:hidden inline-block w-32 h-32
            overflow-hidden rounded-full m-2">
                <img src={`${path + lab.shortName}.jpg`} alt={lab.name}
                className='object-cover max-w-none w-full h-full
                transition-all duration-500 pointer-events-none' />
            </a>

            {/* Desk */}
            <Card className="hidden sm:block w-72 h-60
            rounded-lg overflow-hidden relative">
                <div className='skillsBox bg-black/70 w-full overflow-hidden absolute h-0 transition-all
                flex justify-center gap-5 items-center'>
                    {lab.skill.map((skill,i) =>
                    <div className="w-[35px] h-[35px] rounded-full bg-white z-20" key={`${i}-work`}>
                        <SkillImg key={`${i}-lab`} shortName={skill} />
                    </div>
                    )}
                </div>
                <div className="urlBox bg-black/70 text-white w-full h-0 absolute bottom-[-5px]
                flex justify-around items-center transition-all">
                    <a href={lab.url} target="_blank" alt={lab.name} rel="noreferrer">URL</a>
                    {!!lab.github && <a href={lab.github} target="_blank" alt={lab.name} rel="noreferrer">GIT</a>}
                </div>
                <img src={`${path + lab.shortName}.jpg`} alt={lab.name}
                className='max-w-none w-full h-full object-cover transition-all
                duration-500 pointer-events-none' />
            </Card>
        </>
    )
}

const Card = styled.a`
    &:hover {
        .urlBox { height: 30%; bottom:0 }
        .skillsBox{ height: 30%; top:0 }
    }
`
