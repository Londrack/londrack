import { useContext } from "react";
import { DataContext } from "../../Context";

export function NavButton({target, text, type = 'menu'}) {

    const {scrollIt} = useContext(DataContext);
    const navActiveClasses = ['active','h-4','w-4','opacity-100', 'ml-[-2px]'];
    const passiveNavClasses = ['h-3', 'w-3', 'opacity-50', 'ml-0'];

    const onScrollTo = (e, section) =>{

        if(type === 'menu'){
            const activeButton = document.querySelector('nav button.active');
            const targetBtn = e.target;
            activeButton.classList.remove(...navActiveClasses)
            activeButton.classList.add(...passiveNavClasses)
            targetBtn.classList.remove(...passiveNavClasses);
            targetBtn.classList.add(...navActiveClasses);
        }

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
            className={`
                ${type === 'menu'
                    ? 'h-3 w-3 bg-game-beige mb-3 block rounded-xl opacity-50 hover:opacity-100 transition-all duration-150'
                    : 'font-second text-3xl inline-block text-game-white animate-boingmove'}
                ${(target === '#aboutme-section' && type === 'menu') && navActiveClasses.join(' ')}
            `}
        >{type !== 'menu' && "\\/"}</button>
    )
}
