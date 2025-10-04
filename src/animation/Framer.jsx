export const popUpAnimationVariants = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.3 },
    },
};

export const popUpAnimationProps = {
    variants: popUpAnimationVariants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true,
    }
};

export const textAnimationvariants = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.3 },
    }
};

export const textAnimationProps = {
    variants: textAnimationvariants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true,
    },
};

export const easeInOutAnimationVariants = {
    initial: { opacity: 0, scale: 0.5, y: 40 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.5 },
};

export const easeInOutAnimationProps = {
    variants: easeInOutAnimationVariants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true,
    },
};