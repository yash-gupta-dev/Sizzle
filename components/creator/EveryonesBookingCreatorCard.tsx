import { LeaderBoardGradientIcon } from "@/assets/icons";
import { GradientText } from "../ui/gradientText";
import { Text } from "../ui/text";

export interface HottestCreatorCardProps {
    rank: number;
    name: string;
    image: string;
    primaryColor?: string;
    categories: string[];
}

function EveryonesBookingCreatorCard({
    name,
    rank,
    image,
    primaryColor,
    categories
}: HottestCreatorCardProps) {

    return (
        <div className="relative bg-center bg-cover">
            <div className="absolute left-[-35%] z-10">
                <GradientText size={'6xl'}>{rank}</GradientText>
            </div>
            <div
                className="relative flex items-end rounded-[15px] h-100 w-65 bg-center bg-cover z-20"
                style={{ backgroundImage: `url(${image})` }}
            >

                <div className="relative pl-5 pb-5 w-full rounded-b-[15px]"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #00000000 0%, ${primaryColor} 90%, ${primaryColor})`
                    }}
                >
                    <div
                        className="absolute inset-0 backdrop-blur-md z-10 rounded-b-[15px]"
                        style={{
                            maskImage: "linear-gradient(to bottom, transparent 10%, black 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, black 100%)",
                        }}
                    />
                    <div className="relative flex items-center w-fit bg-translucent-bg py-1.75 px-2.5 gap-1.25 text-[10px] rounded-[6px] z-20">
                        {
                            <LeaderBoardGradientIcon />
                        }
                        <Text size={'xxs'}>Top Rated</Text>
                    </div>

                    <div className="relative mb-3.75 z-20">
                        {name.split(" ").map((word) => (
                            <Text key={word} className="leading-10" size={'2xl'} weight={'bold'} style={{ fontFamily: 'plakCondensed' }}>
                                {word.toUpperCase()}
                            </Text>
                        ))}
                    </div>

                    <Text className="relative text-foreground z-20" weight={'normal'} size={'sm'}>{categories?.join(" · ")}</Text>
                </div>

            </div>
        </div>
    )
}

export default EveryonesBookingCreatorCard 
