import { FlashFilledIcon, LeaderBoardGradientIcon, LikeFilledIcon, TrendingFlameIcon } from "@/assets/icons";
import { GradientText } from "../ui/gradientText";
import { Text } from "../ui/text";
import DynamicBorder from "../ui/dynamicBorder";

export interface HottestCreatorCardProps {
    rank?: number;
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
        <div className={`relative bg-center bg-cover ${!rank ? 'min-w-77.75 min-h-100' : ''}`}>
            {rank ? <div className={`absolute ${rank === 1 ? "left-[-25%]" : "left-[-35%]"} z-10`}>
                <GradientText size={'6xl'} gradient="linear-gradient(to bottom, #FFFFFF10 40%, #FFFFFF90)"
                >{rank}</GradientText>
            </div> : null}
            <div
                className={`relative flex items-end rounded-[15px] h-100 min-w-${rank ? "65" : "77.75"} w-${rank ? "65" : "77.75"} bg-center bg-cover z-20`}
                style={{ backgroundImage: `url(${image})` }}
            >

                {!rank && <DynamicBorder className="m-3.75 z-30" borderColor={primaryColor} logoSize={10.5} />}

                <div className={`relative ${rank ? 'pb-0' : 'pb-11.5'} w-full rounded-b-[15px]`}
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #00000000 0%, ${primaryColor} 90%, ${primaryColor})`
                    }}
                >

                    <div className={`${rank ? 'pl-5' : 'pl-11.5'}`}>
                        <div
                            className="absolute inset-0 backdrop-blur-md z-10 rounded-b-[15px]"
                            style={{
                                maskImage: "linear-gradient(to bottom, transparent 10%, black 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, black 100%)",
                            }}
                        />
                        <div className="relative flex items-center w-fit bg-translucent-bg py-1.5 px-2.5 gap-1.25 text-[10px] rounded-[6px] z-20">
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

                    </div>

                    {
                        !rank ? <Text className={`relative pl-11.5 text-foreground z-20`} weight={'normal'} size={'sm'}>{categories?.join(" · ")}</Text> : <div className="relative z-20">
                            <div className="flex items-center my-1.5 gap-2.5 pl-5">
                                <div className="flex items-center gap-1.25">
                                    <LikeFilledIcon className="h-3" />
                                    <Text weight={'normal'} size={"sm"}>98%</Text>
                                    <Text weight={'light'} size={"xs"} className="text-text-secondary">(135)</Text>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FlashFilledIcon className="h-3 text-premium" />
                                    <Text weight={'normal'} size={"sm"}>24hr</Text>
                                </div>
                            </div>

                            <div className="mt-3 px-5 pt-2 pb-3.75 bg-background/25">
                                <div className="flex justify-between mb-0.75">
                                    <Text weight={'normal'} size={"sm"}>10 min video call</Text>
                                    <Text weight={'normal'} size={"sm"}>$19.99</Text>
                                </div>
                                <div className="flex gap-1.25">
                                    <TrendingFlameIcon className="w-2.5" />
                                    <Text weight={'light'} size={"xs"}>Booked 12 times this week</Text>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default EveryonesBookingCreatorCard 
