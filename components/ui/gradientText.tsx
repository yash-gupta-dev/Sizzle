import { Text, TextProps } from "./text"

const GradientText = ({
    ...rest
}: TextProps) => {
    return <Text {...rest} style={{
        backgroundImage: "linear-gradient(to bottom, #FFFFFF, #FFFFFF00)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        fontSize: "60px",
        fontFamily: 'var(--font-plak-condensed)',
        fontWeight: '900'
    }}
    >{rest.children}</Text>
}

export { GradientText }