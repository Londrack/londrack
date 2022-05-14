import styled from 'styled-components'

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
                <div className="bg-black/70 text-white w-full h-0 absolute bottom-[-5px] transition-all
                flex justify-around items-center">
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
        > div { height: 30%; bottom:0 }
    }
`
