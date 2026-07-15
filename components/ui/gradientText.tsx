import { Text, TextProps } from "./text"

interface GradientTextProps extends TextProps {
    gradient?: string;
}

const GradientText = ({
    gradient = "linear-gradient(to bottom, #FFFFFF, #FFFFFF00)",
    ...rest
}: GradientTextProps) => {
    return <Text {...rest} style={{
        backgroundImage: gradient,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        fontSize: `${rest.size || 60}px`,
        fontFamily: 'var(--font-plak-condensed)',
        fontWeight: '900',
        ...rest.style,
    }}
    >{rest.children}</Text>
}

export { GradientText }