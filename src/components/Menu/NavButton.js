import { useContext } from "react";
import { DataContext } from "../../Context";

export function NavButton({target, text}) {

    const {scrollIt} = useContext(DataContext);
    const navActiveClasses = ['active','h-4','w-4','opacity-100', 'ml-[-2px]'];
    const passiveNavClasses = ['h-3', 'w-3', 'opacity-50', 'ml-0'];

    const onScrollTo = (e, section) =>{
        // const activeButton = document.querySelector('nav button.active');
        // activeButton.classList.remove(...activeClasses)

        // e.target.classList.add(...activeClasses);

        const activeButton = document.querySelector('nav button.active');
        activeButton.classList.remove(...navActiveClasses)
        activeButton.classList.add(...passiveNavClasses)

        const targetBtn = e.target;
        targetBtn.classList.remove(...passiveNavClasses);
        targetBtn.classList.add(...navActiveClasses);

        scrollIt(
            document.querySelector(section),
            800,
            'easeInOutQuad',
            () => document.querySelector(section).querySelector('.container').style.opacity = 1
        )
    }

    return (
        <button
            onClick={(e) => onScrollTo(e, target)}
            data-target={target}
            title={text}
            className={`h-3 w-3 block bg-game-beige mb-3 rounded-xl opacity-50 hover:opacity-100 transition-all duration-150
            ${(target === '#title-section') && navActiveClasses.join(' ')}`}
        ></button>
    )
}
