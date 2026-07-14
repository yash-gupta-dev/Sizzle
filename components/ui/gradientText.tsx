import { Text, TextProps } from "./text"

const GradientText = ({
    ...rest
}: TextProps) => {
    return <Text {...rest} style={{
        backgroundImage: "linear-gradient(to bottom, #FFFFFF00 35%, #FFFFFF)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        fontSize: `${rest.size || 60}px`,
        fontFamily: 'var(--font-plak-condensed)',
        fontWeight: '900'
    }}
    >{rest.children}</Text>
}

export { GradientText }