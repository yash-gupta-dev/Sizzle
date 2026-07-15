import { LeaderBoardGradientIcon } from "@/assets/icons";
import { GradientText } from "../ui/gradientText";
import { Text } from "../ui/text";

export interface HottestCreatorCardProps {
    rank: number;
    name: string;
    image: string;
    categories: string[];
}

function HottestCreatorCard({
    name,
    rank,
    image,
    categories
}: HottestCreatorCardProps) {

    return (
        <div className="relative bg-center bg-cover">
            <div className="absolute left-[-35%] z-10">
                <GradientText size={'6xl'} gradient="linear-gradient(to bottom, #FFFFFF 5%, #FFFFFF25 75%)">{rank}</GradientText>
            </div>
            <div
                className="relative flex items-end rounded-[15px] h-100 w-65 bg-center bg-cover z-20"
                style={{ backgroundImage: `url(${image})` }}
            >

                <div className="relative pl-5 pb-5 w-full rounded-b-[15px]"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, #00000000 10%, #000000 100%)'
                    }}
                >
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

                    <Text className="relative text-foreground z-20" weight={'light'} size={'sm'}>{categories?.join(" · ")}</Text>
                </div>

            </div>
        </div>
    )
}

export default HottestCreatorCard 
