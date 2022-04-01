import { useContext, useState, useEffect, useRef } from "react";
import { SubTitle } from "../components/Fonts/SubTitle";
import { NavButton } from "../components/Menu/NavButton";
import { DataContext } from "../Context";

import RadarChart from "../components/RadarChart";
// import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css'

export const SkillsRadar = () => {
    const {data, lang} = useContext(DataContext);
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);
    const options = {
        dots: true,
        captionMargin: 40,
        captionProps:
          () => ({
            fontFamily: 'night_machine',
            fontSize: 18,
            textAnchor: 'middle'
          }),
          dotProps:
          () => ({
            className: 'dot !fill-game-purple-100'
          })
      }
    const radarChart = {
        labels: {},
        data: [{
            data: {},
            meta: { color: '#462638' }
        }],
    }
    const labelSkill = data.skills.map(data => data.shortName);
    const dataSkill = data.skills.map(data => data.lvl / 100);

    labelSkill.forEach((key, i) => {
        radarChart.data[0].data[key] = dataSkill[i];
        radarChart.labels[key] = key.toUpperCase()
    })

    useEffect(() => {
        setWidthWindow(window.innerWidth);
    }, [widthWindow])

    return (
        <section id="skills-section" className="h-screen bg-gradient-to-b from-game-beige to-game-blue-0">
            <div className="container">
                <SubTitle text={ lang.skillsTitle } />
                <div className=" flex justify-center">
                    <RadarChart
                        captions={radarChart.labels}
                        data={radarChart.data}
                        options={options}
                        size={widthWindow > 700 ? 600 : 400}
                    />
                </div>
                <NavButton target="#demo-section" text={lang.demoStuffsTitle} type="navBottom" />
            </div>
        </section>
    )
}
