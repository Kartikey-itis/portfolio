import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { cn } from './Animators';

export const ScrollWordReveal = ({
    children,
    progress,
    range = [0, 1],
    className
}) => {
    if (typeof children !== 'string') {
        return <span className={className}>{children}</span>;
    }

    const words = children.split(/\s+/).filter(Boolean); // Split by whitespace and remove empty
    const amount = range[1] - range[0];
    const step = amount / words.length;

    return (
        <span className={cn("inline-flex flex-wrap justify-center", className)}>
            {words.map((word, i) => {
                const start = range[0] + (i * step);
                const end = Math.min(range[1], start + step * 2); // Overlap slightly for smoothness

                const opacity = useTransform(progress, [start, end], [0.1, 1]);
                const blur = useTransform(progress, [start, end], [10, 0]);
                const y = useTransform(progress, [start, end], [10, 0]);

                return (
                    <motion.span
                        key={i}
                        style={{
                            opacity,
                            filter: useTransform(blur, b => `blur(${b}px)`),
                            y // Add subtle slide up
                        }}
                        className="mr-[0.25em] relative"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </span>
    );
};
