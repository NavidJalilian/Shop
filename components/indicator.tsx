import React from "react";

export default function Indicator({ Index, setIndex, size, maxWidth = 100 }) {
    const width = maxWidth;
    const height = 12;
    const states = Array.from({ length: size }, (_, index) => index);


    return (
        <daiv className="flex flex-row py-2">
            {states.map((item, idx) => (
                <button
                    onClick={() => setIndex(item)}
                    key={idx}
                    className={`${
                        item === Index ? "bg-error-light" : "bg-gray-200"
                    } w-${width / states.length}px h-${height} ${
                        idx === 0
                            ? "rounded-l-8"
                            : idx === states.length - 1
                                ? "rounded-r-8"
                                : "rounded-none"
                    } z-10`}
                ></button>
            ))}
        </daiv>
    );
}
