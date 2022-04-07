import styled, { ThemeProvider } from 'styled-components'
import { themeColor } from './themeColors';
import { SkillImg } from './SkillImg';

export function Coin({skill, delay}) {
    const finalTheme = {...themeColor[skill.color], delay};

    return (
        <div>
            <ThemeProvider theme={finalTheme} >
                <SingleCoin className="w-24 h-24 flex flex-col relative">
                    <div className='coin-face'>
                        <div className='rounded-full p-1 bg-white bg-opacity-90'>
                            <SkillImg shortName={skill.shortName} longName={skill.longName}  />
                        </div>
                    </div>
                    <div className='coin-face'></div>
                    <div className='coin-face'></div>
                    <div className='coin-face'>
                        <div className='rounded-full p-1 bg-white bg-opacity-90'>
                            <SkillImg shortName={skill.shortName} longName={skill.longName}  />
                        </div>
                    </div>
                </SingleCoin>
                <span className='block mb-1 mt-1'>{skill.longName}</span>
            </ThemeProvider>
        </div>
    )
}

const SingleCoin = styled.div`
    animation: spin 3s cubic-bezier(.3,2,.4,.8) infinite both;
    animation-delay: ${props => props.theme.delay};
	transform-style: preserve-3d;
	vertical-align: middle;

	@keyframes spin {
		0%, 10% {
			transform: rotate(-10deg) perspective(400px);
		}
		90%, 100% {
			transform: rotate(-10deg) perspective(400px) rotateY(180deg);
		}
	}

    .coin-face{
        background: ${props => props.theme.color3};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        padding: 0.25rem;

        &:nth-child(1) { transform: translateZ(-.2em) rotateY(-180deg); }
        &:nth-child(2) { transform: translateZ(-.1em); }
        &:nth-child(4) { transform: translateZ(.1em); }
        &:nth-child(5) { transform: translateZ(.2em); }
    }
`