import React, {useState} from "react";
import Indicator from "@/components/indicator";
import Image from "next/image";
import Button from "@/components/button";
// @ts-Ignore
const icon=  <svg viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="ChevronLeft" clipPath="url(#clip0_134_249)">
        <path id="Vector" fillRule="evenodd" clipRule="evenodd"
              d="M23.4992 43.7723C23.3409 43.9302 23.1528 44.0554 22.9457 44.1408C22.7386 44.2263 22.5166 44.2702 22.2924 44.2702C22.0682 44.2702 21.8462 44.2263 21.6391 44.1408C21.432 44.0554 21.2439 43.9302 21.0856 43.7723L0.631046 23.4352C0.472307 23.2778 0.346367 23.0907 0.260435 22.8848C0.174505 22.6789 0.130272 22.4582 0.130272 22.2353C0.130272 22.0124 0.174505 21.7916 0.260435 21.5857C0.346367 21.3799 0.472307 21.1928 0.631046 21.0354L21.0856 0.698246C21.4057 0.380012 21.8398 0.201233 22.2924 0.201233C22.7451 0.201233 23.1792 0.380012 23.4992 0.698246C23.8193 1.01648 23.9991 1.44809 23.9991 1.89814C23.9991 2.34818 23.8193 2.7798 23.4992 3.09803L4.24809 22.2353L23.4992 41.3726C23.658 41.53 23.7839 41.717 23.8698 41.9229C23.9558 42.1288 24 42.3495 24 42.5725C24 42.7954 23.9558 43.0161 23.8698 43.222C23.7839 43.4279 23.658 43.6149 23.4992 43.7723Z"
              fill="currentColor
"/>
    </g>
    <defs>
        <clipPath id="clip0_134_249">
            <rect width="24" height="44.4706" fill="currentColor" transform="translate(24 44.4706) rotate(-180)"/>
        </clipPath>
    </defs>
</svg>
const Swiper = ({
                    children,
                    size = 2,
                    width,
                    showIndicator = true,
                    prev,
                    indicatorWidth = 350,
                    variant = "filled",
                }) => {
    const [Index, setIndex] = useState(0);
    const maxIndex = size - 1;
    const [Info, setInfo] = useState({
        swipeEndX: 0,
        swipeStartX: 0,
    });

    const handlePrevClick = () => {
        if (Index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (Index < maxIndex && Index < size - 1 / 2) {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handleMouseUp = (event) => {
        setInfo((i) => ({...i, swipeEndX: event.clientX}));
        handleSwipe();
    };

    const handleMouseDown = (event) => {
        event.preventDefault();
        setInfo((i) => ({...i, swipeStartX: event.clientX}));
    };

    const handleTouchEnd = (event) => {
        setInfo((i) => ({...i, swipeEndX: event.changedTouches[0].clientX}));
        handleSwipe();
    };

    const handleTouchStart = (event) => {
        event.preventDefault();
        setInfo((i) => ({...i, swipeStartX: event.touches[0].clientX}));
    };

    const handleSwipe = () => {
        const swipeDistance = Info.swipeEndX - Info.swipeStartX;
        if (swipeDistance > 50) {
            // Right swipe
            handlePrevClick();
        } else if (swipeDistance < -50) {
            // Left swipe
            handleNextClick();
        }
    };

    return (
        <div>
            <div
                className={`relative overflow-hidden touch-action-pan-y m-auto cursor-grab  `}
                style={{
                    width,
                }}
                onMouseUp={handleMouseUp}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className={`flex transition-transform ease-in-out duration-300 relative h-5/6 `}
                    style={{
                        transform: `translateX(-${Index * 100}%)`,
                        width,
                    }}
                >
                    {children}
                </div>
            <Indicator  size={size} Index={Index} setIndex={setIndex} maxWidth={indicatorWidth}/>
                <button className={`absolute text-white left-12 top-1/2 w-6 h-12 disabled:opacity-60 `} disabled={Index ===0}>
                    {icon}


                </button>
                <button className='rotate-180 text-white absolute right-12 top-1/2  w-6 h-12 disabled:opacity-60' disabled={Index===size-1} >
                    {icon}


                </button>
            </div>
        </div>
    );
};

export default Swiper;
