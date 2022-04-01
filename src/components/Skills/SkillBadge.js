/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { SkillImg } from './SkillImg';

export function SkillBadge({color, shortName, longName, direction, lvl}) {

    const themeColor = {
        yellow: {
            color1:'#ffeb3b', color2:'#fbc02d', color3: '#ffb300'
        },
        blue: {
            color1:'#4FC3F7', color2:'#2196F3', color3: '#259af3'
        },
        orange: {
            color1:'#ffc107', color2:'#f57c00', color3: '#f68401'
        },
        pink: {
            color1:'#F48FB1', color2:'#d81b60', color3: '#dc306f'
        },
        red: {
            color1:'#f4511e', color2:'#b71c1c', color3: '#c62828'
        },
        purple: {
            color1:'#ab47bc', color2:'#4527a0', color3: '#ab47bc'
        },
        teal: {
            color1:'#4DB6AC', color2:'#00796B', color3: '#34a297'
        },
        blueDark: {
            color1:'#1976D2', color2:'#283593', color3: '#1c68c5'
        },
        green: {
            color1:'#cddc39', color2:'#8bc34a', color3: '#7cb342'
        },
        greenDark: {
            color1:'#4CAF50', color2:'#1B5E20', color3: '#00944a'
        },
        silver: {
            color1:'#E0E0E0', color2:'#BDBDBD', color3: '#9e9e9e'
        },
        gold: {
            color1:'#e6ce6a', color2:'#b7892b', color3: '#b7892b'
        },
    }

    // ViewPort manage
    const options = {
        root: null,
        rootMargin: '100px',
        threshold: 1.0
    }
    const finalTheme = {...themeColor[color], direction, lvl};
    const containerRef = useRef(null);
    const barDivs = document.getElementsByClassName('bar');
    const barArr = [...barDivs];
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(!entry.isIntersecting){
                    if(barArr)
                        barArr.map(bar=> bar.classList.remove('active'))
                }else{
                    if(barArr)
                        barArr.map(bar=> bar.classList.add('active'))
                }
            }, options );
        if(containerRef.current) observer.observe(containerRef.current)
        return () => {}
    }, [barArr])


    return (
        <div ref={containerRef}>
            <ThemeProvider theme={finalTheme} >
                <Contenedor>
                    <Badge title={longName} className=' my-[1.5em] mx-[2.7em] laptop:my-[0.4em]'>
                        <div className="circle">
                            <SkillImg shortName={shortName} longName={longName}  />
                        </div>
                        <div className="ribbon laptop:!top-[60px] ">{longName}</div>
                    </Badge>
                    <LvlBar className='xl:w-72 lg:w-44 w-24 gap-0'>
                        <div className='bar' title={`${lvl}%`}><span>{lvl}%</span></div>
                    </LvlBar>
                </Contenedor>
            </ThemeProvider>
        </div>
    )
}

const marginAuto = 'top: 0; left: 0;  right: 0; bottom: 0; margin: auto;';
const Contenedor = styled.div`
    display: flex;
    align-items: center;
    ${props => props.theme.direction === 'right' && `flex-direction: row-reverse;`}
`

const LvlBar = styled.div`
    height: 40px;
    border-radius:10px;
    position: relative;
    z-index:0;
    background: linear-gradient(to bottom right, #555 0%, #333 100%);
    ${props => props.theme.direction === 'right'  ? `
        margin-right: -50px;
    ` : `
        margin-left: -50px;
    `}
    .bar{
        height: 30px;
        width: 0px;
        transition: width 0.8s ease;
        transition-delay: 0.5s;
        border-radius:8px;
        background: ${props => props.theme.color3};
        margin-top: 5px;
        ${props => props.theme.direction === 'right'  ? `
            margin-right: -5px;
            float:right;
        ` : `
            margin-left: -5px;
        `}

        &.active {
            width:  ${props => props.theme.lvl+'%'};
        }

        span{
            margin:5px 7px 0;
            font-size:0.8em;
            font-weight:bold;
            color: #fff;
            ${props => props.theme.direction === 'right'  ? `
                float:left;
            ` : `
                float:right;
            `}
        }
    }
`
const Badge = styled.div`
    background: linear-gradient(to bottom right, ${props => props.theme.color1} 0%, ${props => props.theme.color2} 100%);
    position: relative;
    z-index:2;
    width: 3.5em;
    height: 5.7em;
    border-radius: 10px;
    display: inline-block;
    top: 0;
    &:before,
    &:after {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
        content: "";
        ${marginAuto};
    }
    &:before {
        transform: rotate(60deg);
    }
    &:after {
        transform: rotate(-60deg);
    }
    .circle {
        width: 58px;
        height: 58px;
        position: absolute;
        background: #fff;
        z-index: 10;
        border-radius: 50%;
        ${marginAuto};
        i.fa {
            font-size: 2em;
            margin-top: 8px;
        }
    }
    .font {
        display: inline-block;
        margin-top: 1em;
    }
    .ribbon {
        position: absolute;
        border-radius: 4px;
        padding: 5px 5px 4px;
        width: 110px;
        z-index: 11;
        color: #fff;
        bottom: 12px;
        left: 50%;
        margin-left: -55px;
        top:85px;
        height: 30px;
        font-size: 14px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);
        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
        text-transform: uppercase;
        background: linear-gradient(to bottom right, #555 0%, #333 100%);
        cursor: default;
    }
`

