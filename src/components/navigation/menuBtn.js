import React from 'react';
import { motion } from 'motion/react';

const MenuBtn = ({ open, onClick, className }) => {
    const topLineVariants = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        open: {
            rotate: 45,
            translateY: 8,
        },
    };

    const middleLineVariants = {
        closed: {
            opacity: 1,
        },
        open: {
            opacity: 0,
        },
    };

    const bottomLineVariants = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        open: {
            rotate: -45,
            translateY: -8,
        },
    };

    const lineProps = {
        className: 'block h-0.75 w-6 bg-white rounded-lg',
        initial: 'closed',
        animate: open ? 'open' : 'closed',
        transition: { duration: 0.3 },
    };

    return (
        <button
            onClick={onClick}
            className={`p-2 space-y-1.25 focus:outline-none scale-120 active:scale-110 transition-all duration-200 ${className}`}
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={open}
        >
            <motion.span
                {...lineProps}
                variants={topLineVariants}
            />
            <motion.span
                {...lineProps}
                variants={middleLineVariants}
            />
            <motion.span
                {...lineProps}
                variants={bottomLineVariants}
            />
        </button>
    );
};

export default MenuBtn