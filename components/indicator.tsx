import React from "react";

export default function Indicator({Index, setIndex, size, maxWidth = 100}) {
    const width = maxWidth;
    const height = 12;
    const states = Array.from({length: size}, (_, index) => index);

    return (
        <div
            className="absolute bottom-16 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row overflow-hidden rounded-lg">
            {states.map((item, idx) => (
                <button
                    onClick={() => setIndex(item)}
                    key={idx}
                    className={` h-4 w-20  bg-white ${Index !== idx && 'opacity-30'} `}

                ></button>
            ))}
        </div>
    );
}
