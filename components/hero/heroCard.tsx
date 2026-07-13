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
        <div className="p-3 rounded-[15px] hover:bg-card-hover-bg cursor-pointer">
            {/* MARK: Hero Image */}
            <div
                className="group h-120 relative rounded-[15px] p-4 hover:bg-card-hover-bg bg-cover text-foreground"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute p-5 top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] rounded-[15px]">
                    <div className="flex h-full border-2 border-white/50 rounded-[10px]" />
                </div>

                <div className="flex items-center absolute top-12.5 left-12.5 bg-translucent-bg py-1.75 px-2.5 gap-1.25 text-[10px] rounded-[6px]">
                    {
                        badge === 'ORIGINAL' ? <SizzleLogo className="w-8.75 h-3" /> : <LeaderBoardGradientIcon />
                    }
                    <Text size={'xxs'}>{badge}</Text>
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
                                        size={"3xl"}
                                        className="whitespace-pre font-(--font-plak-condensed) tracking-normal leading-12 capitalize"
                                        weight={"extrabold"}
                                        style={{ fontFamily: 'plakCondensed', fontWeight: '700' }}
                                    >
                                        {word.toUpperCase()}
                                    </Text>
                                ))
                            }
                        </div>

                        <div className="flex gap-1.25">
                            {
                                duration ? <div className="flex leading-5.5 bg-translucent-bg py-0.5 px-2 gap-1 text-[12px] rounded-[6px]">
                                    <Text size={'xs'}>4K</Text>
                                    <Text size={'xs'} weight={'light'}>{duration}</Text>
                                </div> : null
                            }
                            {
                                tags.map(t => {
                                    return <div className="leading-5.5 bg-translucent-bg py-0.5 px-2 text-[12px] rounded-[6px]" key={t}>
                                        <Text size={'xs'}>#{t}</Text>
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
                <div className="flex items-center gap-2 text-card-hover">
                    <Text>{director}</Text>
                    <div className="flex items-center gap-1">
                        <EyeIcon className="w-3"/>
                        <Text weight={'normal'}>{views} views • 2d</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
