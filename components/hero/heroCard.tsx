import Image from "next/image";
import { Text } from "../ui/text";
import { EyeIcon, LeaderBoardGradientIcon, SizzleLogo } from "@/assets/icons";

interface HeroCardProps {
    image: string,
    badge: string,
    logo: string,
    director: string,
    duration: string,
    views: number,
    tags: Array<string>,
    description: string | undefined,
    stats?: {
        pics: number,
        videos: number,
        likes: number,
    },
}

export default function HeroCard({
    image,
    badge,
    logo,
    director,
    duration,
    tags,
    views,
    description
}: HeroCardProps) {
    return (
        <div className="p-3 rounded-[15px] hover:bg-(--hero-background-hover) cursor-pointer">
            {/* MARK: Hero Image */}
            <div
                className="group h-110 relative rounded-[15px] p-4 transition-colors duration-300 hover:bg-[#19191B] bg-cover text-foreground"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute p-5 top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] rounded-[15px]">
                    <div className="flex h-full border rounded-[10px]" />
                </div>

                <div className="flex items-center absolute top-12.5 left-12.5 bg-(--tag-background) py-1.75 px-2 gap-1.25 text-[10px] rounded-[6px]">
                    {
                        badge === 'ORIGINAL' ? <SizzleLogo className="w-8.75 h-3" /> : <LeaderBoardGradientIcon />
                    }
                    {badge}
                </div>
                <div className="absolute left-12.5 bottom-12.5">

                    <div className="flex flex-col justify-betweens self-end">
                        <Image
                            src={logo}
                            alt={director}
                            objectFit="contain"
                            width={80}
                            height={80}
                        />
                        <div className="mb-5">
                            {
                                director.split(" ").map((word, index) => (
                                    <Text
                                        key={index}
                                        size={"lg"}
                                        className="whitespace-pre font-(--font-plak-condensed) tracking-normal leading-12 capitalize"
                                        weight={"extrabold"}
                                        style={{ fontFamily: 'plakCondensed', fontWeight: '700' }}
                                    >
                                        {word}
                                    </Text>
                                ))
                            }
                        </div>

                        <div className="flex gap-1.25">
                            {
                                duration ? <div className="flex leading-5.5 bg-(--tag-background) py-0.5 px-2 gap-1 text-[12px] rounded-lg">
                                    <Text>4K</Text>
                                    <Text>{duration}</Text>
                                </div> : null
                            }
                            {
                                tags.map(t => {
                                    return <div className="leading-5.5 bg-(--tag-background) py-0.5 px-2 text-[12px] rounded-lg" key={t}>
                                        <Text>#{t}</Text>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* MARK: Hero Description */}
            <div className="pt-3 text-[16px]">
                <Text>{description}</Text>
                <div className="flex items-center gap-2 text-(--hero-director-text)">
                    <Text>{director}</Text>
                    <div className="flex items-center gap-1">
                        <EyeIcon />
                        <Text weight={'normal'}>{views} views • 2d</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
