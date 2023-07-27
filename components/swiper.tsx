import React, {useState} from "react";

import Indicator from "@/components/indicator";


const Swiper = ({
                    children,
                    size = 2,
                    width,
                    showIndicator = true,
                    prev,
                    indicatorWidth = 350,
                    variant,
                }) => {
    const [Index, setIndex] = useState(0);
    const maxIndex = size - 1;
    const [Info, setInfo] = useState({swipeEndX: 0, swipeStartX: 0});

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
        const swipeDistance = Info.swipeEndX - Info.swipeStartX;
        if (swipeDistance > 0) {
            // Right swipe
            handlePrevClick();
        } else if (swipeDistance < 0) {
            // Left swipe
            handleNextClick();
        }
    };

    const handleMouseDown = (event) => {
        event.preventDefault();
        setInfo((i) => ({...i, swipeStartX: event.clientX}));
    };

    console.log(Info);

    return (
        <div>
            <div
                className={`relative overflow-hidden touch-action-pan-y m-auto cursor-grab `}
                style={{
                    width,
                }}
                onMouseUp={handleMouseUp}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
            >
                <div
                    className={`flex transition-transform ease-in-out relative`}
                    style={{
                        transform: `translateX(-${Index * 100}%)`,
                        width,
                    }}
                >
                    {children}
                </div>
            </div>
            <div className="flex justify-center items-center">
                {prev && (
                    <button
                        className={`transform rotate-180 ${
                            variant === "outline" ? "bg-primary-light" : "bg-error-main"
                        }`}
                        onClick={handlePrevClick}
                        disabled={Index === 0}
                    >
                        <Image
                            src={'/svgs/rightArrow.svg'}
                            alt="Previous"
                            className="max-w-22 max-h-22"
                            width={25}
                            height={25}

                        />
                    </button>
                )}
                {showIndicator && (
                    <Indicator {...{Index, setIndex, size, maxWidth: indicatorWidth}} />
                )}
                {variant === "outline" && (
                    <button
                        className="relative"
                        onClick={handleNextClick}
                        disabled={Index === maxIndex}
                    >
                        <Image src='/svgs/chavronLeft.svg' alt="Next" className="absolute left-full bottom-150%"
                               width={25}
                               height={25}/>
                    </button>
                )}
                {variant === "filled" && (
                    <button
                        className={`bg-error-main py-4 px-8 rounded-8 ${
                            Index === maxIndex ? "opacity-50 pointer-events-none" : ""
                        }`}
                        onClick={handleNextClick}
                        disabled={Index === maxIndex}
                    >
                        <Image src={'/svgs/chavronLeft.svg'} alt="Next" width={25}
                               height={25}/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Swiper;
