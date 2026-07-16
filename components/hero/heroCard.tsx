"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { Text } from "../ui/text";
import { CrownRewardIcon, EyeIcon, GalleryIcon, LeaderBoardGradientIcon, PlaylistIcon, SizzleLogo } from "@/assets/icons";
import DynamicBorder from "../ui/dynamicBorder";

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
        photos?: number,
        videos?: number,
        score?: number,
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
    description,
    stats
}: HeroCardProps) {
    console.log(stats);

    return (
        <motion.div
            initial={false}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            whileHover={{ backgroundColor: 'var(--gray-3)' }}
            className="p-3 rounded-[15px] w-full cursor-pointer"
        >
            {/* MARK: Hero Image */}
            <div
                className="group h-120 relative rounded-[15px] p-4 bg-cover text-foreground"
                style={{ backgroundImage: `url(${image})` }}
            >
                <DynamicBorder className="m-5" />

                <div className="absolute top-12.5 left-12.5 flex items-center justify-center py-px pt-[0.5px] p-[0.5px] min-w-8.5 h-fit w-fit rounded-[6px]"
                    style={{ backgroundImage: "linear-gradient(to left, #D9107F, #EE1E03, #F61785, #FC7C20)" }}
                >
                    <div className="relative top-[0.5px] flex items-center justify-center gap-1.25 bg-[#2A2925] w-full h-full rounded-[6px] py-1.75 px-2">
                        {
                            badge === 'ORIGINAL' ? <SizzleLogo className="w-8.75 h-3" /> : <LeaderBoardGradientIcon className="h-3" />
                        }
                        <Text size={'xxs'}>{badge}</Text>
                    </div>

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

                        {
                            stats?.videos ? <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                    <GalleryIcon />
                                    <Text size={'sm'} weight={'normal'}>{stats.photos}</Text>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <PlaylistIcon />
                                    <Text size={'sm'} weight={'normal'}>{stats.videos}</Text>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <CrownRewardIcon />
                                    <Text size={'sm'} weight={'normal'}>{stats.score}</Text>
                                </div>
                            </div> : <div className="flex gap-1.25">
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
                        }
                    </div>
                </div>
            </div>

            {/* MARK: Hero Description */}
            <div className="pt-3 text-[16px]">
                <Text>{description}</Text>
                <div className="flex items-center gap-2 text-card-hover">
                    <Text>{director}</Text>
                    <div className="flex items-center gap-1">
                        <EyeIcon className="w-3" />
                        <Text weight={'normal'}>{views} views • 2d</Text>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
