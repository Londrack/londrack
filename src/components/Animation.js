/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

export function Animation({ urlBase, altName, amount, idName, time}) {
    // Animation
    let myTimeout;
    let x = 1;

    const startAnimation = () =>
        myTimeout = setTimeout(function Animate() {
            document.getElementById(idName).src = `${urlBase + x}.svg`;
            x++;
            if (x > amount) {
                x = 1;
            }
            clearInterval(myTimeout);
            myTimeout = setTimeout(Animate, time)
        },
        time);

    const stopAnimation = () => clearInterval(myTimeout);

    // function Animate() {
    //     document.getElementById(idName).src = `${urlBase + x}.svg`;
    //     x++;
    //     if (x > amount) {
    //         x = 1;
    //     }
    // }

    // ViewPort manage
    const options = {
        root: null,
        rootMargin: '100px',
        threshold: 1.0
    }
    const containerRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(!entry.isIntersecting){
                    stopAnimation()
                }else{
                    startAnimation()
                }
            }, options );
        if(containerRef.current) observer.observe(containerRef.current)
        return () => {}
    }, [containerRef, options, startAnimation, stopAnimation])

    return (
        <div ref={containerRef}>
            <img id={idName}
            className={`hidden sm:block md:w-[450px] lg:w-[500px]`}
            src={`${urlBase}1.svg`} alt={ altName } />
        </div>
    )
}
